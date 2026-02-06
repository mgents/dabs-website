import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  User,
  Heart,
  Calendar,
  Globe,
  Handshake,
  Gift,
  Sparkles,
  Coffee,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Individual Membership',
  description:
    'DABS Individual Membership covers one member and their spouse. SGD 150 per year.',
};

export default function IndividualMembershipPage() {
  return (
    <>
      <PageHero
        title="Individual Membership"
        subtitle="Your personal connection to the Danish business community in Singapore"
        image="/assets/migrated/hero/membership-banner.png"
      />

      {/* Hero Stats Bar */}
      <Section containerSize="narrow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b mb-10">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">SGD 150</p>
            <p className="text-sm text-muted-foreground">Per Year</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">2</p>
            <p className="text-sm text-muted-foreground">People Covered</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">25+</p>
            <p className="text-sm text-muted-foreground">Events Per Year</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">ALL</p>
            <p className="text-sm text-muted-foreground">Nationalities Welcome</p>
          </div>
        </div>

        {/* Price Badge */}
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="secondary" className="text-base px-4 py-1">
            SGD 150 / year
          </Badge>
          <Badge variant="outline">Great Value</Badge>
        </div>

        <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
          You do not need to represent a company to be part of something extraordinary.
          Individual Membership is your personal gateway to a vibrant community of Danish
          and international professionals in Singapore.
        </p>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          For just SGD 150 per year, you and your spouse get full access to 25+ curated
          events, meaningful networking, Embassy cooperation, and member-exclusive benefits.
          Open to all nationalities &mdash; all you need is curiosity and a desire to
          connect.
        </p>

        {/* Benefit Cards */}
        <h2 className="text-2xl font-bold mb-6">What You and Your Spouse Enjoy</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <User className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Full Personal Access</p>
                <p className="text-sm text-muted-foreground">
                  Complete membership access as an individual professional. Attend any
                  event, join any conversation, be part of every gathering.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Heart className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Spouse Included</p>
                <p className="text-sm text-muted-foreground">
                  Your spouse or partner is warmly welcomed at all DABS events at no
                  extra cost. Share the experience together.
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
                  Breakfast talks, roundtables, gala dinners, networking socials, and
                  seasonal celebrations &mdash; something for every month.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Globe className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Open to All Nationalities</p>
                <p className="text-sm text-muted-foreground">
                  Danish, Singaporean, or from anywhere in the world &mdash; if
                  you are interested in the community, you belong here.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Handshake className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Embassy Cooperation</p>
                <p className="text-sm text-muted-foreground">
                  Benefit from the close relationship between DABS and the Royal Danish
                  Embassy and Trade Council of Denmark.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Gift className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Member-Exclusive Benefits</p>
                <p className="text-sm text-muted-foreground">
                  Enjoy special offers and perks from DABS partner companies, exclusively
                  for members.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Why Join */}
        <Card className="bg-primary/5 border-primary/20 mb-12">
          <CardContent className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <Coffee className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Why Members Love DABS</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Meet professionals from 200+ Danish and international companies
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Attend inspiring events with speakers from industry and government
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Build genuine friendships and professional relationships that last
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Stay connected to Denmark while making Singapore feel like home
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Bring your spouse and make it a shared experience
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Unlock special offers and perks through partner companies
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Closing */}
        <div className="text-center mb-10 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Your Community Awaits</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            For less than SGD 13 per month, you and your spouse join a warm, welcoming
            community that opens doors &mdash; professionally and personally. Whether
            you are new to Singapore or have been here for years, there is always a seat
            for you.
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
