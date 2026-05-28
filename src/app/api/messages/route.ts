import { NextResponse } from "next/server";
import { createSupabaseClient, isSupabaseConfigured } from "@/lib/supabase";
import type { LoveNoteInput } from "@/lib/types";

export async function GET() {
  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { error: "Message board is not configured yet." },
      { status: 503 },
    );
  }

  const supabase = createSupabaseClient();

  if (!supabase) {
    return NextResponse.json(
      { error: "Message board is not configured yet." },
      { status: 503 },
    );
  }

  const { data, error } = await supabase
    .from("love_notes")
    .select("id, organization_name, message, supporter_name, created_at")
    .order("created_at", { ascending: false })
    .limit(100);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ messages: data ?? [] });
}

function validateInput(body: unknown): LoveNoteInput | null {
  if (!body || typeof body !== "object") {
    return null;
  }

  const { organization_name, message, supporter_name } = body as Record<
    string,
    unknown
  >;

  if (
    typeof organization_name !== "string" ||
    typeof message !== "string" ||
    organization_name.trim().length === 0 ||
    message.trim().length === 0
  ) {
    return null;
  }

  if (organization_name.length > 100 || message.length > 280) {
    return null;
  }

  if (
    supporter_name !== undefined &&
    supporter_name !== null &&
    typeof supporter_name !== "string"
  ) {
    return null;
  }

  if (typeof supporter_name === "string" && supporter_name.length > 100) {
    return null;
  }

  return {
    organization_name: organization_name.trim(),
    message: message.trim(),
    supporter_name:
      typeof supporter_name === "string" && supporter_name.trim().length > 0
        ? supporter_name.trim()
        : undefined,
  };
}

export async function POST(request: Request) {
  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { error: "Message board is not configured yet." },
      { status: 503 },
    );
  }

  const supabase = createSupabaseClient();

  if (!supabase) {
    return NextResponse.json(
      { error: "Message board is not configured yet." },
      { status: 503 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const input = validateInput(body);

  if (!input) {
    return NextResponse.json(
      { error: "Please provide a charity name and a message (max 280 characters)." },
      { status: 400 },
    );
  }

  const { data, error } = await supabase
    .from("love_notes")
    .insert({
      organization_name: input.organization_name,
      message: input.message,
      supporter_name: input.supporter_name ?? null,
    })
    .select("id, organization_name, message, supporter_name, created_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: data }, { status: 201 });
}
