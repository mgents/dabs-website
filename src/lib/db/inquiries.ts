import { createClient } from '@/lib/supabase/server';
import type { InquiryType, Inquiry } from '@/types/database';

export async function createInquiry(
  type: InquiryType,
  payload: Record<string, unknown>
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();

  // Map payload fields to actual DB columns
  const row: Record<string, unknown> = {
    type,
    name: payload.name ?? payload.contactPerson ?? null,
    email: payload.email ?? null,
    company: payload.company ?? payload.companyName ?? null,
    subject: payload.subject ?? null,
    message: payload.message ?? null,
    membership_type: payload.membershipType ?? null,
    sponsorship_tier: payload.sponsorshipTier ?? null,
    data: payload,
  };

  const { error } = await supabase
    .from('inquiries')
    .insert(row);

  if (error) {
    console.error('Error creating inquiry:', error);
    return { success: false, error: error.message };
  }
  return { success: true };
}

export async function getInquiries(): Promise<Inquiry[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching inquiries:', error);
    return [];
  }
  return data || [];
}

export async function markInquiryRead(
  id: string
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();
  const { error } = await supabase
    .from('inquiries')
    .update({ is_read: true })
    .eq('id', id);

  if (error) {
    console.error('Error marking inquiry as read:', error);
    return { success: false, error: error.message };
  }
  return { success: true };
}
