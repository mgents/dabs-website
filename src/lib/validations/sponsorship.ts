import { z } from 'zod';

export const sponsorshipSchema = z.object({
  companyName: z.string().min(2, 'Company name must be at least 2 characters'),
  contactPerson: z.string().min(2, 'Contact person must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  industry: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

export type SponsorshipFormValues = z.infer<typeof sponsorshipSchema>;
