import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiter (in production, use Redis)
const rateLimitMap = new Map<string, number[]>();

function checkRateLimit(ip: string, limit: number = 5, windowMs: number = 3600000): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ip) || [];

  // Remove old timestamps outside the window
  const recentTimestamps = timestamps.filter(t => now - t < windowMs);

  if (recentTimestamps.length >= limit) {
    return false;
  }

  recentTimestamps.push(now);
  rateLimitMap.set(ip, recentTimestamps);
  return true;
}

async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!process.env.RECAPTCHA_SECRET_KEY) {
    console.warn("RECAPTCHA_SECRET_KEY not configured");
    return true;
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    console.log("reCAPTCHA response:", { success: data.success, score: data.score });
    // Accept if score is above 0.5 (0.0 = definitely a bot, 1.0 = definitely human)
    return data.success && data.score > 0.5;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message, honeypot, recaptchaToken } = body;

    // Get client IP for rate limiting
    const ip = request.headers.get("x-forwarded-for") ||
               request.headers.get("x-real-ip") ||
               "unknown";

    // Check rate limit (5 submissions per hour per IP)
    if (!checkRateLimit(ip, 5, 3600000)) {
      return NextResponse.json(
        { error: "Too many submissions. Please try again later." },
        { status: 429 }
      );
    }

    // Honeypot check - if filled, it's a bot
    if (honeypot && honeypot.trim() !== "") {
      // Silently reject but return success to confuse bots
      return NextResponse.json(
        { success: true, message: "Form submitted successfully" },
        { status: 200 }
      );
    }

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Verify reCAPTCHA token (optional if not provided)
    if (recaptchaToken && recaptchaToken.trim() !== "") {
      const isHuman = await verifyRecaptcha(recaptchaToken);
      if (!isHuman) {
        // In development, be more lenient - just log instead of blocking
        if (process.env.NODE_ENV === "development") {
          console.warn("reCAPTCHA verification failed but allowing submission in development mode");
        } else {
          return NextResponse.json(
            { error: "Verification failed. Please try again." },
            { status: 400 }
          );
        }
      }
    } else if (process.env.RECAPTCHA_SECRET_KEY) {
      console.warn("reCAPTCHA token not provided");
    }

    const contactEmail = process.env.CONTACT_EMAIL || "contact@myodaycare.com";

    // Send email via Resend
    if (process.env.RESEND_API_KEY) {
      try {
        const emailResult = await resend.emails.send({
          from: "delivered@resend.dev",
          to: contactEmail,
          replyTo: email,
          subject: `New Contact Form Submission: ${subject}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong></p>
            <p>${message.replace(/\n/g, "<br>")}</p>
          `,
        });
        console.log("Email sent successfully:", emailResult);
      } catch (emailError) {
        console.error("Error sending email via Resend:", emailError);
        // Still return success to user, log for debugging
      }
    } else {
      // Log to console if Resend not configured
      console.log("Contact form submission (Resend not configured):", {
        name,
        email,
        phone,
        subject,
        message,
        timestamp: new Date().toISOString(),
      });
    }

    // Return success response
    return NextResponse.json(
      { success: true, message: "Form submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
