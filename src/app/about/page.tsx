import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { CTABlock } from '@/components/ui/cta-block';
import { PageHero } from '@/components/ui/page-hero';

export const metadata: Metadata = {
  title: 'About DABS',
  description: 'Learn about the Danish Business Association of Singapore and our history since 1983.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="About DABS" image="/assets/migrated/hero/singapore-city.jpg" />

      <Section containerSize="narrow">
        <div className="prose prose-lg max-w-none">
          <p className="text-2xl font-semibold text-primary mb-2">Hej! Hello!</p>
          <p className="text-xl text-muted-foreground mb-8">
            Welcome to The Danish Business Association of Singapore &ndash; DABS.
          </p>

          <p>
            The Danish Business Association of Singapore (DABS) is the beating heart of the Danish
            business community in Singapore. We bring together Danish companies and professionals,
            creating a platform to exchange insights, foster collaboration, and navigate the Asian
            business landscape.
          </p>
        </div>

        <div className="prose prose-lg max-w-none space-y-6 mt-12">
          <h2>Who We Are</h2>

          <p>
            The Danish Business Association of Singapore (DABS), initiated by the Royal Danish Embassy
            and established in the autumn of 1983 by a group of dynamic Danish businessmen, was
            officially registered on 27 January 1984.
          </p>

          <p>
            The Association&apos;s main objectives are to actively contribute to the business
            developments between Singapore and Denmark and to contribute to their members&apos;
            interests and development of their organisations.
          </p>

          <p>
            DABS, an association of Danish business activities in Singapore, are a co-operative body
            with a source of ideas and information for its members. DABS also acts as an important link
            to other business associations in Singapore as well as the neighbouring countries. DABS
            frequently organises and sponsors presentations for its members to share valuable
            information and experiences.
          </p>

          <p>
            The Executive Committee of DABS is made up of members with a strong commitment to the
            objectives of DABS and the Annual Elections ensure this.
          </p>

          <p>
            The Committee meets once a month. Members are invited to about 10 DABS functions annually.
            Relevant breakfast, lunch &amp; evening presentations as well as a number of social
            gatherings and entertainment vary the topics for spouses and guests. DABS is very much
            alive and provides an important support function for Danish businesses in Singapore.
          </p>
        </div>

        <div className="mt-16">
          <CTABlock
            title="Join Our Community"
            description="Become part of DABS and connect with a vibrant network of Danish professionals and businesses in Singapore."
            primaryAction={{ label: 'Become a Member', href: '/membership/join' }}
            secondaryAction={{ label: 'See Events', href: '/events' }}
          />
        </div>
      </Section>
    </>
  );
}
