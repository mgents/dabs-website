'use client';

import { useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { submitEventRegistration } from '@/lib/actions/event-registration';
import { CheckCircle2 } from 'lucide-react';

interface EventRegistrationFormProps {
  eventTitle: string;
  eventSlug: string;
}

export function EventRegistrationForm({ eventTitle, eventSlug }: EventRegistrationFormProps) {
  const [state, formAction, isPending] = useActionState(submitEventRegistration, null);

  if (state?.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-lg font-semibold text-green-800 mb-1">
              Thank you for your registration!
            </h3>
            <p className="text-green-700 text-sm">
              Your registration for <strong>{eventTitle}</strong> has been received.
              We will send you a confirmation shortly.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4">
      <input type="hidden" name="eventTitle" value={eventTitle} />
      <input type="hidden" name="eventSlug" value={eventSlug} />

      {state?.error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          {state.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="reg-firstName">First Name *</Label>
          <Input id="reg-firstName" name="firstName" required placeholder="First name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reg-lastName">Last Name *</Label>
          <Input id="reg-lastName" name="lastName" required placeholder="Last name" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="reg-company">Company</Label>
          <Input id="reg-company" name="company" placeholder="Company name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reg-position">Position</Label>
          <Input id="reg-position" name="position" placeholder="Your role" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="reg-email">Email *</Label>
          <Input id="reg-email" name="email" type="email" required placeholder="your@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="reg-phone">Phone Number</Label>
          <Input id="reg-phone" name="phone" type="tel" placeholder="+65..." />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="reg-membershipType">Membership Status *</Label>
        <Select name="membershipType" required>
          <SelectTrigger>
            <SelectValue placeholder="Select your membership status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="sponsor">Sponsor</SelectItem>
            <SelectItem value="corporate">Corporate Member</SelectItem>
            <SelectItem value="individual">Individual Member</SelectItem>
            <SelectItem value="student">Student Member</SelectItem>
            <SelectItem value="not_member">Not yet a member</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="reg-message">Message (optional)</Label>
        <Textarea
          id="reg-message"
          name="message"
          rows={3}
          placeholder="Any dietary requirements, guest information, or questions..."
        />
      </div>

      <Button type="submit" disabled={isPending} size="lg" className="w-full sm:w-auto text-base">
        {isPending ? 'Submitting...' : 'Register for this Event'}
      </Button>
    </form>
  );
}
