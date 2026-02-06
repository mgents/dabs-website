import { createClient } from '@/lib/supabase/server';
import type { InquiryType, InquiryStatus, Inquiry } from '@/types/database';

export async function createInquiry(
  type: InquiryType,
  payload: Record<string, unknown>
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();
  const { error } = await supabase
    .from('inquiries')
    .insert({ type, payload_json: payload });

  if (error) {
    console.error('Error creating inquiry:', error);
    return { success: false, error: error.message };
  }
  return { success: true };
}

export async function getInquiries(status?: InquiryStatus): Promise<Inquiry[]> {
  const supabase = await createClient();
  let query = supabase
    .from('inquiries')
    .select('*')
    .order('created_at', { ascending: false });

  if (status) {
    query = query.eq('status', status);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching inquiries:', error);
    return [];
  }
  return data || [];
}

export async function updateInquiryStatus(
  id: string,
  status: InquiryStatus
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();
  const { error } = await supabase
    .from('inquiries')
    .update({ status })
    .eq('id', id);

  if (error) {
    console.error('Error updating inquiry status:', error);
    return { success: false, error: error.message };
  }
  return { success: true };
}
