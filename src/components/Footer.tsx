import siteConfig from "@/lib/siteConfig";

export default function Footer() {
  return (
    <footer className="w-full border-t border-brand/40 bg-brand text-white mt-0">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="text-center space-y-2 mb-6">
          <div className="text-2xl font-semibold tracking-wide text-[#8F79A1]">STAY UP TO DATE</div>
          <p className="opacity-90">Sign up to get our newsletter for the latest news, shows, and events</p>
        </div>
        <form action="https://formspree.io/f/xqakzqed" method="POST" className="mx-auto max-w-xl flex items-stretch gap-3">
          <input
            name="email"
            type="email"
            required
            placeholder="Enter your email here"
            className="flex-1 rounded-md px-3 py-3 text-black border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/60 bg-white"
          />
          <button type="submit" className="rounded-md bg-white text-brand font-semibold px-4 py-3">Subscribe</button>
        </form>
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 opacity-90 text-sm">
          <div>© {new Date().getFullYear()} {siteConfig.companyName}</div>
          <div className="flex items-center gap-3">
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
          <div className="hidden sm:block">Let’s make happy, memorable memories</div>
        </div>
      </div>
    </footer>
  );
} 