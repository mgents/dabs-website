import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { CommitteeMemberCard } from '@/components/sections/committee-member-card';
import { committeeMembers } from '@/data/committee';

export const metadata: Metadata = {
  title: 'Committee',
  description: 'Meet the DABS committee members driving the Danish business community in Singapore.',
};

export default function CommitteePage() {
  return (
    <>
      <PageHero title="Our Committee" image="/assets/migrated/hero/about-banner.png" />
      <Section>
        <p className="text-lg text-muted-foreground mb-10 max-w-3xl">
          Get to know each of our members, explore their LinkedIn profiles by clicking their picture,
          and connect with the individuals driving DABS forward.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {committeeMembers.map((member) => (
            <CommitteeMemberCard key={member.name} member={member} />
          ))}
        </div>
      </Section>
    </>
  );
}
