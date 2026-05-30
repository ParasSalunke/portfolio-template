import { NextResponse } from "next/server"
import { Resend } from "resend"

// Initialize Resend with the API key from env vars
// If it's missing, we provide a dummy key so the build doesn't fail,
// but the actual send attempt will fail at runtime.
const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy_key")

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // In a real application, you would verify that process.env.RESEND_API_KEY is defined
    if (!process.env.RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not set. Simulating a successful email send.")
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      return NextResponse.json({ success: true, simulated: true })
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      // Send to the verified email address on your Resend account
      to: [process.env.NEXT_PUBLIC_CONTACT_EMAIL || email], 
      subject: `New Contact: ${subject} from ${name}`,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `,
    })

    if (error) {
      return NextResponse.json({ error }, { status: 400 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
