export type TravelStyle = "Guided small group" | "Self-drive";

export type Journey = {
  slug: string;
  title: string;
  region: string;
  style: TravelStyle;
  days: number;
  season: string;
  group: string;
  languages: string;
  image: string;
  imageAlt: string;
  summary: string;
  story: string;
  highlights: string[];
  daysOutline: { day: string; title: string; detail: string }[];
};

export const journeys: Journey[] = [
  {
    slug: "cape-karoo-discovery",
    title: "Cape & Karoo Discovery",
    region: "Karoo & Cape",
    style: "Guided small group",
    days: 8,
    season: "September–April",
    group: "6–10 guests",
    languages: "English or German",
    image: "/images/cape-canyon.jpg",
    imageAlt:
      "Green mountain valleys and a winding river in the South African highlands",
    summary:
      "Winelands, mountain passes, and the quiet villages of the Klein Karoo — beginning close to home in McGregor.",
    story:
      "This is the journey we built first: the Western Cape as locals actually travel it. We start among the vines and fynbos of the Cape, then follow the mountain routes inland to McGregor and the Klein Karoo, where nights are dark, food is honest, and the landscape opens into that long, pale light the Karoo is known for.",
    highlights: [
      "Cape Town arrival with Table Mountain and the Atlantic edge",
      "A night in the Winelands with a private tasting, not a coach stop",
      "McGregor and the Robertson Valley — our home ground",
      "Karoo back roads, farm tables, and a stargazing evening",
    ],
    daysOutline: [
      {
        day: "Days 1–2",
        title: "Cape Town & the Peninsula",
        detail:
          "Settle in after arrival. A guided day along the Atlantic seaboard and the Cape Peninsula, paced for looking rather than ticking boxes.",
      },
      {
        day: "Days 3–4",
        title: "Winelands to McGregor",
        detail:
          "Cross the mountains to the Robertson Valley. Two nights near McGregor, with time on foot in the village and a long lunch on a working farm.",
      },
      {
        day: "Days 5–6",
        title: "Klein Karoo",
        detail:
          "East into wider country: passes, ochre hills, and a night where the stars are the main event.",
      },
      {
        day: "Days 7–8",
        title: "Return by a different road",
        detail:
          "A slower way back toward Cape Town, with a final evening in the city and a departure-day transfer.",
      },
    ],
  },
  {
    slug: "namibia-dunes-coast",
    title: "Namibia Dunes & Coast",
    region: "Namibia",
    style: "Self-drive",
    days: 10,
    season: "May–October",
    group: "Your own vehicle, 2–4 travellers",
    languages: "Briefings in English or German",
    image: "/images/namibia-dunes.jpg",
    imageAlt: "Golden Namib sand dunes under a pale desert sky",
    summary:
      "A mapped self-drive through Sossusvlei, the desert coast, and the long silence between them — with us on the other end of the phone.",
    story:
      "Namibia rewards people who like to hold the wheel. We design the route, book the lodges, and hand you a brief that is more than a pin-drop: fuel, gravel, gate times, and the hours of light that make Deadvlei worth the early start. You drive. We stay reachable.",
    highlights: [
      "Sunrise on the Sossusvlei dunes and a morning in Deadvlei",
      "Sesriem and the desert escarpment, not a rush-through",
      "Swakopmund and the cold Atlantic edge of the Namib",
      "Daily check-ins and a paper-and-phone support line from McGregor",
    ],
    daysOutline: [
      {
        day: "Days 1–2",
        title: "Windhoek to the desert edge",
        detail:
          "Collect your vehicle, a thorough briefing, and the first easy kilometres toward the Namib.",
      },
      {
        day: "Days 3–5",
        title: "Sossusvlei & Deadvlei",
        detail:
          "Two full days in the dune sea: a pre-dawn start, the clay pan, and an afternoon that is allowed to be empty.",
      },
      {
        day: "Days 6–8",
        title: "Coastal Namibia",
        detail:
          "West to the Atlantic. Swakopmund as a base for the lagoon, the desert belt, and a day on the coast.",
      },
      {
        day: "Days 9–10",
        title: "Inland return",
        detail:
          "A different road back to Windhoek, with a buffer night before your flight.",
      },
    ],
  },
  {
    slug: "zambezi-and-the-falls",
    title: "Zambezi & the Falls",
    region: "Zambezi / Victoria Falls",
    style: "Guided small group",
    days: 6,
    season: "April–June & August–November",
    group: "6–12 guests",
    languages: "English or German",
    image: "/images/zambezi-falls.jpg",
    imageAlt:
      "Victoria Falls plunging into a basalt gorge at sunset, with spray rising from the river",
    summary:
      "Six days on the Zambezi — the spray, the gorge, and the river above the drop — without the theme-park timetable.",
    story:
      "Victoria Falls is a wonder. It is also easy to see badly. We keep the group small, walk the gorge in the better light, and give the river itself equal weight: a dawn drift above the falls, a guide who knows the paths when the spray is high, and evenings that are not built around a hard-sell sunset cruise.",
    highlights: [
      "Guided walks on both the spray paths and the quieter viewpoints",
      "A morning on the Zambezi above the falls",
      "Time in the gorge country, not only at the lip",
      "Optional helicopter or bridge crossing — never bundled as default",
    ],
    daysOutline: [
      {
        day: "Days 1–2",
        title: "Arrive and walk the falls",
        detail:
          "Transfer in, a first look at the gorge, and a full guided morning on the paths when the light is low.",
      },
      {
        day: "Days 3–4",
        title: "The river above",
        detail:
          "A boat morning on the Zambezi, then a slower afternoon — village, market, or simply the lodge verandah.",
      },
      {
        day: "Days 5–6",
        title: "Gorge and departure",
        detail:
          "One more viewpoint or an optional flight over the falls, then a measured last night and airport transfer.",
      },
    ],
  },
  {
    slug: "botswana-wildlife-waters",
    title: "Botswana Wildlife Waters",
    region: "Botswana & beyond",
    style: "Guided small group",
    days: 9,
    season: "June–October",
    group: "6–8 guests",
    languages: "English or German",
    image: "/images/botswana-elephants.jpg",
    imageAlt:
      "Two African elephants on open grassland at sunset with a low sun",
    summary:
      "Okavango channels, Chobe riverfront, and the kind of wildlife days that only work when the vehicle is not full.",
    story:
      "Botswana is where we send people who want animals more than attractions. The group stays small enough that a sighting can last. We travel with guides we have used for years, sleep in camps that still feel like camps, and leave room in the day for the thing nobody scheduled: a herd that decides the road is theirs.",
    highlights: [
      "Mokoro or boat time in the Okavango system",
      "Game drives kept to a handful of guests, not a convoy",
      "Chobe riverfront elephants and a late-day boat",
      "A night that is actually quiet — no generator soundtrack",
    ],
    daysOutline: [
      {
        day: "Days 1–4",
        title: "Okavango",
        detail:
          "Fly or drive into the delta. Water and land days, depending on the water and the season.",
      },
      {
        day: "Days 5–7",
        title: "Chobe",
        detail:
          "North to the riverfront: elephants, buffalo, and a sunset on the water.",
      },
      {
        day: "Days 8–9",
        title: "Out via Kasane or Victoria Falls",
        detail:
          "A buffer morning and a clean departure — or a privately arranged add-on to the Zambezi.",
      },
    ],
  },
  {
    slug: "southern-crossing",
    title: "The Southern Crossing",
    region: "Cape to the Zambezi",
    style: "Guided small group",
    days: 14,
    season: "May–October",
    group: "8–12 guests",
    languages: "English or German",
    image: "/images/guided-safari.jpg",
    imageAlt:
      "A safari vehicle with a raised roof moving through tall savanna grass at sunset",
    summary:
      "Two weeks from the Western Cape through Namibia and Botswana to the Zambezi — one itinerary, one small group, no airport hopscotch.",
    story:
      "The Crossing is for travellers who want the shape of the subcontinent, not a weekend of it. We leave the Cape, climb into the drier interior, cross the Namib, and finish on the Zambezi. It is the journey we recommend when someone says they have two weeks and want to understand why Southern Africa is not one place.",
    highlights: [
      "Cape departure with a proper first two days, not a fly-through",
      "Namib dunes and a desert night before the northward turn",
      "Botswana wildlife as the middle movement, not a side trip",
      "Victoria Falls as an ending, with time to stand still",
    ],
    daysOutline: [
      {
        day: "Days 1–4",
        title: "Cape & the dry west",
        detail:
          "Cape Town, the winelands or Karoo edge, then the long road toward Namibia.",
      },
      {
        day: "Days 5–8",
        title: "Namib",
        detail:
          "Sossusvlei, the desert belt, and the turn north.",
      },
      {
        day: "Days 9–12",
        title: "Botswana",
        detail:
          "Wildlife days in the north — water and land, depending on the year.",
      },
      {
        day: "Days 13–14",
        title: "The Zambezi",
        detail:
          "Victoria Falls and a last night that is allowed to feel like an arrival.",
      },
    ],
  },
];

export function getJourney(slug: string) {
  return journeys.find((journey) => journey.slug === slug);
}
