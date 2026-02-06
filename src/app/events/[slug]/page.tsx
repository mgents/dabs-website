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

/**
 * Parse event description into structured sections.
 * Splits on double newlines and groups content blocks.
 */
function parseDescription(description: string): { intro: string[]; details: string[] } {
  const paragraphs = description.split('\n\n').map(p => p.trim()).filter(Boolean);

  // Find the split point — look for headings like "THE DETAILS", "TICKETS", etc.
  const detailKeywords = ['THE DETAILS', 'TICKETS', 'PRICING', 'REGISTRATION', 'HOW TO REGISTER', 'Early Bird'];
  const splitIndex = paragraphs.findIndex(p =>
    detailKeywords.some(keyword => p.toUpperCase().includes(keyword.toUpperCase()))
  );

  if (splitIndex > 0) {
    return {
      intro: paragraphs.slice(0, splitIndex),
      details: paragraphs.slice(splitIndex),
    };
  }

  return {
    intro: paragraphs,
    details: [],
  };
}

export default async function EventPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    notFound();
  }

  const upcoming = isUpcoming(event.start_datetime);
  const allImages = [
    ...(event.featured_image_url ? [getEventImage(event.featured_image_url)] : []),
    ...(event.image_urls || []),
  ];
  const description = event.description ? parseDescription(event.description) : null;

  return (
    <Section>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {/* Event Images — original aspect ratio, no cropping */}
          {allImages.length > 0 && (
            <div className="space-y-4 mb-8">
              {allImages.map((imageUrl, index) => (
                <div key={index} className="relative w-full rounded-xl overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={index === 0 ? event.title : `${event.title} — image ${index + 1}`}
                    width={1200}
                    height={800}
                    className="w-full h-auto rounded-xl"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority={index === 0}
                  />
                </div>
              ))}
            </div>
          )}

          <h1 className="text-3xl md:text-4xl font-bold mb-6">{event.title}</h1>

          {event.excerpt && (
            <p className="text-lg text-muted-foreground mb-8">{event.excerpt}</p>
          )}

          {/* Event Description — structured layout */}
          {description && (
            <div className="space-y-8">
              {/* Intro / invitation text */}
              {description.intro.length > 0 && (
                <div className="prose prose-lg max-w-none">
                  {description.intro.map((paragraph, i) => (
                    <p key={i} className="whitespace-pre-line">{paragraph}</p>
                  ))}
                </div>
              )}

              {/* Details section — ticket info, logistics */}
              {description.details.length > 0 && (
                <>
                  <Separator />
                  <div className="bg-muted/50 rounded-xl p-6 md:p-8 space-y-4">
                    {description.details.map((paragraph, i) => {
                      // Check if this paragraph is a heading-like line
                      const isHeading = paragraph === paragraph.toUpperCase() && paragraph.length < 40;
                      if (isHeading) {
                        return (
                          <h3 key={i} className="text-lg font-bold text-primary tracking-wide">
                            {paragraph}
                          </h3>
                        );
                      }
                      return (
                        <p key={i} className="whitespace-pre-line text-sm md:text-base leading-relaxed">
                          {paragraph}
                        </p>
                      );
                    })}
                  </div>
                </>
              )}
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
