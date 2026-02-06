import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { SponsorshipForm } from '@/components/forms/sponsorship-form';

export const metadata: Metadata = {
  title: 'Sponsor Inquiry',
  description: 'Submit a sponsorship inquiry to partner with DABS.',
};

export default function SponsorApplyPage() {
  return (
    <>
      <PageHero title="Sponsorship Inquiry" image="/assets/migrated/hero/welcome-banner.png" />
      <Section containerSize="narrow">
        <SponsorshipForm />
      </Section>
    </>
  );
}
