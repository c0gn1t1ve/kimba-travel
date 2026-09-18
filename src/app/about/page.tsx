import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";
import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Kimba African Journeys is a boutique travel studio in McGregor, Western Cape — curated Southern Africa, guided or self-drive, in English and German.",
};

const concepts = [
  {
    title: "Africa",
    kicker: "The outline",
    copy: "The continent is home, not a backdrop. The outline in our mark stands for beauty and diversity — Cape fynbos to Zambezi spray — and for the simple fact that we work from here.",
  },
  {
    title: "The journey",
    kicker: "The winding road",
    copy: "The road through the map is the itinerary: rarely straight, always considered. We write routes that leave room for the unplanned hour, then stay with you while you travel them.",
  },
  {
    title: "Authentic experiences",
    kicker: "The acacia",
    copy: "The tree is nature, wildlife, and the encounters that cannot be scheduled. We keep groups small so a sighting can last, and we do not dress a place up as something it is not.",
  },
  {
    title: "Memorable moments",
    kicker: "The sun",
    copy: "The gold disk is the light people remember: dune dawn, a Karoo evening, spray catching the last hour at the falls. That is the work — not more stops, better hours.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        image="/images/acacia-sunset.jpg"
        imageAlt="A lone acacia on grassland at sunset with mountains beyond"
        eyebrow="Our story"
        title="A studio in McGregor, a map of the south"
        lede="Kimba African Journeys plans boutique travel through Southern Africa — guided small groups and self-drive — in English and German."
      />

      <section className="bg-cream px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="kicker text-gold">From the village</p>
            <h2 className="mt-3 font-serif text-4xl text-chocolate">
              We are not a call centre with a zebra
            </h2>
            <span className="gold-rule mt-5 block" />
            <p className="mt-6 text-base leading-relaxed text-brown/80">
              The studio sits on Voortrekker Road Ext in McGregor, in the
              Western Cape. That is not a romantic flourish. It is why the Cape
              and Karoo itineraries feel like they were written by people who
              drive those passes, and why a Namibia self-drive brief still
              sounds like a conversation rather than a PDF.
            </p>
            <p className="mt-4 text-base leading-relaxed text-brown/80">
              We look after travellers who prefer places the locals already
              know: small groups, a self-drive when the country asks for it, and
              the patience to do either language properly. This site is a
              relaunch of that work — the same company, the same telephone,
              no holding pattern.
            </p>
          </div>
          <div className="relative min-h-[380px] overflow-hidden">
            <Image
              src="/images/cape-town.jpg"
              alt="Cape Town beneath Table Mountain and Lion's Head, seen from the Atlantic"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-cream-deep/60 px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <BrandMark tone="brown" className="h-20 w-16" />
            <p className="kicker mt-8 text-gold">The mark</p>
            <h2 className="mt-3 max-w-xl font-serif text-4xl text-chocolate">
              Four ideas, one sign
            </h2>
            <span className="gold-rule mt-5" />
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {concepts.map((item) => (
              <article
                key={item.title}
                className="border border-border bg-cream px-7 py-9"
              >
                <p className="kicker text-gold">{item.kicker}</p>
                <h3 className="mt-3 font-serif text-3xl text-chocolate">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-brown/75">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-5 py-16 sm:px-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <p className="kicker text-gold">Visit</p>
          <h2 className="mt-3 font-serif text-4xl text-cream">McGregor, Western Cape</h2>
          <p className="mt-5 text-sm leading-relaxed text-cream/70">
            {site.address.line1}, {site.address.line2}
            <br />
            {site.address.region}
          </p>
          <p className="mt-3 text-sm text-cream/70">
            <a className="hover:text-gold" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            {" · "}
            <a className="hover:text-gold" href={site.phoneHref}>
              {site.phone}
            </a>
          </p>
          <Link href="/enquire" className="btn-gold mt-8">
            Write to us
          </Link>
        </div>
      </section>
    </>
  );
}
