import crypto from "crypto"

const SECRET = process.env.CAPTCHA_SECRET || process.env.RESEND_API_KEY || "fallback-dev-secret"

function sign(value: string) {
  return crypto.createHmac("sha256", SECRET).update(value).digest("hex").slice(0, 24)
}

export function makeChallenge() {
  const a = Math.floor(Math.random() * 8) + 2
  const b = Math.floor(Math.random() * 8) + 2
  const op = Math.random() > 0.5 ? "+" : "×"
  const answer = op === "+" ? a + b : a * b
  const ts = Date.now()
  const payload = `${answer}.${ts}`
  const token = `${Buffer.from(payload).toString("base64url")}.${sign(payload)}`
  return { question: `${a} ${op} ${b}`, token }
}

export function verifyChallenge(token: string, userAnswer: string): boolean {
  if (!token || !userAnswer) return false
  const [encoded, sig] = token.split(".")
  if (!encoded || !sig) return false
  let payload: string
  try {
    payload = Buffer.from(encoded, "base64url").toString("utf8")
  } catch {
    return false
  }
  if (sign(payload) !== sig) return false
  const [answer, tsStr] = payload.split(".")
  const ts = Number(tsStr)
  if (!Number.isFinite(ts)) return false
  if (Date.now() - ts > 10 * 60 * 1000) return false
  return String(userAnswer).trim() === answer
}
