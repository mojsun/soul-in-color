import Image from "next/image";
import siteConfig from "@/lib/siteConfig";

export const metadata = {
  title: `About | ${siteConfig.companyName}`,
  description: `${siteConfig.companyName} – ${siteConfig.tagline}`,
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold tracking-tight mb-6 text-brand">About {siteConfig.companyName}</h1>
      <p className="text-lg leading-relaxed mb-6">
        {siteConfig.companyName} hosts creative gatherings and workshops that welcome all skill levels. Our mission is to help people slow down, connect, and express themselves through color, intuition, and community.
      </p>
      <p className="leading-relaxed mb-6">
        We believe art is for everyone. Whether you are a beginner or seasoned artist, our sessions are designed to be relaxing, supportive, and fun.
      </p>

      <div className="relative aspect-[16/9] w-full rounded-lg overflow-hidden border border-brand/20 mb-8">
        <Image
          src="/images/woman-painting.jpeg"
          alt="Guests painting during a Soul in Colour workshop"
          fill
          className="object-cover"
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