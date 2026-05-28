export type TemplateFormat = {
  label: string;
  href: string;
  filename: string;
};

export type DownloadTemplate = {
  id: string;
  name: string;
  description: string;
  aspectRatio: string;
  preview: string;
  formats: TemplateFormat[];
};

export const DOWNLOAD_TEMPLATES: DownloadTemplate[] = [
  {
    id: "supporter-love-note",
    name: "Supporter Love Note",
    description:
      "The universal landscape template. Complete the prompt with one sentence and post on the day.",
    aspectRatio: "Landscape (16:9)",
    preview: "/templates/supporter-love-note.svg",
    formats: [
      {
        label: "SVG (editable)",
        href: "/templates/supporter-love-note.svg",
        filename: "dots-supporter-love-note.svg",
      },
    ],
  },
  {
    id: "celebrating-supporters",
    name: "Celebrating Our Supporters",
    description:
      "An alternate prompt for charities who want to lead with celebration rather than gratitude.",
    aspectRatio: "Landscape (16:9)",
    preview: "/templates/celebrating-supporters.svg",
    formats: [
      {
        label: "SVG (editable)",
        href: "/templates/celebrating-supporters.svg",
        filename: "dots-celebrating-supporters.svg",
      },
    ],
  },
  {
    id: "love-note-square",
    name: "Square Love Note",
    description:
      "A square format ideal for Instagram and other social feeds.",
    aspectRatio: "Square (1:1)",
    preview: "/templates/love-note-square.svg",
    formats: [
      {
        label: "SVG (editable)",
        href: "/templates/love-note-square.svg",
        filename: "dots-love-note-square.svg",
      },
    ],
  },
  {
    id: "love-note-minimal",
    name: "Minimal Love Note",
    description:
      "A calm, stripped-back version with more space for your message.",
    aspectRatio: "Landscape (16:9)",
    preview: "/templates/love-note-minimal.svg",
    formats: [
      {
        label: "SVG (editable)",
        href: "/templates/love-note-minimal.svg",
        filename: "dots-love-note-minimal.svg",
      },
    ],
  },
];

export const BRAND_COLOURS = [
  { name: "Warm terracotta", hex: "#C17F59" },
  { name: "Soft sage", hex: "#8A9A7B" },
  { name: "Warm cream", hex: "#FAF8F5" },
  { name: "Stone", hex: "#78716C" },
] as const;
