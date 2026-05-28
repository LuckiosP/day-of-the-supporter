import { Container } from "@/components/Container";
import { PageHeader } from "@/components/PageHeader";

const TEMPLATES = [
  {
    name: "Supporter Love Note",
    description:
      "The universal graphic template. Add your one sentence and post on the day.",
    formats: [
      { label: "SVG (editable)", href: "/templates/supporter-love-note.svg" },
    ],
    preview: "/templates/supporter-love-note.svg",
  },
];

const COLOURS = [
  { name: "Warm terracotta", hex: "#C17F59" },
  { name: "Soft sage", hex: "#8A9A7B" },
  { name: "Warm cream", hex: "#FAF8F5" },
  { name: "Stone", hex: "#78716C" },
];

export const metadata = {
  title: "Templates",
};

export default function TemplatesPage() {
  return (
    <Container className="py-16 sm:py-24">
      <PageHeader
        title="Download templates"
        description="Brand-neutral, ready to use. Download, add your sentence, and post."
      />

      <div className="space-y-12">
        {TEMPLATES.map((template) => (
          <article
            key={template.name}
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
          >
            <div className="border-b border-stone-100 bg-stone-50 p-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={template.preview}
                alt={`Preview of ${template.name} template`}
                className="mx-auto w-full max-w-lg"
              />
            </div>

            <div className="p-6">
              <h2 className="text-lg font-medium text-stone-900">
                {template.name}
              </h2>
              <p className="mt-2 text-stone-600">{template.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {template.formats.map((format) => (
                  <a
                    key={format.href}
                    href={format.href}
                    download
                    className="inline-flex items-center rounded-full border border-stone-300 bg-white px-5 py-2.5 text-sm font-medium text-stone-800 transition-colors hover:border-stone-400 hover:bg-stone-50"
                  >
                    Download {format.label}
                  </a>
                ))}
              </div>
              <p className="mt-4 text-sm text-stone-500">
                Need PNG? Export from the SVG in Canva, Figma, or your usual
                design tool.
              </p>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="font-serif text-2xl font-medium text-stone-900">
          Brand-neutral colours
        </h2>
        <p className="mt-2 text-stone-600">
          Use these as a starting point, or adapt to your own brand.
        </p>

        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {COLOURS.map((colour) => (
            <li
              key={colour.hex}
              className="flex items-center gap-4 rounded-xl border border-stone-200 bg-white p-4"
            >
              <span
                className="h-12 w-12 shrink-0 rounded-lg border border-stone-200"
                style={{ backgroundColor: colour.hex }}
              />
              <div>
                <p className="font-medium text-stone-900">{colour.name}</p>
                <p className="text-sm text-stone-500">{colour.hex}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
}
