import Image from "next/image";
import Link from "next/link";
import siteConfig from "@/lib/siteConfig";

export default function Home() {
  return (
    <main className="min-h-[80vh]">
      <section className="relative mt-0">
        <div className="relative w-full h-[70vh]">
          <Image
            src="/images/123.jpeg"
            alt="Soul in Colour header"
            fill
            className="object-cover object-center"
            priority
          />
          
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 grid gap-8 sm:grid-cols-2 items-center min-h-[80vh]">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-[#8F79A1]">Soul in Colour Studio</h1>
          <p className="text-gray-700 mb-4 max-w-prose">
            Unleash your creativity — no experience needed! Join us for a welcoming art session with watercolour and community.
          </p>
          <p className="text-gray-700 max-w-prose">
            A friendly, beginner-welcome watercolor session. All materials provided. Come as you are and paint with us.
          </p>
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
        <div className="relative h-[360px] sm:h-[420px]">
          <div className="absolute top-0 left-4 sm:left-8 w-2/3 sm:w-[70%] aspect-[4/3] -rotate-6 rounded-2xl overflow-hidden shadow-xl border border-brand/20 bg-white">
            <Image src="/images/2.jpeg" alt="Workshop preview 1" fill className="object-cover" />
          </div>
          <div className="absolute bottom-0 right-4 sm:right-8 w-2/3 sm:w-[70%] aspect-[4/3] rotate-6 rounded-2xl overflow-hidden shadow-xl border border-brand/20 bg-white">
            <Image src="/images/3.jpeg" alt="Workshop preview 2" fill className="object-cover" />
          </div>
        </div>
      </section>

     

      <section className="w-screen px-0 pt-8 pb-10 space-y-6" style={{ backgroundColor: "#F5F5F5" }}>
        <h2 className="text-center font-extrabold text-[#8F79A1]" style={{ transform: "scale(2)" }}>Join our upcoming events</h2>
        <div className="overflow-hidden w-full">
          <div className="marquee">
            {["/images/1.jpeg","/images/2.jpeg","/images/3.jpeg","/images/4.jpeg","/images/5.jpg","/images/7.jpg", 
              "/images/1.jpeg","/images/2.jpeg","/images/3.jpeg","/images/4.jpeg","/images/5.jpg","/images/7.jpg"].map((src, i) => (
              <img key={src + i} src={src} alt="gallery" className="h-56 w-auto rounded-md border border-brand/20 object-cover" />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Shows */}
      <section className="w-screen px-0" style={{ backgroundColor: "#F5F5F5" }}>
        <div className="mx-auto max-w-6xl px-4 py-12 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-brand-dark text-center">Upcoming Shows</h2>
          <article className="rounded-lg border border-gray-300 bg-white/80 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
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
              </div>
              <a href={siteConfig.eventbriteUrl} target="_blank" rel="noopener noreferrer" className="button-brand w-fit">Get Tickets</a>
            </div>
          </article>
        </div>
      </section>

      {/* Contact section removed; moved to /contact */}

    </main>
  );
}
