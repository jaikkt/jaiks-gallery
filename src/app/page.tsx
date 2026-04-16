import { Gallery } from "@/components/Gallery";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4 md:px-12">
          <a href="#" className="text-sm font-medium tracking-tight">
            Jaik Tom
          </a>
        </div>
      </header>

      <section className="px-6 pb-4 pt-16 md:px-12 md:pb-6 md:pt-24">
        <h1 className="text-lg font-medium tracking-tight md:text-xl">
          jaik&apos;s gallery.
        </h1>
      </section>

      <Gallery />

      <footer className="px-6 py-20 text-center text-xs text-zinc-500 md:px-12">
        reach out to see more!
      </footer>
    </main>
  );
}
