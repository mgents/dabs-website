import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';

export const metadata: Metadata = {
  title: 'Privacy Statement',
  description: 'DABS Privacy Statement - how we collect and process personal data.',
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Statement" image="/assets/migrated/hero/benefits-banner.png" />
      <Section containerSize="narrow">
        <p className="text-lg text-muted-foreground mb-8">
        This Privacy Statement sets out the basis on how DABS collects and processes personal data.
      </p>

      <div className="bg-muted/50 rounded-xl p-8 text-center">
        <p className="text-muted-foreground mb-4">
          The full Privacy Statement PDF will be embedded here once the document is uploaded.
        </p>
        <p className="text-sm text-muted-foreground">
          DABS Privacy Statement - November 2021
        </p>
      </div>
      </Section>
    </>
  );
}
