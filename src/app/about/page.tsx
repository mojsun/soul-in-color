import Image from "next/image";
import siteConfig from "@/lib/siteConfig";

export const metadata = {
  title: `About | ${siteConfig.companyName}`,
  description: `${siteConfig.companyName} – ${siteConfig.tagline}`,
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-6 text-brand-dark">About {siteConfig.companyName}</h1>
      <p className="text-lg leading-relaxed mb-6">
        Soul in Colour is a creative studio, founded by Negar Ronasi (Master of Arts—painting) and Mozhdeh Khorashahi (Master of Architecture). Together, we blend our backgrounds in art and design to create an inspiring space where creativity comes alive.
      </p>
      <p className="leading-relaxed mb-6">
        Through art workshops, teaching, and unique artistic products, our mission is to make art more accessible while building a welcoming community for artists and art lovers. Soul in Colour is not just about painting or creating—it’s about connection, self-expression, and growth.
      </p>
      <p className="leading-relaxed mb-6">
        Whether you join us for a workshop, explore our artistic creations, or simply want to connect with other creatives, Soul in Colour is a place to learn, share, and celebrate the beauty of art together. 🎨✨
      </p>

      <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-brand/20 mb-8">
        <Image
          src="/images/5.jpg"
          alt="Guests painting during a Soul in Colour workshop"
          fill
          className="object-cover"
          style={{ objectPosition: "50% 20%" }}
          sizes="(max-width: 768px) 100vw, 768px"
          priority
        />
      </div>

      <div className="mt-4">
        <a
          href={siteConfig.eventbriteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="button-brand text-base"
        >
          {siteConfig.event.ctaText}
        </a>
      </div>
    </main>
  );
} 