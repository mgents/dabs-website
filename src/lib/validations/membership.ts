import { z } from 'zod';

export const membershipSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  membershipType: z.enum(['corporate', 'individual', 'student', 'startup'], {
    message: 'Please select a membership type',
  }),
  message: z.string().optional(),
});

export type MembershipFormValues = z.infer<typeof membershipSchema>;
