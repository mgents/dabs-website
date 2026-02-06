export type RegistrationMode = 'url' | 'email' | 'none';
export type InquiryType = 'contact' | 'membership' | 'sponsorship';
export type InquiryStatus = 'new' | 'in_progress' | 'closed';

export interface Event {
  id: string;
  title: string;
  slug: string;
  start_datetime: string;
  end_datetime: string | null;
  timezone: string;
  location_name: string | null;
  location_address: string | null;
  map_url: string | null;
  featured_image_url: string | null;
  excerpt: string | null;
  content_html: string | null;
  registration_mode: RegistrationMode;
  registration_url: string | null;
  registration_email: string | null;
  google_calendar_url: string | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Inquiry {
  id: string;
  type: InquiryType;
  payload_json: Record<string, unknown>;
  status: InquiryStatus;
  created_at: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface MembershipPayload {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  membershipType: 'corporate' | 'individual' | 'student' | 'startup';
  message?: string;
}

export interface SponsorshipPayload {
  companyName: string;
  contactPerson: string;
  email: string;
  phone?: string;
  industry?: string;
  message: string;
}

export interface EventFormData {
  title: string;
  slug: string;
  start_datetime: string;
  end_datetime?: string;
  timezone: string;
  location_name?: string;
  location_address?: string;
  map_url?: string;
  featured_image_url?: string;
  excerpt: string;
  content_html?: string;
  registration_mode: RegistrationMode;
  registration_url?: string;
  registration_email?: string;
  google_calendar_url?: string;
  is_published: boolean;
}
