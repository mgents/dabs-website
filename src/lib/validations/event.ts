import { z } from 'zod';

export const eventSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be URL-safe (lowercase letters, numbers, hyphens)'),
  start_datetime: z.string().min(1, 'Start date/time is required'),
  end_datetime: z.string().optional(),
  timezone: z.string().default('Asia/Singapore'),
  location_name: z.string().optional(),
  location_address: z.string().optional(),
  map_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  featured_image_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  excerpt: z.string().max(500, 'Excerpt must be 500 characters or less'),
  content_html: z.string().optional(),
  registration_mode: z.enum(['url', 'email', 'none']).default('none'),
  registration_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  registration_email: z.string().email('Must be a valid email').optional().or(z.literal('')),
  google_calendar_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  is_published: z.boolean().default(false),
});

export type EventFormValues = z.infer<typeof eventSchema>;
