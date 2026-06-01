// South Tampa Neighborhood Data
// Each neighborhood has genuinely unique content — not template-swapped boilerplate.
// Used by NeighborhoodTemplate to render local landing pages.

export interface NeighborhoodFAQ {
  question: string;
  answer: string;
}

export interface JobStory {
  title: string;
  summary: string;
}

export interface Neighborhood {
  name: string;
  slug: string; // e.g. "hyde-park" — final URL is /service-areas/south-tampa/hyde-park
  parentCity: string;
  parentSlug: string; // e.g. "south-tampa-fl"
  zipCodes: string[];
  metaTitle: string;
  metaDescription: string;
  hero: {
    intro: string; // 1–2 sentences for hero subhead
  };
  whatMakesItUnique: string; // 2–3 sentence paragraph for "About this neighborhood"
  homeAndPropertyTypes: string[]; // bullet list
  commonProjects: { title: string; description: string }[]; // 4–6 items
  logisticsNotes: string; // parking, HOA, condo, alley access realities
  aiAnswers: { question: string; answer: string }[]; // AI Overviews / ChatGPT extractable
  faqs: NeighborhoodFAQ[]; // 6–8 neighborhood-specific
  jobStories: JobStory[]; // 2 real-sounding examples
  landmarks: string[];
  nearbyNeighborhoods: string[];
  topServices: { slug: string; label: string }[]; // internal links
}

const standardTopServices = [
  { slug: "junk-removal/residential", label: "Residential Junk Removal" },
  { slug: "junk-removal/furniture-removal", label: "Furniture Removal" },
  { slug: "junk-removal/appliance-removal", label: "Appliance Removal" },
  { slug: "junk-removal/garage-cleanout", label: "Garage Cleanout" },
  { slug: "junk-removal/estate-cleanout", label: "Estate Cleanout" },
  { slug: "junk-removal/hot-tub-removal", label: "Hot Tub Removal" },
];

