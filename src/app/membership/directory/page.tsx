'use client';

import { useState } from 'react';
import { ExternalLink, Search, Building2 } from 'lucide-react';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { corporateMembers } from '@/data/members';

export default function MembersDirectoryPage() {
  const [search, setSearch] = useState('');

  const filtered = corporateMembers.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PageHero title="Member Directory" image="/assets/migrated/hero/membership-banner.png" />
      <Section>
        <div className="relative max-w-md mb-8">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search members..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((member) => {
          const content = (
            <Card className="hover-lift h-full">
              <CardContent className="p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center shrink-0">
                  <Building2 className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium truncate">{member.name}</h3>
                </div>
                {member.url && (
                  <ExternalLink className="h-4 w-4 text-muted-foreground shrink-0" />
                )}
              </CardContent>
            </Card>
          );

          if (member.url) {
            return (
              <a key={member.name} href={member.url} target="_blank" rel="noopener noreferrer" className="block">
                {content}
              </a>
            );
          }
          return <div key={member.name}>{content}</div>;
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No members found matching your search.</p>
        </div>
      )}
      </Section>
    </>
  );
}
