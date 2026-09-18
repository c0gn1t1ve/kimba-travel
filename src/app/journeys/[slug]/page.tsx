import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { getJourney, journeys } from "@/lib/journeys";

export function generateStaticParams() {
  return journeys.map((journey) => ({ slug: journey.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/journeys/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) return {};
  return {
    title: journey.title,
    description: journey.summary,
  };
}

export default async function JourneyPage({
  params,
}: PageProps<"/journeys/[slug]">) {
  const { slug } = await params;
  const journey = getJourney(slug);
  if (!journey) notFound();

  return (
    <>
      <PageHero
        image={journey.image}
        imageAlt={journey.imageAlt}
        eyebrow={`${journey.style} · ${journey.days} days`}
        title={journey.title}
        lede={journey.summary}
      />

      <section className="bg-cream px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="kicker text-gold">{journey.region}</p>
            <h2 className="mt-3 font-serif text-3xl text-chocolate sm:text-4xl">
              How this journey feels
            </h2>
            <span className="gold-rule mt-5 block" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-brown/80">
              {journey.story}
            </p>
            <ul className="mt-8 space-y-3">
              {journey.highlights.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-brown/75">
                  — {item}
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit border border-border bg-white/50 p-6">
            <p className="kicker text-gold">At a glance</p>
            <dl className="mt-5 space-y-4 text-sm">
              <Row label="Length" value={`${journey.days} days`} />
              <Row label="Style" value={journey.style} />
              <Row label="Season" value={journey.season} />
              <Row label="Group" value={journey.group} />
              <Row label="Languages" value={journey.languages} />
            </dl>
            <Link
              href={`/enquire?journey=${journey.slug}`}
              className="btn-gold mt-8 w-full"
            >
              Enquire about this journey
            </Link>
          </aside>
        </div>
      </section>

      <section className="bg-cream-deep/50 px-5 py-16 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="kicker text-gold">A possible shape</p>
          <h2 className="mt-3 font-serif text-3xl text-chocolate">Day by day</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {journey.daysOutline.map((block) => (
              <article key={block.day} className="border border-border bg-cream p-6">
                <p className="kicker text-[0.6rem] text-gold">{block.day}</p>
                <h3 className="mt-3 font-serif text-2xl text-chocolate">
                  {block.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brown/75">
                  {block.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/acacia-sunset.jpg"
            alt="An acacia tree on open grassland at sunset"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/75" />
        </div>
        <div className="relative mx-auto max-w-3xl px-5 py-20 text-center">
          <p className="kicker text-gold">Make it yours</p>
          <h2 className="mt-4 font-serif text-4xl text-cream">
            These days are a draft
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/75">
            Tell us who is travelling and we will cut or lengthen the road.
          </p>
          <Link href={`/enquire?journey=${journey.slug}`} className="btn-gold mt-8">
            Plan this journey
          </Link>
        </div>
      </section>
    </>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border/70 pb-3">
      <dt className="kicker text-[0.58rem] text-brown/50">{label}</dt>
      <dd className="text-right text-chocolate">{value}</dd>
    </div>
  );
}
