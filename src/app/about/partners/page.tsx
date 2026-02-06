import type { Metadata } from 'next';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { Card, CardContent } from '@/components/ui/card';
import { partners, partnerCategories } from '@/data/partners';

export const metadata: Metadata = {
  title: 'Our Partners',
  description: 'DABS partner organizations including the Royal Danish Embassy and Nordic chambers.',
};

export default function PartnersPage() {
  const categories = Object.entries(partnerCategories) as [keyof typeof partnerCategories, string][];

  return (
    <>
      <PageHero title="Our Partners" image="/assets/migrated/hero/banner.jpg" />
      <Section>
        <div className="space-y-12">
        {categories.map(([key, label]) => {
          const categoryPartners = partners.filter((p) => p.category === key);
          if (categoryPartners.length === 0) return null;

          return (
            <div key={key}>
              <h2 className="text-2xl font-semibold mb-6">{label}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {categoryPartners.map((partner) => (
                  <a
                    key={partner.name}
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <Card className="hover-lift h-full">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          {partner.logo && (
                            <div className="relative w-16 h-16 shrink-0 rounded-md overflow-hidden bg-white border">
                              <Image
                                src={partner.logo}
                                alt={partner.name}
                                fill
                                className="object-contain p-1"
                                sizes="64px"
                              />
                            </div>
                          )}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <h3 className="font-semibold group-hover:text-primary transition-colors">
                                {partner.name}
                              </h3>
                              <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0 mt-1 ml-2" />
                            </div>
                            {partner.description && (
                              <p className="text-sm text-muted-foreground mt-2">
                                {partner.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                ))}
              </div>
            </div>
          );
        })}
      </div>
      </Section>
    </>
  );
}
