export type InquiryType = 'contact' | 'membership' | 'sponsorship';

export interface Event {
  id: string;
  title: string;
  slug: string;
  start_datetime: string;
  end_datetime: string | null;
  location_name: string | null;
  location_address: string | null;
  location_url: string | null;
  featured_image_url: string | null;
  excerpt: string | null;
  description: string | null;
  registration_url: string | null;
  is_members_only: boolean;
  member_price: number;
  non_member_price: number | null;
  is_published: boolean;
  created_at: string;
  updated_at: string;
}

export interface Inquiry {
  id: string;
  type: InquiryType;
  name: string;
  email: string;
  company: string | null;
  subject: string | null;
  message: string | null;
  membership_type: string | null;
  sponsorship_tier: string | null;
  data: Record<string, unknown> | null;
  is_read: boolean;
  created_at: string;
}

export interface EventRegistrationPayload {
  name: string;
  email: string;
  company?: string;
  position?: string;
  phone?: string;
  membershipType: string;
  eventTitle: string;
  eventSlug: string;
  message?: string;
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
  location_name?: string;
  location_address?: string;
  location_url?: string;
  featured_image_url?: string;
  excerpt: string;
  description?: string;
  registration_url?: string;
  is_members_only: boolean;
  member_price: number;
  non_member_price?: number;
  is_published: boolean;
}
