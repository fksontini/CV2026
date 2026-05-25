import { Resend } from "resend"
import { NextResponse } from "next/server"
import { verifyChallenge } from "@/lib/captcha"

const resend = new Resend(process.env.RESEND_API_KEY)

const MAX_FILES = 3
const MAX_FILE_SIZE = 5 * 1024 * 1024 // 5 MB
const MAX_TOTAL_SIZE = 12 * 1024 * 1024 // 12 MB
const ALLOWED_EXTENSIONS = [".pdf"]
const ALLOWED_MIMES = ["application/pdf"]
const PDF_MAGIC = Buffer.from([0x25, 0x50, 0x44, 0x46, 0x2d]) // "%PDF-"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function clamp(str: unknown, max: number): string {
  return String(str ?? "").slice(0, max).trim()
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

function sanitizeFilename(name: string): string {
  return name
    .replace(/[^\w.\-() ]+/g, "_")
    .replace(/\.{2,}/g, ".")
    .slice(0, 120) || "document.pdf"
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || ""
    if (!contentType.includes("multipart/form-data")) {
      return NextResponse.json({ error: "Format invalide." }, { status: 400 })
    }

    const formData = await request.formData()

    // Honeypot - if filled, it's a bot
    const honeypot = String(formData.get("company_website") || "")
    if (honeypot.trim().length > 0) {
      // Pretend success
      return NextResponse.json({ success: true })
    }

    // Captcha
    const captchaToken = String(formData.get("captchaToken") || "")
    const captchaAnswer = String(formData.get("captchaAnswer") || "")
    if (!verifyChallenge(captchaToken, captchaAnswer)) {
      return NextResponse.json({ error: "Captcha invalide ou expiré." }, { status: 400 })
    }

    const name = clamp(formData.get("name"), 120)
    const email = clamp(formData.get("email"), 200)
    const subject = clamp(formData.get("subject"), 200)
    const message = clamp(formData.get("message"), 6000)

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Tous les champs sont requis." }, { status: 400 })
    }
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json({ error: "Email invalide." }, { status: 400 })
    }
    if (message.length < 10) {
      return NextResponse.json({ error: "Message trop court." }, { status: 400 })
    }

    // Files
    const rawFiles = formData.getAll("attachments").filter((f): f is File => f instanceof File)
    if (rawFiles.length > MAX_FILES) {
      return NextResponse.json({ error: `Maximum ${MAX_FILES} fichiers.` }, { status: 400 })
    }

    const attachments: { filename: string; content: Buffer }[] = []
    let totalSize = 0

    for (const file of rawFiles) {
      if (file.size === 0) continue
      if (file.size > MAX_FILE_SIZE) {
        return NextResponse.json(
          { error: `${file.name} dépasse 5 Mo.` },
          { status: 400 },
        )
      }
      totalSize += file.size
      if (totalSize > MAX_TOTAL_SIZE) {
        return NextResponse.json({ error: "Taille totale dépassée." }, { status: 400 })
      }

      const lowerName = file.name.toLowerCase()
      const ext = lowerName.slice(lowerName.lastIndexOf("."))
      if (!ALLOWED_EXTENSIONS.includes(ext)) {
        return NextResponse.json(
          { error: `Extension non autorisée pour ${file.name}.` },
          { status: 400 },
        )
      }
      if (file.type && !ALLOWED_MIMES.includes(file.type)) {
        return NextResponse.json(
          { error: `Type MIME non autorisé pour ${file.name}.` },
          { status: 400 },
        )
      }

      const buf = Buffer.from(await file.arrayBuffer())

      // Magic bytes check: real PDFs start with "%PDF-"
      if (buf.length < 5 || !buf.subarray(0, 5).equals(PDF_MAGIC)) {
        return NextResponse.json(
          { error: `${file.name} n'est pas un PDF valide.` },
          { status: 400 },
        )
      }

      attachments.push({
        filename: sanitizeFilename(file.name),
        content: buf,
      })
    }

    const { data, error } = await resend.emails.send({
      from: "Formulaire site web <contact@ksontini.fr>",
      to: ["firasksontini@gmail.com"],
      cc: ["firas@ksontini.fr", email],
      replyTo: email,
      subject: `[Formulaire site web] ${subject}`,
      attachments: attachments.length
        ? attachments.map((a) => ({ filename: a.filename, content: a.content }))
        : undefined,
      html: `
        <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#f9fafb;">
          <div style="background:#fff;border-radius:12px;padding:32px;box-shadow:0 1px 3px rgba(0,0,0,.1);">
            <h2 style="color:#111827;margin:0 0 24px;font-size:20px;">Nouveau message depuis le formulaire du site web</h2>
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;width:110px;">De :</td><td style="padding:8px 0;color:#111827;font-size:14px;"><strong>${escapeHtml(name)}</strong></td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Email :</td><td style="padding:8px 0;color:#111827;font-size:14px;"><a href="mailto:${escapeHtml(email)}" style="color:#2563eb;">${escapeHtml(email)}</a></td></tr>
              <tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Sujet :</td><td style="padding:8px 0;color:#111827;font-size:14px;">${escapeHtml(subject)}</td></tr>
              ${attachments.length ? `<tr><td style="padding:8px 0;color:#6b7280;font-size:14px;">Pièces jointes :</td><td style="padding:8px 0;color:#111827;font-size:14px;">${attachments.map((a) => escapeHtml(a.filename)).join(", ")}</td></tr>` : ""}
            </table>
            <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
            <div style="color:#374151;font-size:15px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</div>
          </div>
          <p style="color:#9ca3af;font-size:12px;text-align:center;margin-top:16px;">Envoyé depuis le formulaire de votre site web</p>
        </div>
      `,
      text: `Nouveau message depuis le formulaire du site web\n\nDe : ${name}\nEmail : ${email}\nSujet : ${subject}\n${attachments.length ? `Pièces jointes : ${attachments.map((a) => a.filename).join(", ")}\n` : ""}\n${message}`,
    })

    if (error) {
      console.error("[v0] Resend error:", error)
      return NextResponse.json({ error: "Erreur lors de l'envoi de l'email." }, { status: 500 })
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (err) {
    console.error("[v0] Contact API error:", err)
    return NextResponse.json({ error: "Erreur serveur." }, { status: 500 })
  }
}
