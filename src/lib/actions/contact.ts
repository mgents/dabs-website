'use server';

import { contactSchema } from '@/lib/validations/contact';
import { createInquiry } from '@/lib/db/inquiries';

export async function submitContactForm(
  _prevState: { success: boolean; error?: string } | null,
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const raw = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    subject: formData.get('subject') as string,
    message: formData.get('message') as string,
  };

  const result = contactSchema.safeParse(raw);
  if (!result.success) {
    return { success: false, error: result.error.issues[0]?.message || 'Validation failed' };
  }

  return createInquiry('contact', result.data);
}
