import { createClient } from '@/lib/supabase/server';
import type { Event } from '@/types/database';

export async function getAdminEvents(): Promise<Event[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .order('start_datetime', { ascending: false });

  if (error) {
    console.error('Error fetching admin events:', error);
    return [];
  }
  return data || [];
}

export async function getAdminEventById(id: string): Promise<Event | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    return null;
  }
  return data;
}
