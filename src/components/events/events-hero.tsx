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

  return (
    <div
      className="relative w-full h-[420px] md:h-[500px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background image */}
      {currentEvent ? (
        <Image
          key={currentEvent.id}
          src={getEventImage(currentEvent.featured_image_url)}
          alt=""
          fill
          className="object-cover transition-opacity duration-700"
          sizes="100vw"
          priority
        />
      ) : (
        <Image
          src="/assets/migrated/hero/about-banner.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end px-4 md:px-8 pb-10 md:pb-14">
        <div className="max-w-5xl mx-auto w-full">
          {hasEvents && currentEvent ? (
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-primary-foreground/70 uppercase tracking-wider mb-2">
                  {upcomingEvents.length > 1
                    ? `Upcoming Event ${currentIndex + 1} of ${upcomingEvents.length}`
                    : 'Next Event'}
                </p>
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 line-clamp-2">
                  {currentEvent.title}
                </h1>
                <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm md:text-base mb-4">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarDays className="h-4 w-4" />
                    <time dateTime={currentEvent.start_datetime}>
                      {format(new Date(currentEvent.start_datetime), 'EEEE, MMMM d, yyyy')}
                      {' · '}
                      {format(new Date(currentEvent.start_datetime), 'h:mm a')}
                    </time>
                  </span>
                  {currentEvent.location_name && (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" />
                      {currentEvent.location_name}
                    </span>
                  )}
                </div>
                {currentEvent.excerpt && (
                  <p className="text-white/70 text-sm md:text-base line-clamp-2 max-w-2xl">
                    {currentEvent.excerpt}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <Button asChild size="lg" className="text-base">
                  <Link href={`/events/${currentEvent.slug}`} className="inline-flex items-center gap-2">
                    View Event <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">Events</h1>
              <p className="text-white/70 text-lg">
                Browse upcoming and past DABS events
              </p>
            </div>
          )}

          {/* Navigation controls */}
          {upcomingEvents.length > 1 && (
            <div className="flex items-center gap-3 mt-6">
              <button
                onClick={goToPrev}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                aria-label="Previous event"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {upcomingEvents.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === currentIndex
                        ? 'w-8 bg-white'
                        : 'w-3 bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to event ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={goToNext}
                className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors"
                aria-label="Next event"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
