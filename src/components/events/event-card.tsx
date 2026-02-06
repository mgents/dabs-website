import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { CalendarDays, MapPin, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { getEventImage } from '@/lib/assets';
import type { Event } from '@/types/database';

interface EventCardProps {
  event: Event;
}

export function EventCard({ event }: EventCardProps) {
  const startDate = new Date(event.start_datetime);

  return (
    <Link href={`/events/${event.slug}`} className="block group">
      <Card className="overflow-hidden hover-lift h-full">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={getEventImage(event.featured_image_url)}
            alt={event.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <CardContent className="p-5">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
            <CalendarDays className="h-4 w-4" />
            <time dateTime={event.start_datetime}>
              {format(startDate, 'MMM d, yyyy')} &middot; {format(startDate, 'h:mm a')}
            </time>
          </div>
          <h3 className="font-semibold text-lg line-clamp-2 mb-2 group-hover:text-primary transition-colors">
            {event.title}
          </h3>
          {event.excerpt && (
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {event.excerpt}
            </p>
          )}
          {event.location_name && (
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-3">
              <MapPin className="h-3.5 w-3.5" />
              <span>{event.location_name}</span>
            </div>
          )}
          <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
            View Event <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
