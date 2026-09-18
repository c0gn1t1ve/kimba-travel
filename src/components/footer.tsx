import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { nav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-3">
        <div className="max-w-sm">
          <div className="flex items-start gap-3">
            <BrandMark tone="gold" className="h-14 w-12 shrink-0" />
            <div>
              <p className="font-serif text-lg leading-tight">
                Kimba African Journeys
              </p>
              <p className="kicker mt-1 text-[0.6rem] text-gold">
                Curated travel
              </p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-cream/70">
            Boutique journeys through Southern Africa, planned from McGregor in
            the Western Cape. Guided small groups and self-drive, in English and
            German.
          </p>
        </div>

        <div>
          <p className="kicker text-gold">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-cream/80 hover:text-gold">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/enquire" className="text-cream/80 hover:text-gold">
                Enquire
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="kicker text-gold">Visit & contact</p>
          <address className="mt-4 space-y-2 text-sm not-italic leading-relaxed text-cream/80">
            <p>
              {site.address.line1}
              <br />
              {site.address.line2}
              <br />
              {site.address.region}
            </p>
            <p>
              <a className="hover:text-gold" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
            <p>
              <a className="hover:text-gold" href={site.phoneHref}>
                {site.phone}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 py-6 text-center sm:px-8">
          <p className="kicker text-[0.6rem] text-gold">{site.promise}</p>
          <p className="text-xs text-cream/45">
            © {new Date().getFullYear()} Kimba African Journeys. All rights
            reserved.
          </p>
          <p className="text-[0.65rem] text-cream/35">
            Website designed and created by{" "}
            <a
              className="underline decoration-cream/20 underline-offset-2 hover:text-cream/55"
              href="https://getmeonline.co.za"
              rel="noopener noreferrer"
              target="_blank"
            >
              getmeonline.co.za
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
