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
import { submitMembershipForm } from '@/lib/actions/membership';

export function MembershipForm() {
  const [state, formAction, isPending] = useActionState(submitMembershipForm, null);

  if (state?.success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-green-800 mb-2">Application Received!</h3>
        <p className="text-green-700 mb-4">
          Thank you for your interest in joining DABS. We will review your application and get back to you shortly.
        </p>
        <div className="bg-white rounded-lg p-4 border">
          <h4 className="font-medium mb-2">Payment Instructions</h4>
          <p className="text-sm text-muted-foreground mb-2">
            Pay by PayNow (kindly add name and invoice no. to the payment) or bank transfer:
          </p>
          <div className="text-sm space-y-1">
            <p>Danish Business Association of Singapore</p>
            <p>Bank: DBS</p>
            <p>Bank Code: 7171 | Branch code: 001</p>
            <p>Account no: 001-021939-1</p>
            <p>Swift number: DBSSSGSG</p>
          </div>
        </div>
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
          <Label htmlFor="name">Full Name *</Label>
          <Input id="name" name="name" required placeholder="Your full name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" required placeholder="your@email.com" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="+65..." />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" placeholder="Company name" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="membershipType">Membership Type *</Label>
        <Select name="membershipType" required>
          <SelectTrigger>
            <SelectValue placeholder="Select membership type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="corporate">Corporate - SGD 1,500/year</SelectItem>
            <SelectItem value="startup">Start-up - SGD 380/year</SelectItem>
            <SelectItem value="individual">Individual - SGD 150/year</SelectItem>
            <SelectItem value="student">Student - Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message (optional)</Label>
        <Textarea id="message" name="message" rows={3} placeholder="Any additional information..." />
      </div>
      <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
        {isPending ? 'Submitting...' : 'Submit Application'}
      </Button>
    </form>
  );
}
