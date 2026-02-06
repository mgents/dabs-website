import { createClient } from '@/lib/supabase/server';
import type { Event } from '@/types/database';

export async function getPublishedEvents(): Promise<Event[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('is_published', true)
    .order('start_datetime', { ascending: false });

  if (error) {
    console.error('Error fetching published events:', error);
    return [];
  }
  return data || [];
}

export async function getUpcomingEvents(limit?: number): Promise<Event[]> {
  const supabase = await createClient();
  let query = supabase
    .from('events')
    .select('*')
    .eq('is_published', true)
    .gte('start_datetime', new Date().toISOString())
    .order('start_datetime', { ascending: true });

  if (limit) {
    query = query.limit(limit);
  }

  const { data, error } = await query;

  if (error) {
    console.error('Error fetching upcoming events:', error);
    return [];
  }
  return data || [];
}

export async function getPastEvents(): Promise<Event[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('is_published', true)
    .lt('start_datetime', new Date().toISOString())
    .order('start_datetime', { ascending: false });

  if (error) {
    console.error('Error fetching past events:', error);
    return [];
  }
  return data || [];
}

export async function getEventBySlug(slug: string): Promise<Event | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from('events')
    .select('*')
    .eq('slug', slug)
    .eq('is_published', true)
    .single();

  if (error) {
    return null;
  }
  return data;
}
