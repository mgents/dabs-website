import { z } from 'zod';

export const eventSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, 'Slug must be URL-safe (lowercase letters, numbers, hyphens)'),
  start_datetime: z.string().min(1, 'Start date/time is required'),
  end_datetime: z.string().optional(),
  location_name: z.string().optional(),
  location_address: z.string().optional(),
  location_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  featured_image_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  excerpt: z.string().max(500, 'Excerpt must be 500 characters or less'),
  description: z.string().optional(),
  registration_url: z.string().url('Must be a valid URL').optional().or(z.literal('')),
  is_members_only: z.boolean().default(false),
  member_price: z.number().default(0),
  non_member_price: z.number().optional(),
  is_published: z.boolean().default(false),
});

export type EventFormValues = z.infer<typeof eventSchema>;
