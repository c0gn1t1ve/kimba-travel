import Image from "next/image";
import { cn } from "@/lib/utils";

export function PageHero({
  image,
  imageAlt,
  eyebrow,
  title,
  lede,
  compact = false,
}: {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  lede?: string;
  compact?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative isolate flex items-end overflow-hidden",
        compact ? "min-h-[58vh]" : "min-h-[72vh]"
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/75" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 sm:px-8 sm:pb-20">
        <p className="kicker text-gold">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl font-serif text-4xl text-cream sm:text-5xl md:text-6xl">
          {title}
        </h1>
        {lede ? (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg">
            {lede}
          </p>
        ) : null}
      </div>
    </section>
  );
}
