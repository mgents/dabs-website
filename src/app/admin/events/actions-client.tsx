'use client';

import { useRouter } from 'next/navigation';
import { Eye, EyeOff, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toggleEventPublished, deleteEvent } from '@/lib/actions/events';

export function AdminTogglePublish({ id, isPublished }: { id: string; isPublished: boolean }) {
  const router = useRouter();

  async function handleToggle() {
    await toggleEventPublished(id, !isPublished);
    router.refresh();
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleToggle} title={isPublished ? 'Unpublish' : 'Publish'}>
      {isPublished ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
    </Button>
  );
}

export function AdminDeleteEvent({ id, title }: { id: string; title: string }) {
  const router = useRouter();

  async function handleDelete() {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;
    await deleteEvent(id);
    router.refresh();
  }

  return (
    <Button variant="ghost" size="icon" onClick={handleDelete} title="Delete" className="text-destructive hover:text-destructive">
      <Trash2 className="h-4 w-4" />
    </Button>
  );
}
