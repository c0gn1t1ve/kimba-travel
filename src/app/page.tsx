import Image from "next/image";
import Link from "next/link";
import { Briefcase, Compass, Trees } from "lucide-react";
import { BrandMark, Wordmark } from "@/components/brand-mark";
import { SectionHeading } from "@/components/section-heading";
import { destinations } from "@/lib/destinations";
import { site } from "@/lib/site";

const promises = [
  {
    title: "Bespoke itineraries",
    copy: "Each route is written for the people on it — pace, wildlife, walking, and the nights that should stay empty.",
    icon: Briefcase,
  },
  {
    title: "Personal service",
    copy: "One team from first email to the last transfer. English or German, on the ground and from McGregor.",
    icon: Compass,
  },
  {
    title: "Extraordinary Africa",
    copy: "The Karoo, the Namib, the Zambezi, and the north — places we send people because we would go again.",
    icon: Trees,
  },
];

const why = [
  { kicker: "EN / DE", title: "Bilingual", copy: "Guiding and planning in English and German." },
  { kicker: "Small", title: "Groups", copy: "Vehicles and tables kept to a handful of guests." },
  { kicker: "Local", title: "Knowledge", copy: "Planned from McGregor, not a distant call centre." },
  { kicker: "Bespoke", title: "Itineraries", copy: "Guided days or a self-drive brief you can trust." },
];

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <Image
          src="/images/hero-rhinos.jpg"
          alt="A white rhinoceros and calf crossing a dusty savanna road in late light"
          fill
          priority
          className="object-cover object-[center_40%]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-black/80" />
        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-black/75 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-4xl flex-col items-center justify-center px-5 pb-16 pt-28 text-center">
          <p className="kicker text-cream/90">{site.eyebrow}</p>
          <Wordmark invert className="mt-8" />
          <p className="kicker mt-6 max-w-lg text-[0.62rem] text-gold">
            {site.promise}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link href="/journeys" className="btn-gold">
              Explore journeys
            </Link>
            <Link href="/enquire" className="btn-ghost-light">
              Plan your journey
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-cream px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Our promise" title="Travel that feels personal" />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {promises.map((item) => (
              <article
                key={item.title}
                className="border border-border bg-white/50 px-7 py-10 text-center"
              >
                <item.icon className="mx-auto size-8 text-brown" strokeWidth={1.25} />
                <h3 className="mt-6 font-serif text-2xl text-chocolate">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brown/75">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="relative min-h-[320px] lg:min-h-[560px]">
          <Image
            src="/images/guided-safari.jpg"
            alt="A safari vehicle with a raised roof moving through tall grass at sunset"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
        <div className="flex items-center bg-cream px-6 py-16 sm:px-12 lg:px-16">
          <div className="max-w-md">
            <p className="kicker text-gold">How we travel</p>
            <h2 className="mt-3 font-serif text-4xl text-chocolate">Guided small groups</h2>
            <span className="gold-rule mt-5 block" />
            <p className="mt-6 text-sm leading-relaxed text-brown/80">
              A handful of guests, a guide who stays with you, and days that
              can change when the light or the animals ask them to. We work in
              English and German, and we keep the vehicle from filling up.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-brown/75">
              <li>— Six to twelve guests, never a coach</li>
              <li>— Private guiding, not a revolving roster</li>
              <li>— Cape, Namibia, Botswana, and the Zambezi</li>
            </ul>
            <Link href="/journeys" className="btn-ghost-dark mt-8">
              View guided journeys
            </Link>
          </div>
        </div>
      </section>

      <section className="grid lg:grid-cols-2">
        <div className="order-2 flex items-center bg-cream px-6 py-16 sm:px-12 lg:order-1 lg:px-16">
          <div className="max-w-md">
            <p className="kicker text-gold">For the adventurous</p>
            <h2 className="mt-3 font-serif text-4xl text-chocolate">Self-drive freedom</h2>
            <span className="gold-rule mt-5 block" />
            <p className="mt-6 text-sm leading-relaxed text-brown/80">
              You hold the wheel. We hold the plan: lodges, distances, fuel,
              gate times, and a number that answers. Namibia is where this
              works best — dunes, gravel, and enough silence to think.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-brown/75">
              <li>— Mapped routes with a paper-and-phone brief</li>
              <li>— Lodges booked before you collect the keys</li>
              <li>— Daily check-ins from McGregor if you want them</li>
            </ul>
            <Link href="/journeys/namibia-dunes-coast" className="btn-ghost-dark mt-8">
              View self-drive ideas
            </Link>
          </div>
        </div>
        <div className="relative order-1 min-h-[320px] lg:order-2 lg:min-h-[560px]">
          <Image
            src="/images/namibia-dunes.jpg"
            alt="Layered golden dunes of the Namib under a pale sky"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>

      <section className="bg-cream px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Where we go"
            title="Southern Africa, region by region"
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {destinations.map((place) => (
              <Link
                key={place.slug}
                href="/destinations"
                className="group relative block min-h-[380px] overflow-hidden"
              >
                <Image
                  src={place.image}
                  alt={place.imageAlt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/20" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="kicker text-[0.6rem] text-gold">{place.kicker}</p>
                  <h3 className="mt-2 font-serif text-2xl text-cream">{place.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="kicker text-gold">Why Kimba</p>
            <h2 className="mt-3 max-w-md font-serif text-4xl text-cream sm:text-5xl">
              Curated for those who prefer the road less signed
            </h2>
            <span className="gold-rule mt-6 block" />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-cream/75">
              Kimba African Journeys is a boutique studio in McGregor, in the
              Western Cape. We plan Southern Africa for travellers who want the
              place, not the package — small groups, self-drive briefs, and the
              kind of personal service that still answers the telephone.
            </p>
            <Link href="/about" className="btn-ghost-light mt-8">
              Our story
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {why.map((item) => (
              <div
                key={item.title}
                className="border border-gold/35 px-5 py-7"
              >
                <p className="kicker text-[0.6rem] text-gold">{item.kicker}</p>
                <h3 className="mt-3 font-serif text-2xl text-cream">{item.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-cream/65">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate min-h-[70vh] overflow-hidden">
        <Image
          src="/images/wildlife-rhino.jpg"
          alt="A rhinoceros standing in dry Southern African grassland"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />
        <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-5 py-24 text-center">
          <BrandMark tone="gold" className="mb-8 h-16 w-14" />
          <p className="kicker text-gold">Begin here</p>
          <h2 className="mt-4 font-serif text-4xl text-cream sm:text-5xl">
            Plan your next journey with us
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/80">
            Tell us how you like to travel — guided or self-drive, English or
            German — and we will write the road from there.
          </p>
          <Link href="/enquire" className="btn-gold mt-8">
            Enquire now
          </Link>
        </div>
      </section>
    </>
  );
}
