"use client";

import { useState, useRef, useEffect } from "react";

export type VideoGalleryProps = {
  videos: string[]; // public paths to media: can be images or videos
};

function isVideoPath(src: string): boolean {
  return /\.(mp4|webm|mov)$/i.test(src);
}

export default function VideoGallery({ videos }: VideoGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (hoveredIndex === null) {
      videoRefs.current.forEach((v) => {
        if (v) {
          v.pause();
          try {
            v.currentTime = 0;
          } catch {}
        }
      });
    }
  }, [hoveredIndex]);

  const handleMouseEnter = (idx: number) => {
    setHoveredIndex(idx);
    const vid = videoRefs.current[idx];
    if (vid) {
      const playPromise = vid.play();
      if (playPromise) {
        playPromise.catch(() => {});
      }
    }
  };

  const handleMouseLeave = (idx: number) => {
    const vid = videoRefs.current[idx];
    if (vid) {
      vid.pause();
      try {
        vid.currentTime = 0;
      } catch {}
    }
    setHoveredIndex((prev) => (prev === idx ? null : prev));
  };

  const items = videos.slice(0, 16); // 4x4 grid

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 overflow-visible">
      {items.map((src, idx) => {
        const isHovered = hoveredIndex === idx;
        const isDim = hoveredIndex !== null && hoveredIndex !== idx;
        const isVid = isVideoPath(src);
        return (
          <div
            key={src + idx}
            className={`relative aspect-square rounded-md overflow-hidden border border-brand/20 bg-black/5 transition-transform duration-200 ${
              isHovered ? "z-10 scale-[1.05] shadow-xl" : isDim ? "opacity-70 scale-[0.98]" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={() => handleMouseLeave(idx)}
          >
            {isVid ? (
              <video
                ref={(el) => { videoRefs.current[idx] = el; }}
                src={src}
                className="h-full w-full object-cover"
                muted
                loop
                playsInline
                preload="metadata"
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={src}
                alt="gallery item"
                className="h-full w-full object-cover"
              />
            )}
          </div>
        );
      })}
    </div>
  );
} 