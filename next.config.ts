import type { NextConfig } from "next";

const CANONICAL_ORIGIN = "https://www.kimbajourneys.com";

// Legacy WordPress domain. Both hosts are attached to this Vercel project and
// served by the app (no domain-level redirect) so these rules can map old
// paths to the closest page on the canonical www host in a single 301 hop.
const LEGACY_HOST = "(?:www\\.)?kimba-africa\\.co\\.za";

// Build a case-insensitive regex fragment, e.g. "tour" -> "[tT][oO][uU][rR]".
const ci = (word: string) =>
  word
    .split("")
    .map((ch) =>
      /[a-z]/i.test(ch) ? `[${ch.toLowerCase()}${ch.toUpperCase()}]` : ch,
    )
    .join("");

// Old path prefix(es) -> new path on www.kimbajourneys.com.
const legacyPathMap: Array<[prefixes: string[], destination: string]> = [
  [["about"], "/about"], // /about, /about-us, ...
  [["contact", "enquir", "book"], "/enquire"],
  [["tour", "safari", "journey", "itinerar"], "/journeys"],
  [["destination"], "/destinations"],
];

const legacyRedirects = [
  ...legacyPathMap.map(([prefixes, destination]) => ({
    source: `/:legacy((?:${prefixes.map(ci).join("|")}).*)`,
    has: [{ type: "host" as const, value: LEGACY_HOST }],
    destination: `${CANONICAL_ORIGIN}${destination}`,
    statusCode: 301 as const,
  })),
  // Everything else (/, /index.php, /wp-*, /?p=..., old blog posts) -> home.
  {
    source: "/:legacy*",
    has: [{ type: "host" as const, value: LEGACY_HOST }],
    destination: `${CANONICAL_ORIGIN}/`,
    statusCode: 301 as const,
  },
];

const nextConfig: NextConfig = {
  allowedDevOrigins: ["127.0.0.1"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // Next's built-in trailing-slash redirect runs before custom redirects,
  // which would add an extra hop on the legacy host (/about-us/ ->
  // /about-us -> www/about). We skip it and re-add it below, after the
  // legacy-host rules.
  skipTrailingSlashRedirect: true,
  async redirects() {
    return [
      ...legacyRedirects,
      {
        source: "/contact",
        destination: "/enquire",
        permanent: true,
      },
      // Equivalent of Next's default trailing-slash removal.
      {
        source: "/:path((?!\\.well-known(?:/.*)?)(?:[^/]+/)*[^/]+)/",
        destination: "/:path",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
