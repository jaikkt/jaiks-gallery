import { spawn } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import ffmpegPath from "ffmpeg-static";
import { videos } from "../src/data/gallery";
import { posterSlug } from "../src/data/posterSlug";

const OUT_DIR = path.join(process.cwd(), "public", "posters");
const SEEK_SECONDS = "0.5";

if (!ffmpegPath) {
  console.error("ffmpeg-static binary not found.");
  process.exit(1);
}

if (!existsSync(OUT_DIR)) mkdirSync(OUT_DIR, { recursive: true });

function extract(src: string, outFile: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const args = [
      "-ss", SEEK_SECONDS,
      "-i", src,
      "-frames:v", "1",
      "-vf", "scale='min(1080,iw)':-2",
      "-q:v", "4",
      "-y",
      outFile,
    ];
    const proc = spawn(ffmpegPath!, args, { stdio: ["ignore", "ignore", "pipe"] });
    let stderr = "";
    proc.stderr.on("data", (d) => (stderr += d.toString()));
    proc.on("close", (code) =>
      code === 0 ? resolve() : reject(new Error(stderr.slice(-400))),
    );
  });
}

async function main() {
  const force = process.argv.includes("--force");
  let done = 0;
  let skipped = 0;
  for (const v of videos) {
    const slug = posterSlug(v);
    const outFile = path.join(OUT_DIR, `${slug}.jpg`);
    if (existsSync(outFile) && !force) {
      skipped++;
      continue;
    }
    process.stdout.write(`→ ${slug} … `);
    try {
      await extract(v.src, outFile);
      done++;
      console.log("ok");
    } catch (err) {
      console.log("FAIL");
      console.error(`  ${(err as Error).message}`);
    }
  }
  console.log(`\ngenerated: ${done}, skipped: ${skipped}`);
}

main();
