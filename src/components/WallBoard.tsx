"use client";

import { MessageCard } from "@/components/MessageCard";
import { MessageForm } from "@/components/MessageForm";
import { DOTS_HASHTAG } from "@/lib/constants";
import type { LoveNote } from "@/lib/types";
import { useState } from "react";

type WallBoardProps = {
  disabled?: boolean;
  initialMessages?: LoveNote[];
};

export function WallBoard({
  disabled = false,
  initialMessages = [],
}: WallBoardProps) {
  const [messages, setMessages] = useState<LoveNote[]>(initialMessages);

  function handlePosted(note: LoveNote) {
    setMessages((current) => [note, ...current]);
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
      <MessageForm disabled={disabled} onPosted={handlePosted} />

      <section>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <h2 className="font-serif text-2xl font-medium text-stone-900">
              Love notes
            </h2>
            <p className="mt-1 text-sm text-stone-600">
              Posted by charities taking part in DOTS.
            </p>
          </div>
          <p className="text-sm text-stone-500">{DOTS_HASHTAG}</p>
        </div>

        {messages.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-stone-300 bg-stone-50 p-10 text-center">
            <p className="font-serif text-lg text-stone-700">
              The wall is waiting for its first love note.
            </p>
            <p className="mt-2 text-sm text-stone-500">
              Be the first charity to share your gratitude.
            </p>
          </div>
        ) : (
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {messages.map((note) => (
              <li key={note.id}>
                <MessageCard note={note} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
