import Image from "next/image";
import Link from "next/link";
import siteConfig from "@/lib/siteConfig";

export default function Home() {
  return (
    <main className="min-h-[80vh]">
      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-[url('/images/horizantally-poster.jpeg')] bg-cover bg-center opacity-20"></div>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24 grid gap-8 sm:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[#8F79A1]">
              {siteConfig.event.name}
            </h1>
            <p className="text-lg text-gray-700 mb-6 max-w-prose">
              {siteConfig.event.description}
            </p>
            <ul className="space-y-1 text-base">
              <li><span className="font-semibold text-[#472f5b]">Date:</span> {siteConfig.event.date}</li>
              <li><span className="font-semibold text-[#472f5b]">Time:</span> {siteConfig.event.time}</li>
              <li><span className="font-semibold text-[#472f5b]">Location:</span> {siteConfig.event.location}</li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a
                href={siteConfig.eventbriteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-brand text-base"
              >
                {siteConfig.event.ctaText}
              </a>
              <Link
                href="/about"
                className="button-outline-brand text-base"
              >
                Learn more
              </Link>
            </div>
          </div>
          <div className="relative aspect-[3/2] w-full rounded-lg overflow-hidden border border-brand/20">
            <Image
              src="/images/vertically-poster.jpeg"
              alt="Soul in Colour workshop poster"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-2 items-start">
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-brand">What to Expect</h2>
          <p className="text-gray-700 max-w-prose">
            A friendly, beginner-welcome watercolor session. All materials provided. Come as you are and paint with us.
          </p>
        </div>
        <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-brand/20 bg-black/5">
          <video src="/videos/workshop-preview.mov" className="h-full w-full object-cover" autoPlay loop muted playsInline controls={false} />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <h3 className="text-xl font-semibold mb-3 text-brand">About this event</h3>
        <div className="space-y-3 max-w-2xl">
          <p>🎨 <span className="font-semibold">Soul in Colour Presents</span></p>
          <p className="uppercase tracking-wide font-bold">Watercolour Workshop</p>
          <p>🌈 Unleash Your Creativity – No Experience Needed!</p>
          <ul className="space-y-1">
            <li>🗓 <span className="font-semibold">Date:</span> {siteConfig.event.date}</li>
            <li>⏰ <span className="font-semibold">Time:</span> {siteConfig.event.time}</li>
            <li>📍 <span className="font-semibold">Location:</span> {siteConfig.event.location}</li>
          </ul>
          <p className="mt-4">✨ What to Expect:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>🎨 Bring your colour palette – we’ll provide the rest!</li>
            <li>🎶 Guided session with calming music</li>
            <li>☕🍪 Light refreshments, finger food & cozy vibes</li>
            <li>💜 A warm, welcoming space to express yourself</li>
            <li>🎟️ Limited spots available – reserve now!</li>
          </ul>
          <p className="mt-4">📞 647-564-7494 or 437-237-2235</p>
          <p>📧 <a href="mailto:soul.in.colorr@gmail.com" className="underline">soul.in.colorr@gmail.com</a></p>
          <p>📸 Instagram: <a href={siteConfig.socials.instagram} className="underline" target="_blank" rel="noreferrer">@soul.in.colour</a></p>
        </div>
      </section>
    </main>
  );
}
