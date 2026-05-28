import { getEmailConfigStatus, sendContactNotification } from "@/lib/notifications";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(getEmailConfigStatus());
}

export async function POST(request: NextRequest) {
  const secret = process.env.HEALTH_CHECK_SECRET?.trim();
  const provided = request.nextUrl.searchParams.get("secret")?.trim();

  if (!secret || provided !== secret) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const result = await sendContactNotification({
    email: "test@example.com",
    name: "Email health check",
    message: "This is a test from the DOTS email health check endpoint.",
  });

  return NextResponse.json(result, { status: result.ok ? 200 : 500 });
}
