"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import type { VideoItem } from "@/data/gallery";

export function Lightbox({
  video,
  onClose,
}: {
  video: VideoItem | null;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!video) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [video, onClose]);

  return (
    <AnimatePresence>
      {video && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md md:p-8"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-xs uppercase tracking-widest text-zinc-400 transition-colors hover:text-white md:right-8 md:top-8"
            aria-label="Close"
          >
            close
          </button>
          <motion.div
            className="relative flex w-full max-w-[1100px] flex-col overflow-hidden rounded-xl border border-white/10 bg-zinc-950 shadow-2xl md:max-h-[90vh] md:flex-row"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.96, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.96, opacity: 0 }}
            transition={{ type: "spring", damping: 26, stiffness: 260 }}
          >
            <div className="flex items-center justify-center bg-black md:min-w-0 md:flex-1">
              <video
                key={video.src}
                src={video.src}
                controls
                autoPlay
                className="max-h-[55vh] w-auto max-w-full md:max-h-[90vh]"
              />
            </div>
            <aside className="flex w-full flex-col border-t border-white/10 md:w-[360px] md:shrink-0 md:border-l md:border-t-0">
              <div className="border-b border-white/10 px-5 py-4">
                <h2 className="text-base font-semibold leading-snug text-white">
                  {video.title}
                </h2>
                {video.place ? (
                  <p className="mt-1 text-xs text-zinc-400">{video.place}</p>
                ) : null}
              </div>
              <div className="flex-1 overflow-y-auto px-5 py-4">
                {video.caption ? (
                  <p className="whitespace-pre-wrap text-sm leading-relaxed text-zinc-200">
                    {video.caption}
                  </p>
                ) : (
                  <p className="text-sm italic text-zinc-600">No caption.</p>
                )}
              </div>
              <div className="border-t border-white/10 px-5 py-4">
                <p className="text-[11px] uppercase tracking-[0.15em] text-zinc-500">
                  {new Date(video.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </p>
              </div>
            </aside>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
