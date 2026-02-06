import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Section } from '@/components/ui/section';
import { Card, CardContent } from '@/components/ui/card';
import { HeroVideo } from '@/components/ui/hero-video';
import { EventCard } from '@/components/events/event-card';
import { getUpcomingEvents } from '@/lib/db/events';
import { ASSETS } from '@/lib/assets';
import { ArrowRight, Users, Calendar, Briefcase } from 'lucide-react';

export default async function HomePage() {
  const upcomingEvents = await getUpcomingEvents(3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <HeroVideo
          src={ASSETS.heroVideo}
          fallbackSrc={ASSETS.heroVideoFallback}
          poster={ASSETS.heroBanner}
          playbackRate={1}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 slide-up">DABS</h1>
          <p className="text-xl md:text-2xl mb-2 opacity-90 fade-in">
            Danish Business Association of Singapore
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-75 fade-in">
            Connecting Danish professionals and businesses in Singapore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/membership/join">Become a Member</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white">
              <Link href="/events">See Events</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <Section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Upcoming Events</h2>
          <Button asChild variant="ghost">
            <Link href="/events" className="inline-flex items-center gap-1">
              See all events <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-muted/50 rounded-xl">
            <Calendar className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
            <p className="text-muted-foreground text-lg">No upcoming events at the moment.</p>
            <p className="text-muted-foreground">Check back soon for new events!</p>
          </div>
        )}
      </Section>

      {/* Value Pillars */}
      <Section background="muted">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Join DABS?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Your gateway to the Danish business community in Singapore
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover-lift">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Business Support</h3>
              <p className="text-muted-foreground">
                Get expert guidance, resources, and advice to navigate Singapore&apos;s business landscape successfully.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link href="/membership/benefits">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover-lift">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Networking &amp; Community</h3>
              <p className="text-muted-foreground">
                Meet industry leaders, Danish professionals, and over 200 Danish companies to expand your connections.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link href="/membership/benefits">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="hover-lift">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Events &amp; Learning</h3>
              <p className="text-muted-foreground">
                Join 25+ annual events from breakfast talks and roundtable discussions to social events and galas.
              </p>
              <Button asChild variant="link" className="mt-4">
                <Link href="/events">Learn More</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Sponsor Gratitude */}
      <Section>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-3">
            A heartfelt thank you to all our Main Partners and Sponsors
          </h2>
        </div>

        {/* Main Partners */}
        <div className="mb-8">
          <p className="text-lg font-semibold text-center text-muted-foreground mb-4">DABS Main Partners</p>
          <div className="flex items-center justify-center gap-12 md:gap-20 max-w-3xl mx-auto rounded-xl border bg-white p-8">
            <div className="relative h-14 md:h-20 w-40 md:w-56">
              <Image
                src="https://img.hubbis.com/optimiser/img/company/cropped/c9cdb79b198ba73c00a7f2c066fb6808c58c76de.png"
                alt="Saxo Markets"
                fill
                className="object-contain"
                sizes="224px"
              />
            </div>
            <div className="relative h-14 md:h-20 w-40 md:w-56">
              <Image
                src="https://static.wikia.nocookie.net/logopedia/images/3/33/Carlsberg_print.svg/revision/latest?cb=20220417210157"
                alt="Carlsberg"
                fill
                className="object-contain"
                sizes="224px"
              />
            </div>
          </div>
        </div>

        {/* Sponsors */}
        <div className="mb-8">
          <p className="text-lg font-semibold text-center text-muted-foreground mb-4">DABS Sponsors</p>
          <div className="rounded-xl overflow-hidden border bg-white p-6 max-w-3xl mx-auto">
            <div className="relative w-full aspect-[3/1]">
              <Image
                src="/assets/migrated/sponsors/sponsors-composite.jpg"
                alt="DABS Sponsors"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button asChild variant="outline">
            <Link href="/sponsorship/sponsors">View All Sponsors</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
