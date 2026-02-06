'use client';

import { useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { submitSponsorshipForm } from '@/lib/actions/sponsorship';

export function SponsorshipForm() {
  const [state, formAction, isPending] = useActionState(submitSponsorshipForm, null);

  if (state?.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Inquiry Received!</h3>
        <p className="text-green-700">
          Thank you for your interest in sponsoring DABS. We will be in touch with you shortly to discuss sponsorship opportunities.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      {state?.error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          {state.error}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="companyName">Company Name *</Label>
          <Input id="companyName" name="companyName" required placeholder="Company name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="contactPerson">Contact Person *</Label>
          <Input id="contactPerson" name="contactPerson" required placeholder="Your name" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required placeholder="your@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+65..." />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="industry">Industry</Label>
        <Input id="industry" name="industry" placeholder="Your industry" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message *</Label>
        <Textarea id="message" name="message" required rows={4} placeholder="Tell us about your sponsorship interest..." />
      </div>
      <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
        {isPending ? 'Submitting...' : 'Submit Inquiry'}
      </Button>
    </form>
  );
}
