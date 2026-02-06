import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  GraduationCap,
  Calendar,
  Globe,
  Flag,
  Briefcase,
  Users,
  PartyPopper,
  BookOpen,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Student Membership',
  description:
    'DABS Student Membership for Danish nationals enrolled at educational institutions in Singapore. Free of charge.',
};

export default function StudentMembershipPage() {
  return (
    <>
      <PageHero
        title="Student Membership"
        subtitle="Stay connected to Denmark while building your future in Singapore"
        image="/assets/migrated/hero/benefits-banner.png"
      />

      {/* Hero Stats Bar */}
      <Section containerSize="narrow">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-b mb-10">
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">FREE</p>
            <p className="text-sm text-muted-foreground">No Cost at All</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">25+</p>
            <p className="text-sm text-muted-foreground">Events Per Year</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">200+</p>
            <p className="text-sm text-muted-foreground">Companies to Network</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-primary">1</p>
            <p className="text-sm text-muted-foreground">Click to Join</p>
          </div>
        </div>

        {/* Price Badge */}
        <div className="flex items-center gap-3 mb-6">
          <Badge variant="secondary" className="text-base px-4 py-1">
            Free
          </Badge>
          <Badge variant="outline">Danish Students</Badge>
        </div>

        <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
          Studying in Singapore as a Danish national? This one is for you &mdash; and it
          will not cost you a single dollar. Student Membership gives you direct access
          to the Danish business community, career networking, and a home away from home.
        </p>
        <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
          Whether you are here for a semester exchange or a full degree, DABS connects you
          with professionals, companies, and fellow Danes who can help shape your career
          and make your time in Singapore unforgettable.
        </p>

        {/* Benefit Cards */}
        <h2 className="text-2xl font-bold mb-6">What You Get as a Student Member</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Calendar className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Full Event Access</p>
                <p className="text-sm text-muted-foreground">
                  Attend all DABS events throughout the year &mdash; breakfast talks,
                  networking socials, seasonal celebrations, and more.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Briefcase className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Career Networking</p>
                <p className="text-sm text-muted-foreground">
                  Meet professionals from 200+ Danish and international companies.
                  Find internships, mentors, and future career opportunities.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Flag className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Danish Community</p>
                <p className="text-sm text-muted-foreground">
                  Stay connected to Denmark through a vibrant community of Danes living
                  and working in Singapore. A little piece of home, far from home.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Globe className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Embassy Connection</p>
                <p className="text-sm text-muted-foreground">
                  Benefit from DABS&apos; close cooperation with the Royal Danish Embassy
                  and Trade Council of Denmark in Singapore.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <Users className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Professional Exposure</p>
                <p className="text-sm text-muted-foreground">
                  Gain real-world business insights by attending events alongside
                  executives, entrepreneurs, and industry leaders.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 hover:shadow-md transition-shadow">
            <CardContent className="p-6 flex gap-4">
              <GraduationCap className="h-6 w-6 text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-lg">Build Your Network Early</p>
                <p className="text-sm text-muted-foreground">
                  The connections you make now can define your career. Start building a
                  cross-border professional network while still studying.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Eligibility & Why Join */}
        <Card className="bg-primary/5 border-primary/20 mb-12">
          <CardContent className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <BookOpen className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold">Eligibility &amp; Why You Should Join</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              To qualify for Student Membership, you must be:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>A Danish national (Danish passport holder)</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Currently enrolled at an educational institution in Singapore
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 font-medium">
              And here is why joining is a no-brainer:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>It is completely free &mdash; zero cost, full access</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Access to career-defining networking opportunities with Danish companies
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Meet fellow Danes and build a support network abroad
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>
                  Gain insights into the Danish-Singaporean business landscape
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Closing */}
        <div className="text-center mb-10 space-y-4">
          <div className="flex items-center justify-center gap-2">
            <PartyPopper className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Do Not Miss Out</h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Free membership. World-class networking. A Danish community that has your back.
            There is literally no reason not to join. Sign up today and make the most of your
            time in Singapore.
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
