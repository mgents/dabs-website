import { NextResponse } from 'next/server';
import { getEventBySlug } from '@/lib/db/events';
import { generateICS } from '@/lib/ics';

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const event = await getEventBySlug(slug);

  if (!event) {
    return NextResponse.json({ error: 'Event not found' }, { status: 404 });
  }

  const icsContent = generateICS(event);
  if (!icsContent) {
    return NextResponse.json({ error: 'Failed to generate ICS' }, { status: 500 });
  }

  return new NextResponse(icsContent, {
    headers: {
      'Content-Type': 'text/calendar; charset=utf-8',
      'Content-Disposition': `attachment; filename="${slug}.ics"`,
    },
  });
}
