import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { MembershipForm } from '@/components/forms/membership-form';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Join DABS',
  description: 'Become a member of the Danish Business Association of Singapore.',
};

export default function JoinPage() {
  return (
    <>
      <PageHero title="Join DABS" subtitle="Become a Member" image="/assets/migrated/hero/membership-banner.png" />
      <Section>
        <div className="prose prose-lg max-w-3xl mb-8">
          <p>
            Become part of DABS and connect with a vibrant network of Danish professionals and
            businesses in Singapore. Your membership supports Danish business interests, builds
            strong Singapore-Denmark ties, and opens doors to inspiring events, networking, and
            valuable resources.
          </p>
          <p>
            To apply, fill out the form below and submit your membership payment (Student Membership
            is free). We look forward to welcoming you to the DABS community!
          </p>
        </div>

        {/* Membership Tiers */}
        <h2 className="text-2xl font-semibold mb-6">Membership Tiers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Corporate */}
          <Card className="border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Corporate Membership</CardTitle>
                <Badge variant="secondary">SGD 1,500/yr</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Covers all employees and their partners. Open to all companies, with an annual fee of
                SGD 1500.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Eligibility:</strong> Any registered company
              </p>
              <Button asChild variant="link" className="p-0 h-auto">
                <Link href="/membership/corporate" className="inline-flex items-center gap-1">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Start-up */}
          <Card className="border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Start-up Membership</CardTitle>
                <Badge variant="secondary">SGD 380/yr</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                For early-stage companies building and growing their business. Designed for small teams
                who want visibility, connections, and access to the Danish-Singaporean business and
                innovation network.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Eligibility:</strong> Companies with up to 5 employees
              </p>
              <Button asChild variant="link" className="p-0 h-auto">
                <Link href="/membership/startup" className="inline-flex items-center gap-1">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Individual */}
          <Card className="border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Individual Membership</CardTitle>
                <Badge variant="secondary">SGD 150/yr</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                Covers one member and their spouse, open to all nationalities, with an annual fee of
                SGD 150.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Eligibility:</strong> Any individual of any nationality
              </p>
              <Button asChild variant="link" className="p-0 h-auto">
                <Link href="/membership/individual" className="inline-flex items-center gap-1">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Student */}
          <Card className="border">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Student Membership</CardTitle>
                <Badge variant="secondary">Free</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-3">
                For Danish nationals enrolled at an educational institution in Singapore. Covers one
                student and is free of charge.
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                <strong>Eligibility:</strong> Danish nationals enrolled at a Singapore institution
              </p>
              <Button asChild variant="link" className="p-0 h-auto">
                <Link href="/membership/student" className="inline-flex items-center gap-1">
                  Learn More <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-muted/50 rounded-lg p-4 mb-8 text-sm text-muted-foreground">
          Please note that the membership fee is per calendar year, valid from January 1 to December
          31. This gives you access to all DABS benefits for the year.
        </div>

        <Separator className="my-12" />

        {/* Payment Information */}
        <h2 className="text-2xl font-semibold mb-6">Payment</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-2">Pay by PayNow</h3>
              <p className="text-sm text-muted-foreground">
                Kindly add name and invoice no. to the payment.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold mb-3">Bank Transfer</h3>
              <div className="text-sm space-y-1 text-muted-foreground">
                <p>Danish Business Association of Singapore</p>
                <p>Bank: DBS</p>
                <p>Bank Code: 7171</p>
                <p>Branch code: 001</p>
                <p>Account no: 001-021939-1</p>
                <p>Swift number: DBSSSGSG</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <p className="text-sm text-muted-foreground mb-8">
          By paying the membership you consent to the{' '}
          <Link href="/legal/privacy" className="text-primary hover:underline">
            privacy statement
          </Link>
          .
        </p>

        <Separator className="my-12" />

        {/* Application Form */}
        <h2 className="text-2xl font-semibold mb-6">Application Form</h2>
        <MembershipForm />
      </Section>
    </>
  );
}
