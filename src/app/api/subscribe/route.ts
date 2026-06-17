import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const { email } = await req.json()

  if (!email || typeof email !== "string" || !email.includes("@")) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 })
  }

  const apiKey = process.env.NEWSLETTER_API_KEY
  const publicationId = process.env.NEWSLETTER_PUBLICATION_ID

  if (!apiKey || !publicationId) {
    // No Beehiiv credentials yet — log and return success so the form works
    console.log(`[subscribe] ${email} (Beehiiv not wired yet)`)
    return NextResponse.json({ ok: true })
  }

  const res = await fetch(
    `https://api.beehiiv.com/v2/publications/${publicationId}/subscriptions`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email,
        reactivate_existing: false,
        send_welcome_email: true,
      }),
    }
  )

  if (!res.ok) {
    const body = await res.text()
    console.error(`[subscribe] Beehiiv error ${res.status}: ${body}`)
    return NextResponse.json({ error: "Subscription failed" }, { status: 502 })
  }

  return NextResponse.json({ ok: true })
}
