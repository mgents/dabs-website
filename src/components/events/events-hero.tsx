'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { CalendarDays, MapPin, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getEventImage } from '@/lib/assets';
import type { Event } from '@/types/database';

interface EventsHeroProps {
  upcomingEvents: Event[];
}

export function EventsHero({ upcomingEvents }: EventsHeroProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const hasEvents = upcomingEvents.length > 0;
  const currentEvent = hasEvents ? upcomingEvents[currentIndex] : null;

  const goToNext = useCallback(() => {
    if (upcomingEvents.length <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % upcomingEvents.length);
  }, [upcomingEvents.length]);

  const goToPrev = useCallback(() => {
    if (upcomingEvents.length <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + upcomingEvents.length) % upcomingEvents.length);
  }, [upcomingEvents.length]);

  useEffect(() => {
    if (isPaused || upcomingEvents.length <= 1) return;
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [isPaused, goToNext, upcomingEvents.length]);

  if (!hasEvents || !currentEvent) {
    return (
      <div className="relative w-full h-[250px] md:h-[350px]">
        <Image
          src="/assets/migrated/hero/about-banner.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Events</h1>
          <p className="text-white/70 text-lg">
            Browse upcoming and past DABS events
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="bg-muted/30"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-10 md:py-14">
        {/* Label */}
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6">
          {upcomingEvents.length > 1
            ? `Event Spotlight · ${currentIndex + 1} of ${upcomingEvents.length}`
            : 'Event Spotlight'}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Event Image — fully visible, not cropped */}
          <div className="relative w-full rounded-xl overflow-hidden shadow-lg bg-muted">
            <Image
              key={currentEvent.id}
              src={getEventImage(currentEvent.featured_image_url)}
              alt={currentEvent.title}
              width={800}
              height={500}
              className="w-full h-auto object-contain"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Event Details */}
          <div className="flex flex-col justify-center py-2">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 line-clamp-3">
              {currentEvent.title}
            </h1>

            <div className="flex flex-col gap-2 text-muted-foreground mb-5">
              <span className="inline-flex items-center gap-2 text-sm md:text-base">
                <CalendarDays className="h-4 w-4 text-primary shrink-0" />
                <time dateTime={currentEvent.start_datetime}>
                  {format(new Date(currentEvent.start_datetime), 'EEEE, MMMM d, yyyy')}
                  {' · '}
                  {format(new Date(currentEvent.start_datetime), 'h:mm a')}
                </time>
              </span>
              {currentEvent.location_name && (
                <span className="inline-flex items-center gap-2 text-sm md:text-base">
                  <MapPin className="h-4 w-4 text-primary shrink-0" />
                  {currentEvent.location_name}
                </span>
              )}
            </div>

            {currentEvent.excerpt && (
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 line-clamp-4">
                {currentEvent.excerpt}
              </p>
            )}

            <div className="flex items-center gap-4">
              <Button asChild size="lg" className="text-base">
                <Link href={`/events/${currentEvent.slug}`} className="inline-flex items-center gap-2">
                  View Event <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Navigation controls */}
            {upcomingEvents.length > 1 && (
              <div className="flex items-center gap-3 mt-8">
                <button
                  onClick={goToPrev}
                  className="w-9 h-9 rounded-full border bg-background hover:bg-muted flex items-center justify-center transition-colors"
                  aria-label="Previous event"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div className="flex gap-2">
                  {upcomingEvents.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentIndex
                          ? 'w-8 bg-primary'
                          : 'w-3 bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      aria-label={`Go to event ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  onClick={goToNext}
                  className="w-9 h-9 rounded-full border bg-background hover:bg-muted flex items-center justify-center transition-colors"
                  aria-label="Next event"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