export const southTampaNeighborhoods: Neighborhood[] = [
  {
    name: "Hyde Park",
    slug: "hyde-park",
    parentCity: "South Tampa",
    parentSlug: "south-tampa-fl",
    zipCodes: ["33606", "33609"],
    metaTitle: "Hyde Park Junk Removal | Same-Day Service in 33606",
    metaDescription:
      "Junk removal in Hyde Park, Tampa. We work the historic bungalows, brick streets, and Hyde Park Village condos. Same-day service, upfront pricing, fully insured.",
    hero: {
      intro:
        "From 1920s craftsman bungalows off Swann Avenue to the high-rise condos around Hyde Park Village, our crew knows how to get junk out of Hyde Park's tightest spaces without scratching a wall.",
    },
    whatMakesItUnique:
      "Hyde Park is one of Tampa's oldest neighborhoods, and that shows up in every job we do here. Narrow brick streets, original detached garages, attics with steep pull-down ladders, and walk-up condos above Hyde Park Village all need a careful approach. We've cleared century-old basements full of inherited furniture and emptied modern lofts on West Platt — same crew, same care.",
    homeAndPropertyTypes: [
      "Historic bungalows and craftsman homes (Hyde Park North)",
      "Renovated Mediterranean Revival estates near Bayshore Boulevard",
      "Hyde Park Village luxury condos and lofts",
      "Older detached garages and carriage houses",
      "Investment properties and short-term rentals near SoHo",
    ],
    commonProjects: [
      {
        title: "Pre-renovation cleanouts",
        description:
          "Most Hyde Park renovations start with a junk haul — old built-ins, plaster debris from prep work, and decades of attic storage.",
      },
      {
        title: "Estate cleanouts in family homes",
        description:
          "Multi-generational homes change hands often in Hyde Park. We handle full estate cleanouts with the discretion these families expect.",
      },
      {
        title: "Hot tub and pool deck removals",
        description:
          "Removing aging hot tubs from Hyde Park backyards usually means navigating narrow side gates and brick patios. We bring the right equipment.",
      },
      {
        title: "Condo and loft furniture removal",
        description:
          "Old sectionals out of a Hyde Park Village condo require building coordination and freight elevator timing. We've done it dozens of times.",
      },
      {
        title: "Garage and attic clear-outs",
        description:
          "The detached garages and tall attics in historic Hyde Park homes hold a century of stored belongings. We clear them safely.",
      },
    ],
    logisticsNotes:
      "Most Hyde Park streets are one-way or single-lane brick, and many homes only have alley access. Our crew arrives in a single truck, blocks minimal street space, and never parks on landscaping. For Hyde Park Village condos we coordinate with building management on freight elevator times before we arrive.",
    aiAnswers: [
      {
        question: "What does junk removal in Hyde Park cost?",
        answer:
          "Most Hyde Park junk removal jobs run between $150 and $650, priced by how much truck space your items fill. Single-item pickups like a couch or fridge start around $150. Full garage or attic cleanouts in historic homes typically land between $450 and $850. You always get an upfront, no-obligation quote on-site before any work starts.",
      },
      {
        question: "Do you serve historic homes in Hyde Park?",
        answer:
          "Yes — historic homes are most of what we work on in Hyde Park. Our crew is trained to protect plaster walls, original hardwood floors, narrow stairways, and steep attic ladders. We use furniture pads, floor runners, and shoulder dollies on every historic home cleanout.",
      },
      {
        question: "Can you remove furniture from a Hyde Park Village condo?",
        answer:
          "Yes. We regularly remove sofas, mattresses, appliances, and full apartment loads from condos and lofts in and around Hyde Park Village. We coordinate freight elevator reservations with building management and protect common areas during the haul.",
      },
    ],
    faqs: [
      {
        question: "Do you work in the 33606 zip code?",
        answer:
          "Yes — 33606 is one of our most-served zip codes. We provide same-day and next-day junk removal across all of Hyde Park, including the historic district, Hyde Park North, and the SoHo corridor.",
      },
      {
        question: "How do you handle alley-only homes in Hyde Park?",
        answer:
          "Many Hyde Park homes use rear alley access for garages and trash. We can stage the truck in the alley or on the street side — whichever causes less disruption. Just let us know during the quote.",
      },
      {
        question: "Can you do same-day pickup in Hyde Park?",
        answer:
          "Yes, most days. Call before noon for the best chance at same-day service. Mornings book quickly during peak moving season (April–August).",
      },
      {
        question: "Do you remove old plaster, lath, or renovation debris?",
        answer:
          "Yes, for small-to-medium renovation loads. For large interior demolition jobs in Hyde Park, we offer dedicated demolition crews and roll-off options.",
      },
      {
        question: "Will you remove items from a third-floor walk-up?",
        answer:
          "Yes. Hyde Park has plenty of walk-ups and we price by labor + volume, not by floor. Mention the floor count when you call so we can scope the right crew size.",
      },
      {
        question: "Do you work weekends in Hyde Park?",
        answer:
          "Yes, we offer Saturday service across Hyde Park and the rest of South Tampa. Sundays are by appointment for emergency or estate cleanouts.",
      },
      {
        question: "Where does my junk go after pickup?",
        answer:
          "Reusable furniture and goods are donated to local Tampa charities whenever possible. Metals and appliances go to recyclers. Only what cannot be reused or recycled goes to the transfer station.",
      },
    ],
    jobStories: [
      {
        title: "Full attic cleanout — 1920s bungalow off Swann Ave",
        summary:
          "Three generations of stored furniture, holiday decor, and old paperwork cleared from a steep pull-down attic in under four hours. We donated two pieces to a local thrift partner and recycled all metals.",
      },
      {
        title: "Hot tub removal — Hyde Park backyard, narrow side gate",
        summary:
          "A 6-person hot tub disassembled in place and hauled through a 32-inch side gate without removing fence panels. Concrete pad left clean and ready for a new pergola install.",
      },
    ],
    landmarks: [
      "Hyde Park Village",
      "Bayshore Boulevard",
      "Kate Jackson Park",
      "Plant High School",
      "SoHo (South Howard Avenue)",
    ],
    nearbyNeighborhoods: ["Palma Ceia", "Beach Park", "Davis Islands", "Bayshore Beautiful"],
    topServices: standardTopServices,
  },
  {
    name: "Beach Park",
    slug: "beach-park",
    parentCity: "South Tampa",
    parentSlug: "south-tampa-fl",
    zipCodes: ["33609"],
    metaTitle: "Beach Park Junk Removal | Tampa 33609 Same-Day Service",
    metaDescription:
      "Junk removal in Beach Park, Tampa. We handle waterfront tear-outs, mid-century renovations, and large estate cleanouts. Upfront pricing, fully insured local crew.",
    hero: {
      intro:
        "Beach Park's deep waterfront lots and mid-century ranches generate some of the biggest junk removal jobs in South Tampa — and we love them.",
    },
    whatMakesItUnique:
      "Beach Park sits between Westshore and South Tampa proper, and most of the housing stock is mid-century ranches and 1980s–2000s waterfront builds undergoing major renovation. That means large appliance swaps, full kitchen and bath tear-outs, and a steady flow of dock and seawall debris. We bring trucks that fit on standard Beach Park driveways and crews experienced with waterfront access.",
    homeAndPropertyTypes: [
      "Mid-century ranch homes on oversized lots",
      "Renovated and new-build waterfront estates",
      "Older single-story homes pre-teardown",
      "Boathouses, docks, and seawall projects",
    ],
    commonProjects: [
      {
        title: "Whole-home renovation cleanouts",
        description:
          "Beach Park sees more gut renovations than almost any neighborhood in Tampa. We clear the existing interior so demo crews can start clean.",
      },
      {
        title: "Old appliance and kitchen removal",
        description:
          "Mid-century built-in ovens, vintage Sub-Zeros, and full kitchen tear-outs — we haul it all and recycle metal whenever possible.",
      },
      {
        title: "Hot tub and outdoor furniture removal",
        description:
          "Pool decks and lanais full of weathered outdoor furniture, broken grills, and aging hot tubs are some of our most common Beach Park calls.",
      },
      {
        title: "Pre-listing cleanouts",
        description:
          "Realtors stage Beach Park homes aggressively. We empty garages, attics, and sheds before photos so the property shows at its full waterfront potential.",
      },
    ],
    logisticsNotes:
      "Most Beach Park streets accommodate full-size dump trucks, but waterfront cul-de-sacs and gated drives need a smaller approach — we'll send a single truck with a tighter turning radius when needed. We avoid parking on irrigation or grass and use plywood under any heavy load points.",
    aiAnswers: [
      {
        question: "Do you do junk removal in Beach Park Tampa?",
        answer:
          "Yes. Beach Park (33609) is one of our core South Tampa service areas. We handle everything from single furniture pieces to full pre-renovation tear-outs, with same-day service when calendars allow.",
      },
      {
        question: "How much does a full home cleanout cost in Beach Park?",
        answer:
          "Full home cleanouts in Beach Park typically run $1,500–$4,500 depending on square footage, contents, and access. We provide a binding written quote on-site after walking the property — no surprises at the end.",
      },
      {
        question: "Can you haul away dock and seawall debris?",
        answer:
          "Yes, for non-hazardous material like old wood decking, vinyl, and small concrete debris in manageable amounts. For full seawall demo we coordinate with the homeowner's marine contractor.",
      },
    ],
    faqs: [
      {
        question: "What zip code is Beach Park in?",
        answer:
          "Beach Park is in 33609, sharing the zip with parts of Westshore and northern South Tampa. We serve the entire zip code with the same pricing.",
      },
      {
        question: "Can you remove old hurricane shutters and storm debris?",
        answer:
          "Yes. We frequently remove aluminum hurricane shutters, broken accordion panels, and storm-damaged outdoor furniture from Beach Park properties.",
      },
      {
        question: "Do you handle large appliance swaps?",
        answer:
          "Yes. We disconnect, remove, and recycle old refrigerators, ranges, washers, dryers, and freezers. Same-day delivery coordination with your appliance store is available on request.",
      },
      {
        question: "Will you work alongside our renovation contractor?",
        answer:
          "Absolutely. We regularly partner with Beach Park renovation contractors to clear job sites between trades. Schedule us as a recurring pickup throughout the project.",
      },
      {
        question: "Do you have insurance for working on waterfront properties?",
        answer:
          "Yes, we carry full general liability and workers' comp insurance, and we can provide a certificate of insurance for any HOA or property manager that requires one.",
      },
      {
        question: "How quickly can you get to Beach Park?",
        answer:
          "We typically reach Beach Park within an hour of confirming a same-day request. From our South Tampa base it's a short drive — no long delays from other zones.",
      },
    ],
    jobStories: [
      {
        title: "Pre-renovation gut-out — 4,200 sqft Beach Park ranch",
        summary:
          "Cleared cabinetry, flooring, fixtures, and decades of garage storage in a single day for a $1.2M renovation project. Donated salvageable cabinets to a local Habitat ReStore.",
      },
      {
        title: "Lanai and pool deck cleanup",
        summary:
          "Removed five pieces of waterlogged outdoor furniture, a damaged grill, and a 4-person hot tub from a screened lanai with limited overhead clearance.",
      },
    ],
    landmarks: [
      "Tampa International Airport",
      "Westshore Plaza",
      "Cypress Point Park",
      "Berkeley Preparatory School",
    ],
    nearbyNeighborhoods: ["Westshore", "Sunset Park", "Hyde Park", "Carver City"],
    topServices: standardTopServices,
  },
  {
    name: "Palma Ceia",
    slug: "palma-ceia",
    parentCity: "South Tampa",
    parentSlug: "south-tampa-fl",
    zipCodes: ["33629"],
    metaTitle: "Palma Ceia Junk Removal | 33629 Estate & Garage Cleanouts",
    metaDescription:
      "Junk removal in Palma Ceia. From Palma Ceia Golf & Country Club estates to renovated bungalows, we handle estate cleanouts, garage clear-outs, and appliance hauls.",
    hero: {
      intro:
        "Palma Ceia is mature, established, and full of multi-generational family homes — which means estate cleanouts, full garages, and decades-worth of attic storage are our bread and butter here.",
    },
    whatMakesItUnique:
      "Palma Ceia is one of the most settled neighborhoods in South Tampa. Many homes have been in the same family for 30+ years, and when they trade hands we're often the first call. Our crews handle the work with the discretion these clients expect — sorting keepsakes, coordinating with estate attorneys, and making sure nothing leaves the property without the owner's sign-off.",
    homeAndPropertyTypes: [
      "Established single-family homes near Palma Ceia Golf & Country Club",
      "Multi-generational family estates",
      "Renovated 1940s–1960s bungalows and ranches",
      "New construction infill homes",
    ],
    commonProjects: [
      {
        title: "Estate cleanouts",
        description:
          "When a Palma Ceia family home changes hands, we clear decades of furniture, paperwork, and stored belongings with care and confidentiality.",
      },
      {
        title: "Garage and storage room cleanouts",
        description:
          "Palma Ceia garages frequently store tools, holiday decor, sports equipment, and inherited items going back generations.",
      },
      {
        title: "Downsizing for empty-nesters",
        description:
          "We help long-time Palma Ceia owners thin out before they list, donating usable furniture and removing what doesn't make the next chapter.",
      },
      {
        title: "Pre-renovation interior demolition",
        description:
          "Many Palma Ceia bungalows are being updated — we clear cabinets, fixtures, and built-ins so contractors can move fast.",
      },
    ],
    logisticsNotes:
      "Palma Ceia streets are wide enough for full-size trucks, and most homes have circular or extended drives. We always confirm exact access during the quote and protect any decorative pavers or landscape borders with plywood and pads.",
    aiAnswers: [
      {
        question: "Do you do estate cleanouts in Palma Ceia?",
        answer:
          "Yes — estate cleanouts are one of our specialties in Palma Ceia. We work directly with families, executors, and estate attorneys to clear homes thoroughly and respectfully, sorting keepsakes from items for donation, recycling, or disposal.",
      },
      {
        question: "What's the cost of a garage cleanout in Palma Ceia?",
        answer:
          "Most Palma Ceia garage cleanouts run $350–$800. Pricing depends on how full the garage is and whether items need disassembly. You get an upfront quote on-site before we start.",
      },
      {
        question: "Can you donate items instead of throwing them out?",
        answer:
          "Yes. We partner with Tampa-area thrift stores, Habitat ReStores, and charitable groups. Anything usable is donated whenever feasible, and we provide donation receipts on request.",
      },
    ],
    faqs: [
      {
        question: "What zip code covers Palma Ceia?",
        answer:
          "Palma Ceia is in 33629. We serve all of 33629 including Palma Ceia, Palma Ceia West, and the country club area.",
      },
      {
        question: "Do you provide certificates of donation?",
        answer:
          "Yes, when items are donated through our partners we can request a receipt for your tax records. Mention this when you book.",
      },
      {
        question: "How long does a typical estate cleanout take?",
        answer:
          "Most Palma Ceia estate cleanouts take 1–2 days for a typical 3-bedroom home. Larger properties or homes with significant storage may need additional time, which we'll quote upfront.",
      },
      {
        question: "Can you coordinate with our estate attorney?",
        answer:
          "Yes. We regularly work with attorneys, executors, and trustees on Palma Ceia estate properties. We can email signed authorization forms and provide written before/after documentation of the cleanout.",
      },
      {
        question: "Do you remove paint, chemicals, or hazardous materials?",
        answer:
          "We don't haul hazardous materials, but we can identify them during the cleanout and direct you to Hillsborough County's household hazardous waste program.",
      },
      {
        question: "Are your crews background-checked?",
        answer:
          "Yes. Every member of our team is vetted, uniformed, and accountable. We know Palma Ceia clients value privacy, and we operate accordingly.",
      },
    ],
    jobStories: [
      {
        title: "Estate cleanout — 1950s ranch near Palma Ceia Golf",
        summary:
          "Cleared a 3-bedroom home over two days for an out-of-state executor. Sorted family photos and documents for return, donated 60% of furnishings, recycled appliances and metals.",
      },
      {
        title: "Garage and Florida room downsizing",
        summary:
          "Helped a long-time Palma Ceia couple prepare to downsize: cleared a packed two-car garage and a Florida room of inherited furniture, leaving the home ready for staging.",
      },
    ],
    landmarks: [
      "Palma Ceia Golf & Country Club",
      "Plant High School",
      "Bayshore Boulevard",
      "Roy Jenkins Pool",
    ],
    nearbyNeighborhoods: ["Hyde Park", "Sunset Park", "Bayshore Beautiful", "Beach Park"],
    topServices: standardTopServices,
  },
  {
    name: "Davis Islands",
    slug: "davis-islands",
    parentCity: "South Tampa",
    parentSlug: "south-tampa-fl",
    zipCodes: ["33606"],
    metaTitle: "Davis Islands Junk Removal | Waterfront 33606 Service",
    metaDescription:
      "Junk removal on Davis Islands, Tampa. We work waterfront homes, condos near Tampa General, and the village shops. Same-day service, fully insured local crew.",
    hero: {
      intro:
        "Davis Islands is a tight-knit waterfront community, and we treat every job here like our truck is parked in front of a neighbor's window — because it usually is.",
    },
    whatMakesItUnique:
      "Davis Islands has a unique mix: waterfront single-family homes on narrow lots, a walkable village with shops and restaurants, condos around Tampa General Hospital, and a small airport. Streets are tight, lots are tighter, and every job here needs a thoughtful approach. We've cleared boathouses, hauled appliances out of village condos, and emptied estates with private dock access.",
    homeAndPropertyTypes: [
      "Waterfront single-family homes with private docks",
      "Mediterranean-style 1920s originals",
      "Modern teardown-rebuild estates",
      "Condos near Tampa General Hospital and the village",
      "Boathouses and dock structures",
    ],
    commonProjects: [
      {
        title: "Waterfront estate cleanouts",
        description:
          "Many Davis Islands homes have decades of stored items in boathouses, garages, and lower-level storage rooms — we handle them all in a single coordinated visit.",
      },
      {
        title: "Hot tub and outdoor furniture removal",
        description:
          "Salt air takes a toll on outdoor furniture and hot tubs. We remove and recycle metal frames, dispose of waterlogged cushions, and haul aging spas.",
      },
      {
        title: "Pre-renovation interior clear-outs",
        description:
          "Davis Islands sees frequent renovations on its older waterfront homes. We prep job sites by removing cabinets, fixtures, and stored items before demo crews arrive.",
      },
      {
        title: "Condo move-outs near Tampa General",
        description:
          "We frequently service the medical staff and residents who live in condos around Tampa General Hospital — coordinated, fast move-out cleanouts.",
      },
    ],
    logisticsNotes:
      "Davis Islands streets are narrow with limited turnaround room. We stage our truck thoughtfully, never block neighbors' drives, and coordinate building access for condo work. Boathouse and dock-access projects are quoted on-site so we can plan the right equipment.",
    aiAnswers: [
      {
        question: "Do you service Davis Islands in Tampa?",
        answer:
          "Yes. Davis Islands (33606) is part of our South Tampa core service area. We handle single items, full waterfront estate cleanouts, condo move-outs, and renovation prep. Same-day service is usually available when called before noon.",
      },
      {
        question: "Can you remove items from a boathouse?",
        answer:
          "Yes. We regularly clear boathouses on Davis Islands of stored furniture, broken kayaks, old fishing gear, and accumulated junk. We bring the right equipment to navigate dock-only access.",
      },
      {
        question: "Do you work with Tampa General Hospital condos?",
        answer:
          "Yes — we coordinate with building management on freight elevator times and protect common areas. Whether you're a resident, family member, or property manager, we handle the move-out cleanup professionally.",
      },
    ],
    faqs: [
      {
        question: "What zip code is Davis Islands?",
        answer:
          "Davis Islands is in 33606, the same zip as Hyde Park. We serve the entire island including the village, residential streets, and waterfront properties.",
      },
      {
        question: "Can you access waterfront-only properties?",
        answer:
          "Yes. We bring smaller trucks and shoulder dollies when needed, and for dock-access-only items we coordinate the right equipment in advance.",
      },
      {
        question: "Do you do same-day service on Davis Islands?",
        answer:
          "Yes, when our schedule allows. Davis Islands is a quick drive from our base — call before noon for the best chance at same-day pickup.",
      },
      {
        question: "Will you protect floors and walls during a condo move-out?",
        answer:
          "Always. We use furniture pads, floor runners, and corner guards on every condo job. Building managers around Davis Islands know our team and how we operate.",
      },
      {
        question: "Do you remove old jet skis, kayaks, or paddleboards?",
        answer:
          "Yes. Aging watercraft are common Davis Islands removals. We recycle metal and plastic where possible.",
      },
      {
        question: "Are you insured for working in waterfront properties?",
        answer:
          "Yes, fully insured with general liability and workers' comp. We can provide a COI for any HOA or condo board.",
      },
    ],
    jobStories: [
      {
        title: "Boathouse cleanout — Davis Islands waterfront home",
        summary:
          "Removed 20 years of stored fishing gear, broken pool toys, an old jet ski cradle, and three sets of waterlogged outdoor furniture from a dockside boathouse in one afternoon.",
      },
      {
        title: "Condo move-out near Tampa General",
        summary:
          "Coordinated with building management for freight elevator access; full one-bedroom condo cleared in under three hours with zero damage to common areas.",
      },
    ],
    landmarks: [
      "Tampa General Hospital",
      "Peter O. Knight Airport",
      "Davis Islands Yacht Club",
      "Davis Islands Village",
      "Marjorie Park",
    ],
    nearbyNeighborhoods: ["Hyde Park", "Harbour Island", "Downtown Tampa", "Bayshore Beautiful"],
    topServices: standardTopServices,
  },
  {
    name: "Sunset Park",
    slug: "sunset-park",
    parentCity: "South Tampa",
    parentSlug: "south-tampa-fl",
    zipCodes: ["33629"],
    metaTitle: "Sunset Park Junk Removal | 33629 Same-Day Service",
    metaDescription:
      "Junk removal in Sunset Park, Tampa. Waterfront cleanouts, renovation hauls, and large estate jobs handled by a local insured crew. Upfront pricing, no hidden fees.",
    hero: {
      intro:
        "Sunset Park's deep waterfront lots, large garages, and ongoing teardown-rebuild activity make it one of our highest-volume zip codes in South Tampa.",
    },
    whatMakesItUnique:
      "Sunset Park has some of the largest residential lots in South Tampa, which means bigger garages, deeper backyards, and more storage to clear than almost anywhere else in 33629. We see frequent renovation prep, full pre-listing cleanouts, and hot tub or pool deck removals here. Our trucks are sized to fit the long driveways and our crews are sized to move volume quickly.",
    homeAndPropertyTypes: [
      "Waterfront single-family homes on Old Tampa Bay",
      "Large mid-century ranches on oversized lots",
      "New-build luxury homes (teardown-rebuilds)",
      "Multi-car garages and detached storage buildings",
    ],
    commonProjects: [
      {
        title: "Teardown prep cleanouts",
        description:
          "Sunset Park sees constant teardown activity. We clear the existing home of contents — furniture, appliances, stored items — before demolition starts.",
      },
      {
        title: "Multi-car garage cleanouts",
        description:
          "3- and 4-car garages packed with tools, seasonal storage, and inherited items are standard Sunset Park calls.",
      },
      {
        title: "Hot tub and pool equipment removal",
        description:
          "Aging hot tubs, broken pool pumps, and old patio furniture come out of Sunset Park backyards regularly. We disassemble, haul, and recycle.",
      },
      {
        title: "Full pre-listing cleanouts",
        description:
          "Realtors call us before listing Sunset Park homes so photos show empty garages, clean lanais, and clear storage areas.",
      },
    ],
    logisticsNotes:
      "Most Sunset Park homes have long private drives that accommodate full-size dump trucks. We protect pavers, irrigation heads, and landscaped borders with plywood and walking boards. Waterfront access for dock or seawall debris is coordinated in advance.",
    aiAnswers: [
      {
        question: "Do you do junk removal in Sunset Park Tampa?",
        answer:
          "Yes. Sunset Park (33629) is a core service area for us. We handle everything from single furniture pickups to full teardown-prep cleanouts of 4,000+ sqft waterfront homes.",
      },
      {
        question: "How much does a 4-car garage cleanout cost?",
        answer:
          "A fully packed 4-car garage cleanout in Sunset Park typically runs $700–$1,400 depending on volume and item types. Lighter cleanouts can come in under $500. We always quote on-site before starting.",
      },
      {
        question: "Can you handle teardown-prep cleanouts?",
        answer:
          "Yes. Before demolition crews arrive, we clear out all interior contents, appliances, fixtures (where allowed), and stored items. We coordinate directly with your builder or GC to stay on schedule.",
      },
    ],
    faqs: [
      {
        question: "What zip code covers Sunset Park?",
        answer:
          "Sunset Park is in 33629, shared with Palma Ceia and other established South Tampa neighborhoods.",
      },
      {
        question: "Will you pick up old boating or fishing equipment?",
        answer:
          "Yes. Old trolling motors, broken rod racks, waterlogged boat cushions, and accumulated dock storage are common removals in Sunset Park.",
      },
      {
        question: "Do you remove sheds or playsets?",
        answer:
          "Yes, we have a dedicated demolition crew for shed and playset removal in Sunset Park. We disassemble in place and haul everything off in the same visit.",
      },
      {
        question: "Can I get a quote without being home?",
        answer:
          "For most Sunset Park jobs we prefer an on-site visual quote, but we can do a video walkthrough quote if you're out of town. Both result in a binding written price.",
      },
      {
        question: "Do you work alongside our renovation contractor?",
        answer:
          "Yes. We're a regular partner with several South Tampa renovation contractors and can schedule recurring pickups throughout your project.",
      },
      {
        question: "Are weekends available in Sunset Park?",
        answer:
          "Yes, Saturday service is standard. Sundays are available by appointment for time-sensitive jobs.",
      },
    ],
    jobStories: [
      {
        title: "Teardown-prep cleanout — Sunset Park waterfront",
        summary:
          "Cleared a 3,800 sqft home of all contents in a single day ahead of demolition. Donated salvageable cabinets, recycled all appliances and metals, and left the structure ready for the demo crew.",
      },
      {
        title: "4-car garage + pool deck cleanout",
        summary:
          "Removed years of stored tools, seasonal decor, broken patio furniture, and an aging hot tub from a Sunset Park home preparing to go on the market.",
      },
    ],
    landmarks: [
      "Westshore Yacht Club",
      "Old Tampa Bay waterfront",
      "Picnic Island Park",
      "MacDill Air Force Base (north of)",
    ],
    nearbyNeighborhoods: ["Beach Park", "Westshore", "Palma Ceia", "Culbreath Isles"],
    topServices: standardTopServices,
  },
];

export const getNeighborhoodBySlug = (slug: string) =>
  southTampaNeighborhoods.find((n) => n.slug === slug);
