import Link from "next/link";
import { BrandMark } from "@/components/brand-mark";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center bg-charcoal px-5 text-center">
      <BrandMark tone="gold" className="h-16 w-14" />
      <p className="kicker mt-8 text-gold">Off the mapped road</p>
      <h1 className="mt-4 font-serif text-4xl text-cream">This page has wandered</h1>
      <p className="mt-4 max-w-md text-sm text-cream/70">
        The path is not on our itinerary. Return home, or write to us and we
        will point you.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn-gold">
          Back to home
        </Link>
        <Link href="/enquire" className="btn-ghost-light">
          Enquire
        </Link>
      </div>
    </section>
  );
}
