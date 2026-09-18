import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { destinations } from "@/lib/destinations";

export const metadata: Metadata = {
  title: "Destinations",
  description:
    "Karoo & Cape, Namibia, the Zambezi and Victoria Falls, Botswana and beyond — Southern Africa as Kimba travels it.",
};

export default function DestinationsPage() {
  return (
    <>
      <PageHero
        image="/images/cape-canyon.jpg"
        imageAlt="A green river canyon and conical peak in the South African highlands"
        eyebrow="The map"
        title="Southern Africa, region by region"
        lede="Four chapters we return to. The itinerary is always a mix; the geography stays honest."
      />

      <section className="bg-cream px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-20">
          {destinations.map((place, index) => (
            <article
              key={place.slug}
              id={place.slug}
              className="grid items-center gap-10 lg:grid-cols-2"
            >
              <div
                className={`relative min-h-[340px] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={place.image}
                  alt={place.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <p className="kicker text-gold">{place.kicker}</p>
                <h2 className="mt-3 font-serif text-4xl text-chocolate">
                  {place.name}
                </h2>
                <span className="gold-rule mt-5 block" />
                <p className="mt-6 text-base leading-relaxed text-brown/80">
                  {place.body}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-brown/70">
                  {place.notes.map((note) => (
                    <li key={note}>— {note}</li>
                  ))}
                </ul>
                <Link href="/enquire" className="btn-ghost-dark mt-8">
                  Ask about this region
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
