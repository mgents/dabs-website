'use server';

import { eventRegistrationSchema } from '@/lib/validations/event-registration';
import { createInquiry } from '@/lib/db/inquiries';

export async function submitEventRegistration(
  _prevState: { success: boolean; error?: string } | null,
  formData: FormData
): Promise<{ success: boolean; error?: string }> {
  const raw = {
    firstName: formData.get('firstName') as string,
    lastName: formData.get('lastName') as string,
    email: formData.get('email') as string,
    company: formData.get('company') as string || undefined,
    position: formData.get('position') as string || undefined,
    phone: formData.get('phone') as string || undefined,
    membershipType: formData.get('membershipType') as string,
    message: formData.get('message') as string || undefined,
    eventTitle: formData.get('eventTitle') as string,
    eventSlug: formData.get('eventSlug') as string,
  };

  const result = eventRegistrationSchema.safeParse(raw);
  if (!result.success) {
    return { success: false, error: result.error.issues[0]?.message || 'Validation failed' };
  }

  const { firstName, lastName, eventTitle, eventSlug, ...rest } = result.data;

  return createInquiry('contact', {
    name: `${firstName} ${lastName}`,
    subject: `Event Registration: ${eventTitle}`,
    ...rest,
    eventTitle,
    eventSlug,
  });
}
