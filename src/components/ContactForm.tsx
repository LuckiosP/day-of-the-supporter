"use client";

import { submitContactInquiry } from "@/app/contact/actions";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const result = await submitContactInquiry({
      email,
      name: name || undefined,
      organisation: organisation || undefined,
      message: message || undefined,
    });

    if (!result.ok) {
      setStatus("error");
      setErrorMessage(result.error);
      return;
    }

    setEmail("");
    setName("");
    setOrganisation("");
    setMessage("");
    setStatus("success");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-accent/10 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-stone-700"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxLength={254}
            disabled={status === "loading"}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="you@charity.org"
            className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:bg-stone-50"
          />
        </div>

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-stone-700"
          >
            Your name (optional)
          </label>
          <input
            type="text"
            id="name"
            name="name"
            maxLength={100}
            disabled={status === "loading"}
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:bg-stone-50"
          />
        </div>

        <div>
          <label
            htmlFor="organisation"
            className="block text-sm font-medium text-stone-700"
          >
            Organisation (optional)
          </label>
          <input
            type="text"
            id="organisation"
            name="organisation"
            maxLength={100}
            disabled={status === "loading"}
            value={organisation}
            onChange={(event) => setOrganisation(event.target.value)}
            placeholder="Your charity or organisation"
            className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:bg-stone-50"
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-stone-700"
          >
            Message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            maxLength={1000}
            disabled={status === "loading"}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tell us how you'd like to get involved, or ask a question…"
            className="mt-1.5 w-full rounded-lg border border-stone-300 bg-white px-4 py-2.5 text-stone-900 placeholder:text-stone-400 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 disabled:bg-stone-50"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-6 w-full rounded-full bg-accent px-6 py-3 text-base font-medium text-white shadow-md shadow-accent/20 transition-colors hover:bg-accent-dark disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "loading" ? "Sending…" : "Get in touch"}
      </button>

      {status === "success" && (
        <p className="mt-4 text-sm text-sage">
          Thank you — we&apos;ve received your message and will be in touch.
        </p>
      )}

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
      )}
    </form>
  );
}
