import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { memberBenefits } from '@/data/member-benefits';
import { Gift } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Current Member Benefits',
  description: 'Current benefits available to DABS members from our benefit providers.',
};

export default function CurrentMemberBenefitsPage() {
  return (
    <>
      <PageHero title="Member Benefits" subtitle="Current member benefits" image="/assets/migrated/hero/membership-banner.png" />
      <Section>

      {memberBenefits.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {memberBenefits.map((benefit) => (
            <Card key={benefit.provider} className="hover-lift">
              <CardContent className="p-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Gift className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.provider}</h3>
                <p className="text-sm text-muted-foreground mb-3">{benefit.description}</p>
                <p className="text-sm font-medium text-primary">{benefit.benefit}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-muted/50 rounded-xl mb-16">
          <Gift className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-lg text-muted-foreground">
            Member benefit providers will be listed here soon.
          </p>
        </div>
      )}

      {/* Bottom CTA - exact wording from blueprint */}
      <div className="bg-muted/50 rounded-xl p-8 md:p-12 text-center">
        <p className="text-xl md:text-2xl font-semibold mb-6">
          Are you interested to become a provider of benefits to DABS member, contact us
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact us</Link>
        </Button>
      </div>
      </Section>
    </>
  );
}
