import { createEvent, type EventAttributes } from 'ics';
import { parseISO } from 'date-fns';
import type { Event } from '@/types/database';

export function generateICS(event: Event): string | null {
  const start = parseISO(event.start_datetime);
  const startArray: [number, number, number, number, number] = [
    start.getFullYear(),
    start.getMonth() + 1,
    start.getDate(),
    start.getHours(),
    start.getMinutes(),
  ];

  let attrs: EventAttributes;

  const base = {
    start: startArray,
    title: event.title,
    description: event.excerpt || undefined,
    location: event.location_name || undefined,
    url: event.registration_url || undefined,
    status: 'CONFIRMED' as const,
    organizer: { name: 'DABS', email: 'dabs@dabs-singapore.com' },
  };

  if (event.end_datetime) {
    const end = parseISO(event.end_datetime);
    attrs = {
      ...base,
      end: [
        end.getFullYear(),
        end.getMonth() + 1,
        end.getDate(),
        end.getHours(),
        end.getMinutes(),
      ] as [number, number, number, number, number],
    };
  } else {
    attrs = { ...base, duration: { hours: 2 } };
  }

  const { error, value } = createEvent(attrs);
  if (error) {
    console.error('ICS generation error:', error);
    return null;
  }
  return value || null;
}
