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

export type ContactInquiry = {
  id: string;
  email: string;
  name: string | null;
  organisation: string | null;
  message: string | null;
  created_at: string;
};

export type ContactInquiryInput = {
  email: string;
  name?: string;
  organisation?: string;
  message?: string;
};
