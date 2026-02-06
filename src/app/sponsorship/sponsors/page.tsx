import type { Metadata } from 'next';
import Image from 'next/image';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { CTABlock } from '@/components/ui/cta-block';
import { sponsors } from '@/data/sponsors';

export const metadata: Metadata = {
  title: 'Our Sponsors',
  description: 'Meet the companies that support DABS as Main Partners and Sponsors.',
};

export default function SponsorsPage() {
  const mainPartners = sponsors.filter((s) => s.tier === 'main_partner');
  const regularSponsors = sponsors.filter((s) => s.tier === 'sponsor');

  return (
    <>
      <PageHero title="Our Sponsors" image="/assets/migrated/hero/welcome-banner.png" />
      <Section>
        {/* Main Partners */}
        <h2 className="text-2xl font-semibold mb-6">Main Partners</h2>
        <div className="rounded-xl overflow-hidden border bg-white p-6 mb-12">
          <div className="relative w-full aspect-[4/1]">
            <Image
              src="/assets/migrated/sponsors/main-partners-composite.png"
              alt="DABS Main Partners"
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {mainPartners.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-6 rounded-xl border bg-white hover:shadow-md transition-shadow h-24"
            >
              <span className="font-medium text-center">{sponsor.name}</span>
            </a>
          ))}
        </div>

        {/* Sponsors */}
        <h2 className="text-2xl font-semibold mb-6">Sponsors</h2>
        <div className="rounded-xl overflow-hidden border bg-white p-6 mb-8">
          <div className="relative w-full aspect-[3/1]">
            <Image
              src="/assets/migrated/sponsors/sponsors-composite.jpg"
              alt="DABS Sponsors"
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
          {regularSponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 rounded-xl border bg-white hover:shadow-md transition-shadow h-20"
            >
              <span className="text-sm font-medium text-center text-foreground/70">{sponsor.name}</span>
            </a>
          ))}
        </div>
      </Section>

      <Section background="muted">
        <CTABlock
          title="Interested in Sponsoring?"
          description="Elevate your brand within the Danish and international business community in Singapore."
          primaryAction={{ label: 'Become a Sponsor', href: '/sponsorship' }}
          secondaryAction={{ label: 'Contact Us', href: '/contact' }}
        />
      </Section>
    </>
  );
}
