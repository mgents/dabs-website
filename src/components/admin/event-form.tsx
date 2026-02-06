'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { createEvent, updateEvent } from '@/lib/actions/events';
import type { Event } from '@/types/database';

interface EventFormProps {
  event?: Event;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

export function EventForm({ event }: EventFormProps) {
  const router = useRouter();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(event?.title || '');
  const [slug, setSlug] = useState(event?.slug || '');
  const [isPublished, setIsPublished] = useState(event?.is_published || false);

  function handleTitleChange(value: string) {
    setTitle(value);
    if (!event) {
      setSlug(slugify(value));
    }
  }

  async function handleSubmit(formData: FormData) {
    setError('');
    setLoading(true);

    formData.set('is_published', isPublished ? 'true' : 'false');

    try {
      const result = event
        ? await updateEvent(event.id, formData)
        : await createEvent(formData);

      if (!result.success) {
        setError(result.error || 'An error occurred');
        setLoading(false);
        return;
      }

      router.push('/admin/events');
      router.refresh();
    } catch {
      setError('An unexpected error occurred');
      setLoading(false);
    }
  }

  const formatDateForInput = (dateStr: string | null) => {
    if (!dateStr) return '';
    return new Date(dateStr).toISOString().slice(0, 16);
  };

  return (
    <form action={handleSubmit} className="space-y-6 max-w-2xl">
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-3 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title *</Label>
          <Input
            id="title"
            name="title"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="slug">Slug *</Label>
          <Input
            id="slug"
            name="slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            required
            pattern="[a-z0-9]+(?:-[a-z0-9]+)*"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="start_datetime">Start Date/Time *</Label>
          <Input
            id="start_datetime"
            name="start_datetime"
            type="datetime-local"
            defaultValue={formatDateForInput(event?.start_datetime || null)}
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="end_datetime">End Date/Time</Label>
          <Input
            id="end_datetime"
            name="end_datetime"
            type="datetime-local"
            defaultValue={formatDateForInput(event?.end_datetime || null)}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="timezone">Timezone</Label>
        <Input
          id="timezone"
          name="timezone"
          defaultValue={event?.timezone || 'Asia/Singapore'}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="location_name">Location Name</Label>
          <Input
            id="location_name"
            name="location_name"
            defaultValue={event?.location_name || ''}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="location_address">Location Address</Label>
          <Input
            id="location_address"
            name="location_address"
            defaultValue={event?.location_address || ''}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="map_url">Map URL</Label>
        <Input
          id="map_url"
          name="map_url"
          type="url"
          defaultValue={event?.map_url || ''}
          placeholder="https://maps.google.com/..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="featured_image_url">Featured Image URL</Label>
        <Input
          id="featured_image_url"
          name="featured_image_url"
          type="url"
          defaultValue={event?.featured_image_url || ''}
          placeholder="https://..."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="excerpt">Excerpt * (max 500 chars)</Label>
        <Textarea
          id="excerpt"
          name="excerpt"
          defaultValue={event?.excerpt || ''}
          maxLength={500}
          rows={3}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content_html">Content (HTML)</Label>
        <Textarea
          id="content_html"
          name="content_html"
          defaultValue={event?.content_html || ''}
          rows={10}
          placeholder="<h2>About this event</h2><p>...</p>"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="registration_mode">Registration Mode</Label>
        <Select name="registration_mode" defaultValue={event?.registration_mode || 'none'}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="none">No Registration</SelectItem>
            <SelectItem value="url">External URL</SelectItem>
            <SelectItem value="email">Email</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="registration_url">Registration URL</Label>
          <Input
            id="registration_url"
            name="registration_url"
            type="url"
            defaultValue={event?.registration_url || ''}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="registration_email">Registration Email</Label>
          <Input
            id="registration_email"
            name="registration_email"
            type="email"
            defaultValue={event?.registration_email || ''}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="google_calendar_url">Google Calendar URL</Label>
        <Input
          id="google_calendar_url"
          name="google_calendar_url"
          type="url"
          defaultValue={event?.google_calendar_url || ''}
        />
      </div>

      <div className="flex items-center space-x-2">
        <Checkbox
          id="is_published"
          checked={isPublished}
          onCheckedChange={(checked) => setIsPublished(checked === true)}
        />
        <Label htmlFor="is_published">Published</Label>
      </div>

      <div className="flex gap-4">
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving...' : event ? 'Update Event' : 'Create Event'}
        </Button>
        <Button type="button" variant="outline" onClick={() => router.back()}>
          Cancel
        </Button>
      </div>
    </form>
  );
}
