-- Run this in the Supabase SQL Editor for your project.

create table if not exists public.love_notes (
  id uuid primary key default gen_random_uuid(),
  organization_name text not null check (char_length(organization_name) between 1 and 100),
  message text not null check (char_length(message) between 1 and 280),
  supporter_name text check (supporter_name is null or char_length(supporter_name) <= 100),
  created_at timestamptz not null default now()
);

create index if not exists love_notes_created_at_idx
  on public.love_notes (created_at desc);

alter table public.love_notes enable row level security;

create policy "Anyone can read love notes"
  on public.love_notes
  for select
  using (true);

create policy "Anyone can post love notes"
  on public.love_notes
  for insert
  with check (true);
