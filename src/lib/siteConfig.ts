export type SiteConfig = {
  companyName: string;
  tagline: string;
  event: {
    name: string;
    description: string;
    date: string; // Human-friendly date
    time: string; // Human-friendly time range
    location: string; // Single-line location
    addressLines: string[]; // For display
    ctaText: string;
  };
  socials: {
    instagram: string;
    email: string;
  };
  eventbriteUrl: string;
};

export const siteConfig: SiteConfig = {
  companyName: "Soul in Colour",
  tagline: "Art gatherings and workshops",
  event: {
    name: "Soul in Colour Gathering",
    description:
      "Unleash your creativity. No experience needed! Join us for a welcoming art session with watercolor and community.",
    date: "Saturday, September 6, 2025",
    time: "6:00 PM – 9:00 PM",
    location: "161 Roehampton Avenue, Toronto, ON M4P 0C8",
    addressLines: [
      "161 Roehampton Avenue",
      "Toronto, ON M4P 0C8",
    ],
    ctaText: "Tickets",
  },
  socials: {
    instagram: "https://www.instagram.com/soul.in.colour/",
    email: "mailto:soul.in.colorr@gmail.com",
  },
  eventbriteUrl:
    process.env.NEXT_PUBLIC_EVENTBRITE_URL ||
    "https://www.eventbrite.com/e/water-color-workshop-tickets-1573828506429?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl",
};

export default siteConfig; 