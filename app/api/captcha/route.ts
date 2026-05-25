import { NextResponse } from "next/server"
import { makeChallenge } from "@/lib/captcha"

export async function GET() {
  return NextResponse.json(makeChallenge())
}
