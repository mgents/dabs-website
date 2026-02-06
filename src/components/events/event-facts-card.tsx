import { format } from 'date-fns';
import { CalendarDays, MapPin, ExternalLink, Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import type { Event } from '@/types/database';

interface EventFactsCardProps {
  event: Event;
}

export function EventFactsCard({ event }: EventFactsCardProps) {
  const startDate = new Date(event.start_datetime);
  const endDate = event.end_datetime ? new Date(event.end_datetime) : null;

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle className="text-lg">Event Details</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-3">
          <CalendarDays className="h-5 w-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="font-medium">{format(startDate, 'EEEE, MMMM d, yyyy')}</p>
            <p className="text-sm text-muted-foreground">
              {format(startDate, 'h:mm a')}
              {endDate && ` - ${format(endDate, 'h:mm a')}`}
            </p>
          </div>
        </div>

        {event.location_name && (
          <div className="flex gap-3">
            <MapPin className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium">{event.location_name}</p>
              {event.location_address && (
                <p className="text-sm text-muted-foreground">{event.location_address}</p>
              )}
              {event.location_url && (
                <a
                  href={event.location_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline inline-flex items-center gap-1 mt-1"
                >
                  View Map <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>
        )}

        <Separator />

        {event.registration_url && (
          <Button asChild className="w-full">
            <a href={event.registration_url} target="_blank" rel="noopener noreferrer">
              Register <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </Button>
        )}

        <Button asChild variant="outline" className="w-full">
          <a href={`/api/events/${event.slug}/ics`} download>
            <Download className="h-4 w-4 mr-2" />
            Add to Calendar
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}
