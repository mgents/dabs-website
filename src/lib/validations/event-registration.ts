import { z } from 'zod';

export const eventRegistrationSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  position: z.string().optional(),
  phone: z.string().optional(),
  membershipType: z.string().min(1, 'Please select your membership status'),
  message: z.string().optional(),
  eventTitle: z.string(),
  eventSlug: z.string(),
});

export type EventRegistrationValues = z.infer<typeof eventRegistrationSchema>;
