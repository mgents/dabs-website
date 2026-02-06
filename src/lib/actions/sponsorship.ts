'use server';

import { sponsorshipSchema } from '@/lib/validations/sponsorship';
import { createInquiry } from '@/lib/db/inquiries';

export async function submitSponsorshipForm(
  _prevState: { success: boolean; error?: string } | null,
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const raw = {
    companyName: formData.get('companyName') as string,
    contactPerson: formData.get('contactPerson') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string || undefined,
    industry: formData.get('industry') as string || undefined,
    message: formData.get('message') as string,
  };

  const result = sponsorshipSchema.safeParse(raw);
  if (!result.success) {
    return { success: false, error: result.error.issues[0]?.message || 'Validation failed' };
  }

  return createInquiry('sponsorship', result.data);
}
