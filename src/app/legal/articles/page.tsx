import type { Metadata } from 'next';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';

export const metadata: Metadata = {
  title: 'Articles of Association',
  description: 'Articles of Association of the Danish Business Association of Singapore.',
};

export default function ArticlesPage() {
  return (
    <>
      <PageHero title="Articles of Association" image="/assets/migrated/hero/benefits-banner.png" />
      <Section>
        <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar navigation */}
        <aside className="lg:w-64 shrink-0">
          <div className="sticky top-24">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">
              On this page
            </h3>
            <nav className="space-y-1">
              {['Name', 'Objectives', 'Membership', 'Committee', 'Meetings', 'Finance', 'Amendments', 'Dissolution'].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-sm py-1.5 px-3 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                  >
                    {item}
                  </a>
                )
              )}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-1 prose prose-lg max-w-none">
          <p className="text-muted-foreground mb-2">Danish Business Association of Singapore</p>
          <p className="text-sm text-muted-foreground mb-8">Revised in June 2021</p>

          <div className="bg-muted/50 rounded-lg p-6 text-center">
            <p className="text-muted-foreground">
              The full Articles of Association content will be populated from the current DABS website.
              This page structure supports anchor navigation and print-friendly styling.
            </p>
          </div>

          <section id="name" className="mt-12">
            <h2>1. Name</h2>
            <p className="text-muted-foreground">Content to be ported from current site.</p>
          </section>

          <section id="objectives" className="mt-12">
            <h2>2. Objectives</h2>
            <p className="text-muted-foreground">Content to be ported from current site.</p>
          </section>

          <section id="membership" className="mt-12">
            <h2>3. Membership</h2>
            <p className="text-muted-foreground">Content to be ported from current site.</p>
          </section>

          <section id="committee" className="mt-12">
            <h2>4. Committee</h2>
            <p className="text-muted-foreground">Content to be ported from current site.</p>
          </section>

          <section id="meetings" className="mt-12">
            <h2>5. Meetings</h2>
            <p className="text-muted-foreground">Content to be ported from current site.</p>
          </section>

          <section id="finance" className="mt-12">
            <h2>6. Finance</h2>
            <p className="text-muted-foreground">Content to be ported from current site.</p>
          </section>

          <section id="amendments" className="mt-12">
            <h2>7. Amendments</h2>
            <p className="text-muted-foreground">Content to be ported from current site.</p>
          </section>

          <section id="dissolution" className="mt-12">
            <h2>8. Dissolution</h2>
            <p className="text-muted-foreground">Content to be ported from current site.</p>
          </section>
        </div>
      </div>
      </Section>
    </>
  );
}
