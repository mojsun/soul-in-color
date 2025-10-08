import Link from "next/link";
import siteConfig from "@/lib/siteConfig";
import fs from "fs";
import path from "path";
import VideoGallery from "@/components/VideoGallery";

export default function EventsPage() {
  const videosDir = path.join(process.cwd(), "public", "videos");
  let media: string[] = [];
  try {
    const vEntries = fs.readdirSync(videosDir);
    const videos = vEntries
      .filter((name) => /\.(mp4|webm|mov|MOV)$/i.test(name))
      .map((name) => `/videos/${name}`);
    media = media.concat(videos);
  } catch {}

  return (
    <main className="min-h-[80vh] mx-auto max-w-6xl px-4 py-12 space-y-12">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#8F79A1]">Events</h1>
        <p className="text-gray-700">Browse our previous and upcoming gatherings.</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold text-brand">Upcoming</h2>
        <article className="rounded-lg border border-gray-300 bg-white/80 p-4 sm:p-6">
          <h3 className="text-xl font-bold mb-1">Soul in Colour Presents: Halloween Face Art & Party 🎨🎃</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><span className="font-semibold">Date:</span> Thursday, October 30, 2025</li>
            <li><span className="font-semibold">Time:</span> 7:30 PM – 10:00 PM</li>
            <li><span className="font-semibold">Location:</span> 161 Roehampton Avenue, Toronto, ON M4P 0C8</li>
            <li><span className="font-semibold">Age:</span> 18+</li>
          </ul>
          <div className="mt-3 text-sm text-gray-700 space-y-1 max-w-prose">
            <p>Face Painting Workshop – First hour to create your Halloween look.</p>
            <p>Finger Foods & Games – Enjoy light bites and fun games.</p>
            <p>Dance & Celebrate – End the evening with music and spooky vibes.</p>
            <p>Spots are limited – grab your ticket today!</p>
            <p>647-564-7494 or 437-237-2235 • soul.in.colorr@gmail.com • Instagram: @soul.in.colour</p>
          </div>
          <div className="mt-4">
            <a href={siteConfig.eventbriteUrl} target="_blank" rel="noopener noreferrer" className="button-brand">Get Tickets</a>
          </div>
        </article>
      </section>

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

      <section id="gallery" className="space-y-4">
        <h2 className="text-2xl font-semibold text-brand">Gallery</h2>
        <VideoGallery videos={media} />
      </section>

      <div className="pt-6">
        <Link href="/" className="button-outline-brand">Back to Home</Link>
      </div>
    </main>
  );
} 