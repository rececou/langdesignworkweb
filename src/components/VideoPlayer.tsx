'use client';

import { useState } from 'react';

interface VideoPlayerProps {
  src: string;
  poster: string;
  title: string;
}

export default function VideoPlayer({ src, poster, title }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <video
        className="w-full h-full object-cover"
        controls
        autoPlay
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>
    );
  }

  return (
    <div
      className="relative w-full h-full cursor-pointer group"
      onClick={() => setIsPlaying(true)}
    >
      <img
        src={poster}
        alt={title}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
          <svg className="w-6 h-6 text-[#FF6B6B] ml-1" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
}
