import type { LoveNote } from "@/lib/types";

type MessageCardProps = {
  note: LoveNote;
};

function formatDate(isoDate: string) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(isoDate));
}

export function MessageCard({ note }: MessageCardProps) {
  return (
    <article className="flex flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
      <p className="font-serif text-lg leading-relaxed text-stone-800">
        &ldquo;{note.message}&rdquo;
      </p>

      <div className="mt-6 border-t border-stone-100 pt-4">
        <p className="font-medium text-stone-900">{note.organization_name}</p>
        {note.supporter_name && (
          <p className="mt-1 text-sm text-stone-600">
            Celebrating {note.supporter_name}
          </p>
        )}
        <p className="mt-2 text-xs text-stone-400">{formatDate(note.created_at)}</p>
      </div>
    </article>
  );
}
