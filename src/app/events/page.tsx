import Link from "next/link";
import siteConfig from "@/lib/siteConfig";
import fs from "fs";
import path from "path";
import VideoGallery from "@/components/VideoGallery";

export default function EventsPage() {
  const videosDir = path.join(process.cwd(), "public", "videos");
  let videos: string[] = [];
  try {
    const entries = fs.readdirSync(videosDir);
    videos = entries
      .filter((name) => /\.(mp4|webm|mov|MOV)$/i.test(name))
      .map((name) => `/videos/${name}`);
  } catch {}

  return (
    <main className="min-h-[80vh] mx-auto max-w-6xl px-4 py-12 space-y-12">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#8F79A1]">Events</h1>
        <p className="text-gray-700">Browse our previous and upcoming gatherings.</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-brand">Previous Events</h2>
        <article className="rounded-lg border border-brand/20 p-4 bg-white/60">
          <h3 className="text-xl font-bold mb-1">Watercolor Workshop – 6 September</h3>
          <p className="text-sm uppercase tracking-wide text-gray-600 mb-3">Theme: Sunflower</p>
          <div className="space-y-2 max-w-prose">
            <p>
              A friendly, beginner-welcome watercolor session. All materials provided. Come as you are and paint with us.
            </p>
            <ul className="space-y-1">
              <li><span className="font-semibold">Date:</span> {siteConfig.event.date}</li>
              <li><span className="font-semibold">Time:</span> {siteConfig.event.time}</li>
              <li><span className="font-semibold">Location:</span> {siteConfig.event.location}</li>
            </ul>
            <p className="pt-2">Contact us for the next sessions and stay tuned on Instagram.</p>
            <p>
              Instagram: <a href={siteConfig.socials.instagram} target="_blank" rel="noreferrer" className="underline">@soul.in.colour</a>
            </p>
          </div>
        </article>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-brand">Gallery</h2>
        <VideoGallery videos={videos} />
      </section>

      <div className="pt-6">
        <Link href="/" className="button-outline-brand">Back to Home</Link>
      </div>
    </main>
  );
} 