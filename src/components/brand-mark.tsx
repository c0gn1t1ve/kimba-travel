import { cn } from "@/lib/utils";

type MarkTone = "brown" | "gold" | "cream" | "white";

const tones: Record<
  MarkTone,
  { land: string; road: string; tree: string; sun: string }
> = {
  brown: {
    land: "#3C2415",
    road: "#3C2415",
    tree: "#1C140E",
    sun: "#C4A47C",
  },
  gold: {
    land: "#C4A47C",
    road: "#C4A47C",
    tree: "#E8D5B5",
    sun: "#E8D5B5",
  },
  cream: {
    land: "#F5F3ED",
    road: "#F5F3ED",
    tree: "#E8D5B5",
    sun: "#C4A47C",
  },
  white: {
    land: "#FFFFFF",
    road: "#FFFFFF",
    tree: "#F5F3ED",
    sun: "#C4A47C",
  },
};

export function BrandMark({
  className,
  tone = "brown",
  title = "Kimba African Journeys mark",
}: {
  className?: string;
  tone?: MarkTone;
  title?: string;
}) {
  const c = tones[tone];

  return (
    <svg
      viewBox="0 0 200 240"
      className={cn("block", className)}
      role="img"
      aria-label={title}
    >
      <title>{title}</title>
      {/* Sun peeks from behind the Horn of Africa */}
      <circle cx="168" cy="68" r="20" fill={c.sun} />

      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        {/* Stylised Africa — horn, west bulge, and Cape */}
        <path
          d="M92 22
             C108 16 124 18 136 26
             C140 34 140 46 136 54
             C146 60 160 68 174 78
             C180 84 176 94 164 98
             C152 106 148 120 146 138
             C144 156 138 176 128 196
             C120 210 110 222 98 228
             C88 232 80 226 78 214
             C74 196 70 176 68 158
             C66 140 62 126 50 116
             C36 108 22 100 16 88
             C10 76 14 64 24 56
             C36 46 52 38 64 30
             C76 24 84 22 92 22 Z"
          stroke={c.land}
          strokeWidth="5"
        />

        {/* Winding road — the journey from the Cape upward */}
        <path
          d="M94 210
             C84 188 114 172 96 150
             C78 128 116 114 98 92
             C86 76 110 64 104 50"
          stroke={c.road}
          strokeWidth="6"
        />

        {/* Acacia — authentic encounter, right of the upper curve */}
        <g stroke={c.tree} fill={c.tree}>
          <path d="M126 120 C126 106 125 96 127 86" strokeWidth="2.4" fill="none" />
          <path
            d="M106 88
               C112 76 119 72 127 72
               C135 72 142 76 148 88
               C140 84 133 82 127 83
               C121 82 114 84 106 88 Z"
            strokeWidth="1.4"
          />
          <path
            d="M112 82 C116 75 122 72 127 72 C132 72 138 75 142 82"
            strokeWidth="1.6"
            fill="none"
          />
        </g>
      </g>
    </svg>
  );
}

export function Wordmark({
  className,
  align = "center",
  invert = false,
  showTagline = true,
}: {
  className?: string;
  align?: "center" | "left";
  invert?: boolean;
  showTagline?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-1",
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      )}
    >
      <p
        className={cn(
          "kicker",
          invert ? "text-gold" : "text-gold"
        )}
      >
        Kimba
      </p>
      <p
        className={cn(
          "font-serif text-4xl leading-none tracking-wide sm:text-5xl",
          invert ? "text-cream" : "text-brown"
        )}
      >
        African
      </p>
      <div
        className={cn(
          "mt-1 flex items-center gap-3",
          invert ? "text-gold" : "text-brown"
        )}
      >
        <span className="gold-rule" />
        <p className="font-serif text-lg tracking-[0.28em] uppercase sm:text-xl">
          Journeys
        </p>
        <span className="gold-rule" />
      </div>
      {showTagline ? (
        <p
          className={cn(
            "kicker mt-3",
            invert ? "text-cream/80" : "text-brown/70"
          )}
        >
          Curated travel. Authentic experiences.
        </p>
      ) : null}
    </div>
  );
}
