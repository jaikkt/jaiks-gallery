"use client";

import { useEffect, useRef, useState } from "react";
import type { VideoItem } from "@/data/gallery";
import { posterSlug } from "@/data/posterSlug";

export function VideoTile({
  video,
  onOpen,
}: {
  video: VideoItem;
  onOpen: () => void;
}) {
  const tileRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const el = tileRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          io.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const play = () => {
    videoRef.current?.play().catch(() => {});
  };

  const pause = () => {
    const el = videoRef.current;
    if (!el) return;
    el.pause();
    el.currentTime = 0.5;
  };

  const formattedDate = new Date(video.date).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });

  const poster = video.poster ?? `/posters/${posterSlug(video)}.jpg`;

  return (
    <button
      ref={tileRef}
      onClick={onOpen}
      onMouseEnter={play}
      onMouseLeave={pause}
      onFocus={play}
      onBlur={pause}
      className="group relative block aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-lg bg-zinc-900"
      aria-label={`Play ${video.title}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={poster}
        alt=""
        aria-hidden
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
      />
      {shouldLoad && (
        <video
          ref={videoRef}
          src={`${video.src}#t=0.5`}
          poster={poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="pointer-events-none relative h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <span className="text-left text-sm font-medium text-white">
          {video.title}
        </span>
        <span className="shrink-0 text-xs text-zinc-300">{formattedDate}</span>
      </div>
    </button>
  );
}
