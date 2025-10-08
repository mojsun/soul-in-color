import siteConfig from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-300 bg-gray-100 text-gray-900 mt-0">
      <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="text-sm">© {new Date().getFullYear()} {siteConfig.companyName}</div>
        <div className="text-sm flex items-center gap-3">
          <a
            href={siteConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline underline-offset-4"
          >
            Instagram
          </a>
          <span className="opacity-70">•</span>
          <a href={siteConfig.socials.email} className="hover:underline underline-offset-4">
            Email
          </a>
        </div>
        <div className="text-sm opacity-90 hidden sm:block">
          Let’s make happy, memorable memories
        </div>
      </div>
    </footer>
  );
} 