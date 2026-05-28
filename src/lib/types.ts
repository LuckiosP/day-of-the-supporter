export type LoveNote = {
  id: string;
  organization_name: string;
  message: string;
  supporter_name: string | null;
  created_at: string;
};

export type LoveNoteInput = {
  organization_name: string;
  message: string;
  supporter_name?: string;
};
