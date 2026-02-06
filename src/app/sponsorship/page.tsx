import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { SponsorshipForm } from '@/components/forms/sponsorship-form';
import {
  Network, Calendar, Lightbulb, Building2, Heart, Rocket,
  CheckCircle2, Star, Crown, ArrowRight,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Become a Sponsor',
  description: 'Partner with DABS to elevate your presence in the Danish and international business community in Singapore.',
};

const benefits = [
  {
    icon: Network,
    title: 'Expand your network',
    items: [
      'Connect with over 200 Danish-owned companies and international partners.',
      'Meet key decision-makers through high-profile business and social events.',
    ],
  },
  {
    icon: Calendar,
    title: 'Exclusive event access',
    items: [
      'Participate in a wide range of events, from roundtable discussions to business seminars, sports events, and social gatherings.',
      'In 2024, we hosted over 30 successful events, bringing together professionals from diverse industries \u2013 and your company can offer employees get an opportunities to connect with Danish and international professionals.',
    ],
  },
  {
    icon: Lightbulb,
    title: 'Valuable business insights',
    items: [
      'Attend expert-led seminars and workshops on relevant topics.',
      'Gain strategic insights to support your company\u2019s growth and expansion.',
    ],
  },
  {
    icon: Building2,
    title: 'Representation',
    items: [
      'Benefit from DABS\u2019 affiliation with EuroCham and the Danish Royal Embassy, which advocates for the European business community and promotes bilateral trade.',
      'Leverage our close cooperation with The Trade Council to expand your business reach.',
    ],
  },
  {
    icon: Heart,
    title: 'Cultural and social engagement',
    items: [
      'Celebrate Danish traditions, including our annual Christmas lunch and other cultural events.',
      'Strengthen connections through community-building activities for members.',
    ],
  },
  {
    icon: Rocket,
    title: 'Support for entrepreneurs and startups',
    items: [
      'Receive guidance on launching and growing your business in Singapore.',
      'Get access to key networks and mentorship opportunities.',
    ],
  },
];

const tierFeatures = [
  { label: 'Access to members-only events', sponsor: true, mainPartner: true, category: 'Committees & Events' },
  { label: 'Discounted rates for open events, including breakfast talks, networking events, & lunch', sponsor: true, mainPartner: true },
  { label: 'Opportunity to share your expertise through speaking engagements', sponsor: true, mainPartner: true },
  { label: 'Sponsorship opportunities for major partnership events', sponsor: false, mainPartner: true },
  { label: 'Two complimentary invitations for selected guests to attend key events', sponsor: false, mainPartner: true },
  { label: 'Personalized introductions to fellow DABS members and business contacts', sponsor: true, mainPartner: true, category: 'Exclusive Business Services' },
  { label: 'Access to DABS\u2019 regional network for expanded business connections', sponsor: true, mainPartner: true },
  { label: 'Posting of internship offers on our platforms', sponsor: 'One annually', mainPartner: 'Unlimited' },
  { label: 'Visibility on our homepage with a dedicated sponsor slider featuring all sponsor logos', sponsor: true, mainPartner: true, category: 'Marketing & Branding' },
  { label: 'A highlighted sponsor page including your company description, logo, and hyperlink to your corporate profile', sponsor: false, mainPartner: true },
  { label: 'Announcement of your sponsorship with your company name and logo', sponsor: true, mainPartner: true, category: 'Newsletter and Social Media' },
  { label: 'Posting of business news and events, with links to your company platforms', sponsor: '3 annual', mainPartner: 'Unlimited' },
  { label: 'Your company logo featured in all official DABS email communications', sponsor: 'Small logo', mainPartner: 'Large logo' },
];

