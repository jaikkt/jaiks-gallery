import type { VideoItem } from "./gallery";

export function posterSlug(v: VideoItem): string {
  const base = `${v.date}-${v.title}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return base;
}
