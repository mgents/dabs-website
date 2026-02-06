'use server';

import { membershipSchema } from '@/lib/validations/membership';
import { createInquiry } from '@/lib/db/inquiries';

export async function submitMembershipForm(
  _prevState: { success: boolean; error?: string } | null,
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const raw = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string || undefined,
    company: formData.get('company') as string || undefined,
    membershipType: formData.get('membershipType') as string,
    message: formData.get('message') as string || undefined,
  };

  const result = membershipSchema.safeParse(raw);
  if (!result.success) {
    return { success: false, error: result.error.issues[0]?.message || 'Validation failed' };
  }

  return createInquiry('membership', result.data);
}
