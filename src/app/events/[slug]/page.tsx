import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/section';
import { Separator } from '@/components/ui/separator';
import { EventFactsCard } from '@/components/events/event-facts-card';
import { EventRegistrationForm } from '@/components/forms/event-registration-form';
import { getEventBySlug } from '@/lib/db/events';
import { getEventImage } from '@/lib/assets';

interface EventPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = await getEventBySlug(slug);
  if (!event) return { title: 'Event Not Found' };

  return {
    title: event.title,
    description: event.excerpt || `Event: ${event.title}`,
    openGraph: {
      title: event.title,
      description: event.excerpt || undefined,
      images: event.featured_image_url ? [{ url: event.featured_image_url }] : undefined,
    },
  };
}

function isUpcoming(startDatetime: string): boolean {
  return new Date(startDatetime) > new Date();
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const upcoming = isUpcoming(event.start_datetime);

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Hero Image */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-8">
            <Image
              src={getEventImage(event.featured_image_url)}
              alt={event.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-6">{event.title}</h1>

          {event.excerpt && (
            <p className="text-lg text-muted-foreground mb-8">{event.excerpt}</p>
          )}

          {/* Event Description */}
          {event.description && (
            <div className="prose prose-lg max-w-none">
              {event.description.split('\n\n').map((paragraph, i) => (
                <p key={i} className="whitespace-pre-line">{paragraph}</p>
              ))}
            </div>
          )}

          {/* Registration Form — only for upcoming events */}
          {upcoming && (
            <>
              <Separator className="my-10" />
              <div id="register">
                <h2 className="text-2xl font-bold mb-2">Register for this Event</h2>
                <p className="text-muted-foreground mb-6">
                  Fill out the form below to secure your spot. We&apos;ll send you a confirmation email.
                </p>
                <EventRegistrationForm eventTitle={event.title} eventSlug={event.slug} />
              </div>
            </>
          )}
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <EventFactsCard event={event} />
        </div>
      </div>
    </Section>
  );
}
