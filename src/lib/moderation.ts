import Sentiment from "sentiment";
import type { LoveNoteInput } from "@/lib/types";

const analyzer = new Sentiment();

const PROFANITY_PATTERN =
  /\b(fuck|fucking|fucked|shit|shitty|bitch|bastard|damn|crap|piss|wanker|twat|bollocks|asshole|dickhead|motherfucker|cunt)\b/i;

const HATE_PATTERN =
  /\b(kill yourself|kys|die|hate you|fuck you|stupid idiots?|scum|worthless)\b/i;

const URL_PATTERN = /https?:\/\/|www\./i;

export type ModerationResult =
  | { allowed: true }
  | { allowed: false; reason: string };

function moderateField(text: string, label: string): ModerationResult {
  const trimmed = text.trim();

  if (trimmed.length === 0) {
    return { allowed: false, reason: `${label} cannot be empty.` };
  }

  if (PROFANITY_PATTERN.test(trimmed)) {
    return {
      allowed: false,
      reason: `${label} contains language that isn't suitable for the wall.`,
    };
  }

  if (HATE_PATTERN.test(trimmed)) {
    return {
      allowed: false,
      reason: `${label} contains wording that doesn't fit a message of gratitude.`,
    };
  }

  if (URL_PATTERN.test(trimmed)) {
    return {
      allowed: false,
      reason: `${label} cannot include links.`,
    };
  }

  if (trimmed.length > 20 && trimmed === trimmed.toUpperCase()) {
    return {
      allowed: false,
      reason: `${label} looks like shouting. Please use normal sentence case.`,
    };
  }

  return { allowed: true };
}

function moderateMessageSentiment(message: string): ModerationResult {
  const result = analyzer.analyze(message);

  if (result.score <= -2) {
    return {
      allowed: false,
      reason:
        "This message reads as negative. Love notes should be warm and appreciative in tone.",
    };
  }

  if (result.comparative <= -0.35) {
    return {
      allowed: false,
      reason:
        "This message doesn't sound grateful enough for the wall. Try focusing on appreciation.",
    };
  }

  return { allowed: true };
}

export function moderateLoveNote(input: LoveNoteInput): ModerationResult {
  const organization = moderateField(input.organization_name, "Organisation name");
  if (!organization.allowed) {
    return organization;
  }

  const message = moderateField(input.message, "Love note");
  if (!message.allowed) {
    return message;
  }

  const sentiment = moderateMessageSentiment(input.message);
  if (!sentiment.allowed) {
    return sentiment;
  }

  if (input.supporter_name) {
    const supporter = moderateField(input.supporter_name, "Supporter name");
    if (!supporter.allowed) {
      return supporter;
    }
  }

  return { allowed: true };
}
