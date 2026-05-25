import { generateText } from "ai"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { text, lang } = await req.json()
    if (typeof text !== "string" || text.trim().length < 10) {
      return NextResponse.json({ error: "Texte trop court." }, { status: 400 })
    }
    if (text.length > 4000) {
      return NextResponse.json({ error: "Texte trop long." }, { status: 400 })
    }

    const isFr = lang === "fr"
    const system = isFr
      ? "Tu es l'assistant d'un consultant indépendant Microsoft 365. Reformule le brief du visiteur de façon claire, professionnelle et concise (200 mots max). Garde le ton du visiteur (vouvoiement). Structure en 3 parties courtes : Contexte, Besoin, Attendus. Ne rajoute rien que le visiteur n'a pas dit. Réponds en texte brut, sans markdown ni titres en gras."
      : "You assist an independent Microsoft 365 consultant. Rewrite the visitor's brief in a clear, professional, concise way (200 words max). Keep the visitor's tone. Structure into 3 short blocks: Context, Need, Expectations. Do not invent anything. Plain text, no markdown."

    const { text: rewritten } = await generateText({
      model: "openai/gpt-5-mini",
      system,
      prompt: text,
    })

    return NextResponse.json({ text: rewritten })
  } catch (err) {
    console.error("[v0] AI rewrite error:", err)
    return NextResponse.json({ error: "Reformulation indisponible." }, { status: 500 })
  }
}
