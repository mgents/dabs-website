import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { Card, CardContent } from '@/components/ui/card';
import { CTABlock } from '@/components/ui/cta-block';
import { Users, Calendar, Building2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Member Benefits',
  description: 'Explore the benefits of DABS membership including networking, events, and embassy cooperation.',
};

export default function MemberBenefitsPage() {
  return (
    <>
      <PageHero title="Member Benefits" image="/assets/migrated/hero/membership-banner.png" />
      <Section>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          At DABS, we bring Danish professionals and companies together to create a thriving
          community in Singapore. Through networking opportunities, exclusive events, and
          collaborative partnerships, we provide a platform that helps you connect, learn, and grow.
        </p>

        <h2 className="text-2xl font-semibold mb-8">Here is what a membership will bring you:</h2>

        <div className="space-y-8">
          {/* Networking */}
          <Card>
            <CardContent className="p-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Networking</h3>
                  <p className="text-muted-foreground">
                    Meet industry leaders, other chambers, Danish professionals, and over 200 Danish
                    companies to expand your connections.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Exclusive Events */}
          <Card>
            <CardContent className="p-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Exclusive Events</h3>
                  <p className="text-muted-foreground mb-4">
                    Join our 25+ annually events from:
                  </p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Breakfast talks</li>
                    <li>Social events and parties (e.g. padel tournament, drinks night and gala)</li>
                    <li>Roundtable discussions</li>
                    <li>Co-hosted events with other associations and chambers</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Embassy Cooperation */}
          <Card>
            <CardContent className="p-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3">Embassy Cooperation</h3>
                  <p className="text-muted-foreground mb-4">
                    The Trade Council is a part of the Ministry of Foreign Affairs and assists Danish
                    and international companies with export and investment promotion services. Our
                    export promotion services include export guidance as well as innovation and
                    internationalization solutions for Danish companies looking to expand abroad.
                  </p>
                  <p className="text-muted-foreground">
                    Learn more about the Danish Embassy in Singapore and our shared commitment to
                    fostering growth and opportunities.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section background="muted">
        <CTABlock
          title="Ready to Join?"
          description="Become part of DABS and unlock all membership benefits."
          primaryAction={{ label: 'Become a Member', href: '/membership/join' }}
          secondaryAction={{ label: 'Contact Us', href: '/contact' }}
        />
      </Section>
    </>
  );
}
