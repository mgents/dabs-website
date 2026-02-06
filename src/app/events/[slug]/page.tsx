import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Section } from '@/components/ui/section';
import { EventFactsCard } from '@/components/events/event-facts-card';
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

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

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

          {/* Event Content */}
          {event.content_html && (
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: event.content_html }}
            />
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