export default function SponsorshipPage() {
  let currentCategory = '';

  return (
    <>
      <PageHero title="Become a Sponsor" subtitle="Elevate your brand within the Danish business community" image="/assets/migrated/hero/welcome-banner.png" />
      <Section>
        <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
          Join an elite group of companies such as Carlsberg, SAXO Markets, BCC Chartering,
          M&aelig;rsk, and many other fantastic organizations as a DABS sponsor. A DABS sponsorship
          is the perfect way for businesses in Singapore to elevate their presence and network within
          the Danish and international business community.
        </p>

        <h2 className="text-2xl font-semibold mb-8">Your Sponsorship Benefits</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="hover-lift">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <benefit.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3">{benefit.title}</h3>
                    <ul className="space-y-2">
                      {benefit.items.map((item, i) => (
                        <li key={i} className="text-sm text-muted-foreground">{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Separator className="my-12" />

        {/* Tier Comparison */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Choose Your Level of Partnership</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two tiers designed to match your ambitions. Both give you a seat at the table &ndash;
            Main Partners get the spotlight.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Sponsor Tier */}
          <Card className="border-2 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-muted-foreground/30" />
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <Star className="h-6 w-6 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold">Sponsor</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                Perfect for companies looking to build visibility and connect with the Danish business community in Singapore.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Members-only event access &amp; discounted rates
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Speaking engagement opportunities
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Homepage logo placement
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Business introductions &amp; regional network access
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Newsletter &amp; social media mentions
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Logo in DABS email communications
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full">
                <Link href="/sponsorship/apply">Become a Sponsor</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Main Partner Tier */}
          <Card className="border-2 border-primary relative overflow-hidden shadow-lg">
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Crown className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Main Partner</h3>
              </div>
              <p className="text-muted-foreground mb-6">
                The premium partnership for companies who want maximum visibility, exclusive access, and a leading role in the community.
              </p>
              <ul className="space-y-3 mb-4">
                <li className="flex items-start gap-2 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Everything in Sponsor, plus:
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Sponsorship of major partnership events
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Complimentary VIP invitations for key events
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Highlighted sponsor page with company profile &amp; logo
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Unlimited internship postings
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Unlimited news &amp; event postings on DABS channels
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                  Large logo in all DABS email communications
                </li>
              </ul>
              <Button asChild className="w-full">
                <Link href="/sponsorship/apply">Become a Main Partner</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Detailed Feature Comparison */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center">Detailed Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left py-3 px-4 font-semibold w-1/2">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold w-1/4">
                    <div className="flex items-center justify-center gap-1.5">
                      <Star className="h-4 w-4" /> Sponsor
                    </div>
                  </th>
                  <th className="text-center py-3 px-4 font-semibold w-1/4 text-primary">
                    <div className="flex items-center justify-center gap-1.5">
                      <Crown className="h-4 w-4" /> Main Partner
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {tierFeatures.map((feature, i) => {
                  const showCategory = feature.category && feature.category !== currentCategory;
                  if (feature.category) currentCategory = feature.category;

                  return (
                    <>
                      {showCategory && (
                        <tr key={`cat-${feature.category}`} className="bg-muted/50">
                          <td colSpan={3} className="py-2 px-4 font-semibold text-xs uppercase tracking-wider text-muted-foreground">
                            {feature.category}
                          </td>
                        </tr>
                      )}
                      <tr key={i} className="border-b hover:bg-muted/30 transition-colors">
                        <td className="py-3 px-4 text-muted-foreground">{feature.label}</td>
                        <td className="py-3 px-4 text-center">
                          {feature.sponsor === true ? (
                            <CheckCircle2 className="h-4 w-4 text-primary mx-auto" />
                          ) : feature.sponsor === false ? (
                            <span className="text-muted-foreground/40">&mdash;</span>
                          ) : (
                            <span className="text-xs font-medium">{feature.sponsor}</span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-center">
                          {feature.mainPartner === true ? (
                            <CheckCircle2 className="h-4 w-4 text-primary mx-auto" />
                          ) : feature.mainPartner === false ? (
                            <span className="text-muted-foreground/40">&mdash;</span>
                          ) : (
                            <span className="text-xs font-medium text-primary">{feature.mainPartner}</span>
                          )}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-4 mb-8 text-sm text-muted-foreground">
          Please note that the sponsorship is valid per calendar year, from January 1 to December 31.
          To become a sponsor, complete the form below and submit your payment. We look forward to
          collaborating with you!
        </div>

        {/* Payment */}
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

        <Separator className="my-12" />

        <h2 className="text-2xl font-semibold mb-6">Sponsorship Inquiry</h2>
        <SponsorshipForm />
      </Section>
    </>
  );
}
