"use client";

import { useState } from "react";
import { videos, type VideoItem } from "@/data/gallery";
import { VideoTile } from "./VideoTile";
import { Lightbox } from "./Lightbox";

export function Gallery() {
  const [selected, setSelected] = useState<VideoItem | null>(null);

  return (
    <>
      <section className="px-6 pb-24 md:px-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {videos.map((v, i) => (
            <VideoTile
              key={`${i}-${v.src}`}
              video={v}
              onOpen={() => setSelected(v)}
            />
          ))}
        </div>
      </section>
      <Lightbox video={selected} onClose={() => setSelected(null)} />
    </>
  );
}
