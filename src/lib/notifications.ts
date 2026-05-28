import type { ContactInquiryInput } from "@/lib/types";

export async function sendContactNotification(
  inquiry: ContactInquiryInput,
): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.NOTIFY_EMAIL;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ?? "DOTS <onboarding@resend.dev>";

  if (!apiKey) {
    console.warn(
      "Contact notification skipped: RESEND_API_KEY is not set.",
    );
    return;
  }

  if (!notifyEmail) {
    console.warn(
      "Contact notification skipped: NOTIFY_EMAIL is not set.",
    );
    return;
  }

  const lines = [
    "New DOTS contact form submission",
    "",
    `Email: ${inquiry.email}`,
    inquiry.name ? `Name: ${inquiry.name}` : null,
    inquiry.organisation ? `Organisation: ${inquiry.organisation}` : null,
    inquiry.message ? `Message: ${inquiry.message}` : null,
    "",
    "View all submissions in your Supabase dashboard (contact_inquiries table).",
  ].filter(Boolean);

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [notifyEmail],
        subject: "New DOTS contact enquiry",
        text: lines.join("\n"),
      }),
    });

    if (!response.ok) {
      const body = await response.text();
      console.error(
        `Resend API error (${response.status}): ${body}`,
      );
      return;
    }

    console.info(
      `Contact notification sent to ${notifyEmail} via ${fromEmail}`,
    );
  } catch (error) {
    console.error("Failed to send contact notification:", error);
  }
}
