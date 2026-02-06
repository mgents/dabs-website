import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  Building2,
  Users,
  Calendar,
  Globe,
  Handshake,
  Star,
  TrendingUp,
  ShieldCheck,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Corporate Membership',
  description:
    'DABS Corporate Membership covers all employees and their partners. SGD 1,500 per year.',
};

export default function CorporateMembershipPage() {
  return (
    <>
      <PageHero
        title="Corporate Membership"
        subtitle="The premium choice for companies that want full access to Singapore's Danish business community"
        image="/assets/migrated/hero/welcome-banner.png"
      />

      {/* Hero Stats Bar */}
      <Section containerSize="narrow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b mb-10">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">200+</p>
            <p className="text-sm text-muted-foreground">Danish Companies</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">25+</p>
            <p className="text-sm text-muted-foreground">Events Per Year</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">ALL</p>
            <p className="text-sm text-muted-foreground">Employees Covered</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">1</p>
            <p className="text-sm text-muted-foreground">Simple Annual Fee</p>
          </div>
        </div>

        {/* Price & Positioning */}
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="secondary" className="text-base px-4 py-1">
            SGD 1,500 / year
          </Badge>
          <Badge variant="outline">Most Popular</Badge>
        </div>

        <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
          One membership. Every employee. Every spouse. Every event. Corporate Membership
          is the all-inclusive gateway for your entire organisation to the Danish business
          community in Singapore &mdash; no headcount limits, no hidden costs.
        </p>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Whether your team is 10 or 1,000, a single annual fee unlocks company-wide
          access to 25+ curated events, Embassy cooperation, and a powerful professional
          network spanning industries and borders.
        </p>

        {/* Benefit Cards */}
        <h2 className="text-2xl font-bold mb-6">Everything Your Company Gets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Building2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Unlimited Employee Access</p>
                <p className="text-sm text-muted-foreground">
                  Every employee in your company is automatically covered &mdash; from
                  interns to executives. No per-head charges, ever.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Users className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Spouse &amp; Partner Access</p>
                <p className="text-sm text-muted-foreground">
                  Partners and spouses of all employees are warmly welcomed at every DABS
                  event, making it a true community experience.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Calendar className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">25+ Annual Events</p>
                <p className="text-sm text-muted-foreground">
                  Breakfast talks, industry roundtables, gala dinners, networking socials,
                  and exclusive members-only gatherings throughout the year.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Globe className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Open to All Companies</p>
                <p className="text-sm text-muted-foreground">
                  No nationality restriction. Whether your company is Danish, Singaporean,
                  or international &mdash; you belong here.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Handshake className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Embassy &amp; Trade Council</p>
                <p className="text-sm text-muted-foreground">
                  Direct cooperation with the Royal Danish Embassy and Trade Council of
                  Denmark for business facilitation and government-level connections.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Star className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Corporate Directory Listing</p>
                <p className="text-sm text-muted-foreground">
                  Your company is featured in the official DABS corporate member directory,
                  boosting visibility across the entire network.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Join */}
        <Card className="bg-primary/5 border-primary/20 mb-12">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-6">Why Leading Companies Choose DABS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Network with 200+ Danish companies and professionals operating in
                  Singapore
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Exclusive events featuring industry leaders and government representatives
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Strengthen your brand through Embassy cooperation and Trade Council
                  partnerships
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Member-exclusive benefits and partner offers for your team
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Company-wide access means no administrative headaches &mdash; one fee
                  covers everyone
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Be part of the strongest Danish-Singaporean business bridge in Southeast
                  Asia
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Value Proposition */}
        <div className="text-center mb-10 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <TrendingUp className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Unbeatable Value</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            At SGD 1,500 per year for your entire company, Corporate Membership costs
            less than a single conference ticket &mdash; but delivers a full year of
            connections, events, and opportunities for every employee on your team.
          </p>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              Membership is per calendar year, valid from January 1 to December 31.
            </p>
          </div>
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
