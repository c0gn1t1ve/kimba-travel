import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  invert = false,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: string;
  invert?: boolean;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <p className="kicker text-gold">{eyebrow}</p>
      <h2
        className={cn(
          "max-w-xl font-serif text-3xl leading-tight sm:text-4xl md:text-5xl",
          invert ? "text-cream" : "text-chocolate"
        )}
      >
        {title}
      </h2>
      <span className="gold-rule mt-1" />
    </div>
  );
}
