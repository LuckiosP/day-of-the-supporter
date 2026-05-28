"use client";

import { postLoveNote } from "@/app/wall/actions";
import type { LoveNote } from "@/lib/types";
import { FormEvent, useState } from "react";

type MessageFormProps = {
  disabled?: boolean;
  onPosted?: (note: LoveNote) => void;
};

export function MessageForm({ disabled = false, onPosted }: MessageFormProps) {
  const [organizationName, setOrganizationName] = useState("");
  const [message, setMessage] = useState("");
  const [supporterName, setSupporterName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (disabled) {
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    const result = await postLoveNote({
      organization_name: organizationName,
      message,
      supporter_name: supporterName || undefined,
    });

    if (!result.ok) {
      setStatus("error");
      setErrorMessage(result.error);
      return;
    }

    setOrganizationName("");
    setMessage("");
    setSupporterName("");
    setStatus("success");
    onPosted?.(result.note);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm"
    >
      <h2 className="text-lg font-medium text-stone-900">Share a love note</h2>
      <p className="mt-2 text-sm text-stone-600">
        One sentence of gratitude from your charity. Posted to the wall
        immediately.
      </p>
      <p className="mt-2 text-xs text-stone-500">
        Messages are checked automatically to keep the wall warm, grateful, and
        welcoming.
      </p>

      <div className="mt-6 space-y-4">
        <div>
          <label
            htmlFor="organization_name"
            className="block text-sm font-medium text-stone-700"
          >
            Charity or organisation name
          </label>
          <input
            id="organization_name"
            name="organization_name"
            type="text"
            required
            maxLength={100}
            disabled={disabled || status === "loading"}
            value={organizationName}
            onChange={(event) => setOrganizationName(event.target.value)}
            placeholder="Your charity name"
            className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:bg-stone-50"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-stone-700"
          >
            Your love note
          </label>
          <textarea
            id="message"
            name="message"
            required
            maxLength={280}
            rows={3}
            disabled={disabled || status === "loading"}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Our supporters mean the world to us because…"
            className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:bg-stone-50"
          />
          <p className="mt-1 text-xs text-stone-400">
            {message.length}/280 characters
          </p>
        </div>

        <div>
          <label
            htmlFor="supporter_name"
            className="block text-sm font-medium text-stone-700"
          >
            Name a supporter (optional)
          </label>
          <input
            id="supporter_name"
            name="supporter_name"
            type="text"
            maxLength={100}
            disabled={disabled || status === "loading"}
            value={supporterName}
            onChange={(event) => setSupporterName(event.target.value)}
            placeholder="A specific supporter, volunteer, or donor"
            className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:bg-stone-50"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={disabled || status === "loading"}
        className="mt-6 w-full rounded-full bg-accent px-6 py-3 text-base font-medium text-white transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Checking and posting…" : "Post to the wall"}
      </button>

      {status === "success" && (
        <p className="mt-4 text-sm text-sage">
          Thank you — your love note is on the wall.
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
      )}
    </form>
  );
}
