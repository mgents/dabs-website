import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  Rocket,
  Users,
  Eye,
  ArrowUpRight,
  Lightbulb,
  Mic,
  Target,
  Zap,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Start-up Membership',
  description:
    'DABS Start-up Membership for early-stage companies with up to 5 employees. SGD 380 per year.',
};

export default function StartupMembershipPage() {
  return (
    <>
      <PageHero
        title="Start-up Membership"
        subtitle="Your launchpad into Singapore's most connected Danish business network"
        image="/assets/migrated/hero/about-banner.png"
      />

      {/* Hero Stats Bar */}
      <Section containerSize="narrow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b mb-10">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">SGD 380</p>
            <p className="text-sm text-muted-foreground">Per Year</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">5</p>
            <p className="text-sm text-muted-foreground">Employees Covered</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">10</p>
            <p className="text-sm text-muted-foreground">Total with Spouses</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">25+</p>
            <p className="text-sm text-muted-foreground">Events Per Year</p>
          </div>
        </div>

        {/* Price Badge */}
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="secondary" className="text-base px-4 py-1">
            SGD 380 / year
          </Badge>
        </div>

        <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
          Big ambitions deserve big networks. Start-up Membership gives your young company
          a seat at the table alongside established Danish and international businesses in
          Singapore &mdash; at a fraction of the cost.
        </p>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Designed for companies with up to 5 employees, this tier lets you show up as a
          company &mdash; not just an individual &mdash; while building the connections,
          visibility, and credibility that fuel growth.
        </p>

        {/* Benefit Cards */}
        <h2 className="text-2xl font-bold mb-6">Built for Founders Who Move Fast</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Eye className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Company Visibility</p>
                <p className="text-sm text-muted-foreground">
                  Your start-up gets profiled through DABS events and community channels.
                  Get noticed by the people who matter to your business.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Mic className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Stage Time</p>
                <p className="text-sm text-muted-foreground">
                  Join panels, fireside chats, and pitch sessions. Share your story and
                  position your company in front of corporates and investors.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Users className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Team &amp; Spouse Access</p>
                <p className="text-sm text-muted-foreground">
                  Up to 5 employees plus their spouses get full access to all DABS and
                  partner events &mdash; up to 10 people under one membership.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Rocket className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Ecosystem Positioning</p>
                <p className="text-sm text-muted-foreground">
                  Be represented as a company within the Danish-Singaporean business
                  network &mdash; not just as individuals, but as a brand with a mission.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <ArrowUpRight className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Growth Pathway</p>
                <p className="text-sm text-muted-foreground">
                  A clear stepping stone to Corporate Membership as your team scales. Grow
                  your network today, upgrade when you are ready.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Target className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Client &amp; Partner Pipeline</p>
                <p className="text-sm text-muted-foreground">
                  Connect directly with potential clients, strategic partners, and
                  collaborators from 200+ companies active in the community.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Who Is It For */}
        <Card className="bg-primary/5 border-primary/20 mb-12">
          <CardContent className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <Lightbulb className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Is This Tier Right for You?</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Start-up Membership is built for ambitious early-stage companies that are:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>Small teams (up to 5 employees) with big goals</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Actively building customers, partnerships, and market presence
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Looking for credibility in a cross-border business community
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Wanting visibility without a large marketing budget
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Ready to connect with corporates, investors, and the wider ecosystem
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Eager to bridge Denmark and Singapore for business growth
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Closing Value */}
        <div className="text-center mb-10 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Launch Smarter, Not Alone</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            For SGD 380 per year, your start-up gets the network, the stage, and the
            community that turns early-stage hustle into real momentum. Join DABS and make
            your next connection count.
          </p>
          <p className="text-sm text-muted-foreground">
            Membership is per calendar year, valid from January 1 to December 31.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/membership/join">Sign Up Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/membership/benefits">View All Benefits</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
