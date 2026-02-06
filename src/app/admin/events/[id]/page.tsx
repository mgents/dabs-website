import { notFound } from 'next/navigation';
import { EventForm } from '@/components/admin/event-form';
import { getAdminEventById } from '@/lib/db/admin-events';

interface EditEventPageProps {
  params: Promise<{ id: string }>;
}

export default async function EditEventPage({ params }: EditEventPageProps) {
  const { id } = await params;
  const event = await getAdminEventById(id);

  if (!event) {
    notFound();
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-8">Edit Event</h1>
      <EventForm event={event} />
    </div>
  );
}
