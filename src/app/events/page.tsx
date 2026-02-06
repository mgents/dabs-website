import type { Metadata } from 'next';
import Link from 'next/link';
import { Section } from '@/components/ui/section';
import { PageHero } from '@/components/ui/page-hero';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EventCard } from '@/components/events/event-card';
import { getUpcomingEvents, getPastEvents } from '@/lib/db/events';
import { Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Events',
  description: 'Browse upcoming and past DABS events, from networking evenings to business seminars.',
};

export default async function EventsPage() {
  const [upcomingEvents, pastEvents] = await Promise.all([
    getUpcomingEvents(),
    getPastEvents(),
  ]);

  return (
    <>
      <PageHero title="Events" image="/assets/migrated/hero/about-banner.png" />
      <Section>
        <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="upcoming">Upcoming ({upcomingEvents.length})</TabsTrigger>
          <TabsTrigger value="past">Past ({pastEvents.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming">
          {/* Inline promo */}
          <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8 text-center">
            <p className="text-foreground">
              Do you want to enjoy all DABS seminars and events in 2025 for only SGD150?{' '}
              <Link href="/membership/join" className="text-primary font-semibold hover:underline">
                Sign up for DABS Membership today!
              </Link>
            </p>
          </div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
              <p className="text-lg text-muted-foreground">No upcoming events at the moment.</p>
              <p className="text-muted-foreground">Check back soon for new events!</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="past">
          {pastEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-lg text-muted-foreground">No past events to display.</p>
            </div>
          )}
        </TabsContent>
        </Tabs>
      </Section>
    </>
  );
}
