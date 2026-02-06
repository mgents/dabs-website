import { format } from 'date-fns';
import { CalendarDays, MapPin, ExternalLink, Download, Users, Ticket, DollarSign } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { EventShare } from '@/components/events/event-share';
import type { Event } from '@/types/database';

interface EventFactsCardProps {
  event: Event;
}

function isPastEvent(event: Event): boolean {
  return new Date(event.start_datetime) < new Date();
}

function getPriceLabel(event: Event): string | null {
  if (event.is_members_only) {
    if (event.member_price === 0) return 'Free for members';
    return `SGD ${event.member_price} (members)`;
  }
  if (event.member_price === 0 && (event.non_member_price === 0 || event.non_member_price === null)) {
    return 'Free';
  }
  if (event.member_price === 0 && event.non_member_price && event.non_member_price > 0) {
    return `Free for members · SGD ${event.non_member_price} for non-members`;
  }
  if (event.member_price > 0 && event.non_member_price && event.non_member_price > 0) {
    return `SGD ${event.member_price} (members) · SGD ${event.non_member_price} (non-members)`;
  }
  if (event.member_price > 0) {
    return `SGD ${event.member_price}`;
  }
  return null;
}

export function EventFactsCard({ event }: EventFactsCardProps) {
  const startDate = new Date(event.start_datetime);
  const endDate = event.end_datetime ? new Date(event.end_datetime) : null;
  const past = isPastEvent(event);
  const priceLabel = getPriceLabel(event);

  return (
    <Card className="sticky top-24">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">Event Details</CardTitle>
          {event.is_members_only && (
            <Badge variant="secondary" className="text-xs">Members Only</Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Registration CTA — prominent at top for upcoming events */}
        {!past && event.registration_url && (
          <>
            <Button asChild size="lg" className="w-full text-base">
              <a href={event.registration_url} target="_blank" rel="noopener noreferrer">
                <Ticket className="h-4 w-4 mr-2" />
                Register Now
              </a>
            </Button>
            <Separator />
          </>
        )}

        {/* Pricing */}
        {priceLabel && (
          <div className="flex gap-3">
            <DollarSign className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-medium text-sm">{priceLabel}</p>
              {event.is_members_only && (
                <p className="text-xs text-muted-foreground mt-1">
                  Not a member?{' '}
                  <a href="/membership/join" className="text-primary hover:underline">
                    Join DABS for SGD 150/yr
                  </a>
                </p>
              )}
            </div>
          </div>
        )}

        {/* Date & Time */}
        <div className="flex gap-3">
          <CalendarDays className="h-5 w-5 text-primary mt-0.5 shrink-0" />
          <div>
            <p className="font-medium">{format(startDate, 'EEEE, MMMM d, yyyy')}</p>
            <p className="text-sm text-muted-foreground">
              {format(startDate, 'h:mm a')}
              {endDate && ` – ${format(endDate, 'h:mm a')}`}
            </p>
          </div>
        </div>

        {/* Location */}
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
                  View on Map <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Members only callout */}
        {event.is_members_only && (
          <div className="flex gap-3">
            <Users className="h-5 w-5 text-primary mt-0.5 shrink-0" />
            <p className="text-sm text-muted-foreground">
              This event is exclusive to DABS members. Attendees may bring one guest.
            </p>
          </div>
        )}

        <Separator />

        {/* Calendar download */}
        <Button asChild variant="outline" className="w-full">
          <a href={`/api/events/${event.slug}/ics`} download>
            <Download className="h-4 w-4 mr-2" />
            Add to Calendar
          </a>
        </Button>

        {/* Share buttons */}
        <Separator />
        <EventShare title={event.title} slug={event.slug} />
      </CardContent>
    </Card>
  );
}
