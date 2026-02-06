'use client';

import { useEffect, useRef } from 'react';

interface HeroVideoProps {
  src: string;
  fallbackSrc?: string;
  poster?: string;
  playbackRate?: number;
}

export function HeroVideo({ src, fallbackSrc, poster, playbackRate = 0.25 }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackRate;
    }
  }, [playbackRate]);

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      preload="metadata"
      className="absolute inset-0 w-full h-full object-cover"
      poster={poster}
    >
      <source src={src} type="video/mp4" />
      {fallbackSrc && <source src={fallbackSrc} type="video/quicktime" />}
    </video>
  );
}
