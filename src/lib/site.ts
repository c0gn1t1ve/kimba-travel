export const site = {
  name: "Kimba African Journeys",
  shortName: "Kimba",
  tagline: "Curated travel. Authentic experiences.",
  promise: "Bespoke itineraries • Personal service • Extraordinary Africa",
  eyebrow: "Southern Africa, thoughtfully crafted",
  description:
    "Boutique curated travel through Southern Africa — guided small groups and self-drive journeys in English and German, planned from McGregor in the Western Cape.",
  email: "info@kimbajourneys.com",
  phone: "+27 21 433 2547",
  phoneHref: "tel:+27214332547",
  address: {
    line1: "Voortrekker Road Ext",
    line2: "McGregor, 6708",
    region: "Western Cape, South Africa",
  },
  languages: ["English", "German"],
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/journeys", label: "Journeys" },
  { href: "/destinations", label: "Destinations" },
  { href: "/about", label: "About" },
] as const;
