'use server';

import { createClient } from '@/lib/supabase/server';
import { eventSchema } from '@/lib/validations/event';
import { revalidatePath } from 'next/cache';

export async function createEvent(
  formData: FormData
): Promise<{ success: boolean; error?: string; id?: string }> {
  const raw = Object.fromEntries(formData.entries());

  const parsed = {
    ...raw,
    is_published: raw.is_published === 'true',
    is_members_only: raw.is_members_only === 'true',
    member_price: Number(raw.member_price) || 0,
    non_member_price: raw.non_member_price ? Number(raw.non_member_price) : undefined,
  };

  const result = eventSchema.safeParse(parsed);
  if (!result.success) {
    return { success: false, error: result.error.issues[0]?.message || 'Validation failed' };
  }

  const supabase = await createClient();
  const insertData: Record<string, unknown> = {
    title: result.data.title,
    slug: result.data.slug,
    start_datetime: result.data.start_datetime,
    excerpt: result.data.excerpt,
    is_members_only: result.data.is_members_only,
    member_price: result.data.member_price,
    is_published: result.data.is_published,
  };

  if (result.data.end_datetime) insertData.end_datetime = result.data.end_datetime;
  if (result.data.location_name) insertData.location_name = result.data.location_name;
  if (result.data.location_address) insertData.location_address = result.data.location_address;
  if (result.data.location_url) insertData.location_url = result.data.location_url;
  if (result.data.featured_image_url) insertData.featured_image_url = result.data.featured_image_url;
  if (result.data.description) insertData.description = result.data.description;
  if (result.data.registration_url) insertData.registration_url = result.data.registration_url;
  if (result.data.non_member_price != null) insertData.non_member_price = result.data.non_member_price;

  const { data, error } = await supabase
    .from('events')
    .insert(insertData)
    .select('id')
    .single();

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/events');
  revalidatePath('/admin/events');
  return { success: true, id: data.id };
}

export async function updateEvent(
  id: string,
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const raw = Object.fromEntries(formData.entries());

  const parsed = {
    ...raw,
    is_published: raw.is_published === 'true',
    is_members_only: raw.is_members_only === 'true',
    member_price: Number(raw.member_price) || 0,
    non_member_price: raw.non_member_price ? Number(raw.non_member_price) : undefined,
  };

  const result = eventSchema.safeParse(parsed);
  if (!result.success) {
    return { success: false, error: result.error.issues[0]?.message || 'Validation failed' };
  }

  const supabase = await createClient();
  const { error } = await supabase
    .from('events')
    .update({
      title: result.data.title,
      slug: result.data.slug,
      start_datetime: result.data.start_datetime,
      end_datetime: result.data.end_datetime || null,
      location_name: result.data.location_name || null,
      location_address: result.data.location_address || null,
      location_url: result.data.location_url || null,
      featured_image_url: result.data.featured_image_url || null,
      excerpt: result.data.excerpt,
      description: result.data.description || null,
      registration_url: result.data.registration_url || null,
      is_members_only: result.data.is_members_only,
      member_price: result.data.member_price,
      non_member_price: result.data.non_member_price ?? null,
      is_published: result.data.is_published,
    })
    .eq('id', id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/events');
  revalidatePath('/admin/events');
  return { success: true };
}

export async function deleteEvent(id: string): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();
  const { error } = await supabase.from('events').delete().eq('id', id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/events');
  revalidatePath('/admin/events');
  return { success: true };
}

export async function toggleEventPublished(
  id: string,
  isPublished: boolean
): Promise<{ success: boolean; error?: string }> {
  const supabase = await createClient();
  const { error } = await supabase
    .from('events')
    .update({ is_published: isPublished })
    .eq('id', id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath('/events');
  revalidatePath('/admin/events');
  return { success: true };
}
