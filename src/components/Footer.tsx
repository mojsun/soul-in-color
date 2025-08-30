import siteConfig from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="w-full border-t border-brand/40 bg-brand text-white mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 grid gap-2 sm:grid-cols-3 items-center">
        <div className="text-sm">© {new Date().getFullYear()} {siteConfig.companyName}</div>
        <div className="text-sm text-center">
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
          >
            Instagram
          </a>
          <span className="mx-2 opacity-70">•</span>
          <a href={siteConfig.socials.email} className="hover:underline underline-offset-4">
            Email
          </a>
        </div>
        <div className="text-sm text-right opacity-90 hidden sm:block">
          Let’s make happy, memorable memories
        </div>
      </div>
    </footer>
  );
} 