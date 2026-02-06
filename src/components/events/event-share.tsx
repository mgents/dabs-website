'use client';

import { useState } from 'react';
import { Facebook, Linkedin, Mail, Link2, Check, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface EventShareProps {
  title: string;
  slug: string;
}

export function EventShare({ title, slug }: EventShareProps) {
  const [copied, setCopied] = useState(false);

  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const eventUrl = `${siteUrl}/events/${slug}`;
  const encodedUrl = encodeURIComponent(eventUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedSummary = encodeURIComponent(`Check out this DABS event: ${title}`);

  const shareLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: 'X',
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: 'Email',
      icon: Mail,
      href: `mailto:?subject=${encodedTitle}&body=${encodedSummary}%0A%0A${encodedUrl}`,
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(eventUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const input = document.createElement('input');
      input.value = eventUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  async function handleNativeShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          text: `Check out this DABS event: ${title}`,
          url: eventUrl,
        });
      } catch {
        // User cancelled or error — ignore
      }
    }
  }

  const supportsNativeShare = typeof navigator !== 'undefined' && !!navigator.share;

  return (
    <div>
      <p className="text-sm font-medium mb-3">Share this event</p>
      <div className="flex items-center gap-2 flex-wrap">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target={link.name === 'Email' ? '_self' : '_blank'}
            rel="noopener noreferrer"
            title={`Share on ${link.name}`}
            className="w-9 h-9 rounded-full border bg-background hover:bg-muted flex items-center justify-center transition-colors text-muted-foreground hover:text-foreground"
          >
            <link.icon className="h-4 w-4" />
          </a>
        ))}
        <button
          onClick={copyLink}
          title={copied ? 'Copied!' : 'Copy link'}
          className="w-9 h-9 rounded-full border bg-background hover:bg-muted flex items-center justify-center transition-colors text-muted-foreground hover:text-foreground"
        >
          {copied ? <Check className="h-4 w-4 text-green-600" /> : <Link2 className="h-4 w-4" />}
        </button>
        {supportsNativeShare && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleNativeShare}
            className="h-9 text-xs"
          >
            More...
          </Button>
        )}
      </div>
    </div>
  );
}
