import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { journeys } from "@/lib/journeys";

export const metadata: Metadata = {
  title: "Journeys",
  description:
    "Five Southern Africa itineraries — guided small groups and a Namibia self-drive — planned by Kimba African Journeys.",
};

export default function JourneysPage() {
  return (
    <>
      <PageHero
        image="/images/guided-safari.jpg"
        imageAlt="A safari vehicle at sunset in tall savanna grass"
        eyebrow="The road book"
        title="Five journeys, written to be changed"
        lede="Guided small groups and one self-drive. Start with a shape, then we cut it to the people who are actually travelling."
      />

      <section className="bg-cream px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-6xl space-y-8">
          {journeys.map((journey, index) => (
            <article
              key={journey.slug}
              className="grid overflow-hidden border border-border bg-white/40 lg:grid-cols-2"
            >
              <div
                className={`relative min-h-[280px] ${index % 2 === 1 ? "lg:order-2" : ""}`}
              >
                <Image
                  src={journey.image}
                  alt={journey.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              </div>
              <div className="flex flex-col justify-center px-6 py-10 sm:px-10">
                <p className="kicker text-gold">
                  {journey.style} · {journey.days} days
                </p>
                <h2 className="mt-3 font-serif text-3xl text-chocolate sm:text-4xl">
                  {journey.title}
                </h2>
                <p className="mt-2 text-sm text-brown/60">{journey.region}</p>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-brown/80">
                  {journey.summary}
                </p>
                <p className="mt-4 text-xs tracking-wide text-brown/55">
                  {journey.season} · {journey.group} · {journey.languages}
                </p>
                <Link
                  href={`/journeys/${journey.slug}`}
                  className="btn-ghost-dark mt-8 w-fit"
                >
                  View itinerary
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
