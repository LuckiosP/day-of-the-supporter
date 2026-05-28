# DOTS — Day of the Supporter

A minimal website for the Day of the Supporter initiative — a sector-wide ritual where charities celebrate their supporters with a single love note.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

If `npm install` fails with an SSL certificate error on Windows, the project includes an `.npmrc` that sets `node-options=--use-system-ca`. You can also run:

```bash
$env:NODE_OPTIONS="--use-system-ca"; npm install
```

## Pages

- **Home** — Purpose, date, and call to action
- **How to take part** — 60-second participation guide
- **Templates** — Downloadable Supporter Love Note graphics
- **Wall** — Public message board for love notes
- **About** — Why supporters matter and why this day exists
- **Get involved** — Contact and updates signup

## Message board (Supabase)

The wall at `/wall` stores love notes in Supabase.

1. Create a Supabase project at [supabase.com](https://supabase.com)
2. Run the SQL in `supabase/schema.sql` in the Supabase SQL Editor
3. Copy `.env.example` to `.env.local` and add your project URL and anon key
4. Add the same variables in Vercel → Project → Settings → Environment Variables

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

## Configuration

Edit `src/lib/constants.ts` to update the event date, hashtag, contact email, and navigation.

## Stack

- Next.js (App Router)
- Tailwind CSS
- TypeScript
