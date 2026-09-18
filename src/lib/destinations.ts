export type Destination = {
  slug: string;
  name: string;
  kicker: string;
  image: string;
  imageAlt: string;
  summary: string;
  body: string;
  notes: string[];
};

export const destinations: Destination[] = [
  {
    slug: "karoo-and-cape",
    name: "Karoo & Cape",
    kicker: "Western Cape",
    image: "/images/cape-town.jpg",
    imageAlt:
      "Aerial view of Cape Town with Table Mountain, Lion's Head, and the Atlantic shoreline",
    summary:
      "Fynbos, winelands, and the inland quiet of the Klein Karoo — including the village we work from.",
    body: "The Cape is more than a city arrival. We use Table Mountain and the peninsula as an opening chapter, then take people over the passes toward McGregor, Robertson, and the Karoo, where the light lengthens and the itinerary can finally slow down. This is home ground: we know which farms still set a table, which roads are worth the extra hour, and when the south-easter will spoil a viewpoint.",
    notes: [
      "Cape Town, the Peninsula, and the Atlantic edge",
      "Winelands tastings that are booked as conversations, not queues",
      "McGregor and the Klein Karoo as a stay, not a drive-through",
    ],
  },
  {
    slug: "namibia",
    name: "Namibia",
    kicker: "The Namib",
    image: "/images/namibia-deadvlei.jpg",
    imageAlt:
      "A dead camel-thorn tree on the white clay of Deadvlei with an orange Namib dune behind it",
    summary:
      "Dune seas, clay pans, and the Atlantic desert coast — best travelled with time and a good brief.",
    body: "Namibia is the country we recommend to people who want space. Sossusvlei and Deadvlei need an early start and an unhurried morning. The coast is cold, bright, and nothing like a tropical brochure. We plan both guided and self-drive versions, with the same rule: do not rush the empty bits. The empty bits are the point.",
    notes: [
      "Sossusvlei, Deadvlei, and the Sesriem escarpment",
      "Swakopmund and the Skeleton Coast edge",
      "Self-drive routes with lodge bookings and a support line",
    ],
  },
  {
    slug: "zambezi",
    name: "Zambezi / Victoria Falls",
    kicker: "Mosi-oa-Tunya",
    image: "/images/zambezi-aerial.jpg",
    imageAlt:
      "Aerial view of Victoria Falls on the Zambezi, with the gorge, spray, and the Victoria Falls Bridge",
    summary:
      "The river, the gorge, and the falls — walked and seen in the hours when the spray and the light agree.",
    body: "We do not sell Victoria Falls as a two-hour stop between airports. The walkways change with the water; the river above the drop is a different place from the gorge below it. Our Zambezi days are built around those differences, with optional flights or bridge crossings treated as extras, never as the spine of the trip.",
    notes: [
      "Guided paths on the Zambian and Zimbabwean sides, as water allows",
      "Boat time on the Zambezi above the falls",
      "Easy pairing with Botswana or a Cape arrival",
    ],
  },
  {
    slug: "botswana",
    name: "Botswana & beyond",
    kicker: "The north",
    image: "/images/botswana-herd.jpg",
    imageAlt:
      "A herd of African elephants crossing a sandy riverbed in the bush",
    summary:
      "Okavango water, Chobe riverfront, and the wildlife days that only work in a small vehicle.",
    body: "North of the desert the country changes again: channels, floodplains, and the elephant country of the Chobe. We keep groups small enough that a sighting can run long, and we work with camps that still feel like they belong to the bush. From here the Zambezi is a natural last chapter, not a separate holiday.",
    notes: [
      "Okavango by mokoro, boat, or light-aircraft hop",
      "Chobe riverfront game and a late boat",
      "Private add-ons into Zambia or Zimbabwe",
    ],
  },
];
