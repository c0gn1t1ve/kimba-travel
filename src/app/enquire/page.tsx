import type { Metadata } from "next";
import { EnquireForm } from "@/components/enquire-form";
import { PageHero } from "@/components/page-hero";
import { getJourney } from "@/lib/journeys";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enquire",
  description:
    `Plan a Kimba journey — guided or self-drive through Southern Africa. Write from the form or email ${site.email}.`,
};

export default async function EnquirePage({
  searchParams,
}: PageProps<"/enquire">) {
  const query = await searchParams;
  const journeySlug = typeof query.journey === "string" ? query.journey : "";
  const journey = journeySlug ? getJourney(journeySlug) : undefined;

  return (
    <>
      <PageHero
        compact
        image="/images/zambezi-falls.jpg"
        imageAlt="Victoria Falls in a basalt gorge at sunset"
        eyebrow="Begin here"
        title="Plan your next journey with us"
        lede="Tell us how you like to travel. We reply from McGregor — usually within a working day."
      />

      <section className="bg-cream px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <p className="kicker text-gold">The enquiry</p>
            <h2 className="mt-3 font-serif text-3xl text-chocolate">
              {journey
                ? `About ${journey.title}`
                : "A few facts are enough to start"}
            </h2>
            <span className="gold-rule mt-5 block" />
            <div className="mt-8">
              <EnquireForm
                defaultJourney={journey?.title}
                defaultRegion={journey?.title ?? ""}
              />
            </div>
          </div>

          <aside className="h-fit border border-border bg-white/50 p-7">
            <p className="kicker text-gold">Or write directly</p>
            <address className="mt-5 space-y-4 text-sm not-italic leading-relaxed text-brown/80">
              <p>
                {site.address.line1}
                <br />
                {site.address.line2}
                <br />
                {site.address.region}
              </p>
              <p>
                <a className="text-chocolate underline decoration-gold/50" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
              <p>
                <a className="text-chocolate underline decoration-gold/50" href={site.phoneHref}>
                  {site.phone}
                </a>
              </p>
              <p>English and German. No chatbots, no ticket queue.</p>
            </address>
          </aside>
        </div>
      </section>
    </>
  );
}
