// Service × Location combos — Batch 3
// Each entry is unique, written with real local detail. Not template-swapped.

export interface SLFaq {
  question: string;
  answer: string;
}

export interface ServiceLocation {
  slug: string; // final URL: /services/{servicePath}/{citySlug}
  servicePath: string; // e.g. "junk-removal/hot-tub-removal"
  serviceName: string; // e.g. "Hot Tub Removal"
  citySlug: string; // e.g. "south-tampa"
  cityName: string; // e.g. "South Tampa"
  cityParentPath: string; // e.g. "/service-areas/south-tampa-fl/"
  zipCodes: string[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  whyHere: string; // 2-3 sentences: why this service is in demand in this city
  pricing: { label: string; price: string; notes: string }[];
  process: { step: string; detail: string }[];
  localContext: string; // landmarks, HOA, parking, lot type realities
  aiAnswers: { question: string; answer: string }[]; // 40-60 word
  faqs: SLFaq[];
  jobStory: { title: string; summary: string };
  serviceHref: string; // link back to parent service
  cityHref: string; // link to city service area page
}

export const serviceLocations: ServiceLocation[] = [
  {
    slug: "hot-tub-removal-south-tampa",
    servicePath: "junk-removal/hot-tub-removal",
    serviceName: "Hot Tub Removal",
    citySlug: "south-tampa",
    cityName: "South Tampa",
    cityParentPath: "/service-areas/south-tampa-fl/",
    zipCodes: ["33606", "33609", "33611", "33616", "33629"],
    metaTitle: "Hot Tub Removal South Tampa | Same-Day Spa Disposal 33629",
    metaDescription:
      "Hot tub removal in South Tampa. We cut, haul, and dispose of spas behind Hyde Park bungalows, Davis Islands pools, and Sunset Park lanais. Upfront pricing, fully insured.",
    h1: "Hot Tub Removal in South Tampa",
    intro:
      "Most South Tampa hot tubs end up wedged into a screened lanai, jammed behind a privacy fence in Palma Ceia, or sunk into a deck off Bayshore. We cut them down on site, carry the pieces out through narrow gates, and leave the slab clean — usually same day.",
    whyHere:
      "South Tampa has the oldest concentration of in-ground spas and lanai-mounted hot tubs in Hillsborough County. Salt air off Hillsborough Bay corrodes shells, jets seize, and once a unit stops holding heat most owners want it gone before the next hurricane season. We cut up four to six spas a week between Bayshore and MacDill.",
    pricing: [
      { label: "Standard above-ground spa (6–8 person)", price: "$450–$650", notes: "Includes cut-down, haul, and slab broom-clean." },
      { label: "Lanai or screened-pool spa", price: "$550–$800", notes: "Extra labor to protect screen frame and pavers." },
      { label: "Swim spa / oversized unit", price: "$800–$1,200", notes: "Two-truck job, full day." },
    ],
    process: [
      { step: "Free on-site quote", detail: "We confirm access — gate widths, screen doors, pavers, sprinkler heads — and lock in a flat price." },
      { step: "Drain & disconnect", detail: "We pull power at the breaker, cap any 220V whip, and drain to a yard area you approve (no street runoff)." },
      { step: "Cut & carry", detail: "Reciprocating saws cut the shell into manageable pieces. Cabinet, frame, and motor pack come out separately." },
      { step: "Clean & dispose", detail: "Slab swept, screen re-secured if needed, and the entire unit is hauled to a licensed Hillsborough recycler." },
    ],
    localContext:
      "Hyde Park bungalows usually require carrying pieces through a 36\" side gate to a Hyde Park Boulevard parking spot. Davis Islands jobs often run long because of pool-cage screen panels we need to remove and re-set. Sunset Park and Beach Park HOAs require we work between 8am–5pm Monday–Saturday and protect paver driveways with plywood — we plan for both.",
    aiAnswers: [
      {
        question: "How much does hot tub removal cost in South Tampa?",
        answer:
          "Hot tub removal in South Tampa typically runs $450–$800 for a standard 6–8 person above-ground spa, including cut-down, haul-away, and a broom-clean slab. Lanai-mounted units cost more due to screen protection. Swim spas can reach $1,200. Junk in the Truck Co provides flat, upfront pricing — no per-pound charges.",
      },
      {
        question: "Do you remove hot tubs from screened lanais in Tampa?",
        answer:
          "Yes. We remove spas from screened pool cages and lanais throughout South Tampa every week. Our crew cuts the shell on-site into pieces small enough to clear a 36-inch screen door, protects the pavers and screen frame, and re-secures any panel we touch before leaving.",
      },
      {
        question: "How fast can you remove a hot tub in South Tampa?",
        answer:
          "Most South Tampa hot tub removals are completed same-day or next-day. We carry saws, dollies, and plywood on every truck, so once you book we can usually have a crew at your Hyde Park, Palma Ceia, or Davis Islands address within 24 hours.",
      },
    ],
    faqs: [
      { question: "Do I need to drain the hot tub first?", answer: "No — we drain it as part of the job to a yard area you approve. We don't run water into the street or any storm drain." },
      { question: "Do you disconnect the electrical?", answer: "Yes. We kill power at the breaker and safely cap the 220V whip. If you want a licensed electrician to fully remove the disconnect box, we can refer one in South Tampa." },
      { question: "Will you damage my pavers or screen?", answer: "We lay plywood on paver paths, dolly pieces one at a time, and pop out screen panels rather than dragging anything through them. If we touch a panel, we re-secure it before we leave." },
      { question: "What about the concrete slab underneath?", answer: "Standard removal leaves the slab intact and swept clean. If you want the slab broken up and hauled, we'll quote that separately — typically $200–$400 in South Tampa." },
      { question: "Do you work in Davis Islands?", answer: "Yes — Davis Islands is one of our most common hot tub removal zip codes. We know the bridge weight limits and the residential parking rules around the marina." },
    ],
    jobStory: {
      title: "Lanai spa removed in Beach Park, same day",
      summary:
        "A Beach Park homeowner called Tuesday morning with a 7-person spa wedged into a screened lanai behind a paver pool deck. We were on site by 1pm, popped two screen panels, cut the shell into eight pieces, and had the cabinet, frame, and motor out by 4pm. Pavers protected, panels re-set, slab swept. $625 flat.",
    },
    serviceHref: "/services/junk-removal/hot-tub-removal/",
    cityHref: "/service-areas/south-tampa-fl/",
  },

  {
    slug: "estate-cleanout-south-tampa",
    servicePath: "junk-removal/estate-cleanout",
    serviceName: "Estate Cleanout",
    citySlug: "south-tampa",
    cityName: "South Tampa",
    cityParentPath: "/service-areas/south-tampa-fl/",
    zipCodes: ["33606", "33609", "33611", "33616", "33629"],
    metaTitle: "Estate Cleanout South Tampa | Compassionate Whole-Home Clearouts",
    metaDescription:
      "Estate cleanout in South Tampa. We clear Hyde Park bungalows, Bayshore high-rises, and Palma Ceia family homes with discretion. Donation routing, document care, flat pricing.",
    h1: "Estate Cleanout in South Tampa",
    intro:
      "Most of our South Tampa estate cleanouts come from families closing out a parent's home in Palma Ceia or Hyde Park. We move through the house room by room, set aside anything you flag, route the donatable items to local nonprofits, and leave the property broom-clean and listing-ready.",
    whyHere:
      "South Tampa has Hillsborough County's highest concentration of mid-century homes still in original-owner families. As ownership transitions, 50+ years of contents need to come out before realtors can stage. We handle two to four full estate clears per month across 33606, 33609, and 33629.",
    pricing: [
      { label: "1-bed condo or studio", price: "$650–$1,200", notes: "Bayshore high-rise pricing includes elevator and dock coordination." },
      { label: "2–3 bed bungalow", price: "$1,400–$2,800", notes: "Most Hyde Park / Palma Ceia jobs." },
      { label: "4+ bed estate", price: "$2,800–$6,000+", notes: "Typically Beach Park / Sunset Park / Davis Islands." },
    ],
    process: [
      { step: "Walk-through & flat quote", detail: "We walk the home with you (or by video), identify any keep items, and lock a single flat price." },
      { step: "Keep / donate / dispose sort", detail: "We sort in place. Anything you flag stays. Everything donatable is set aside for our nonprofit partners." },
      { step: "Full clear", detail: "Furniture, appliances, garage, attic, sheds, and yard — we handle the whole property." },
      { step: "Donation routing & receipts", detail: "We deliver donatable items to Metropolitan Ministries, Habitat ReStore Tampa, or your preferred 501(c)(3) and get you the receipts." },
    ],
    localContext:
      "Hyde Park and Palma Ceia bungalows often have unfinished basements or crawl-space storage that hasn't been touched in decades — we plan crews and PPE for that. Bayshore high-rises (One Bayshore, The Towers, Marina Club) require freight-elevator booking and loading-dock time slots, which we handle directly with the building. We bring discreet, unmarked trucks for buildings that prefer it.",
    aiAnswers: [
      {
        question: "How much does an estate cleanout cost in South Tampa?",
        answer:
          "Estate cleanouts in South Tampa run $1,400–$2,800 for a typical 2–3 bedroom Hyde Park or Palma Ceia bungalow, and $2,800–$6,000+ for larger Beach Park or Sunset Park homes. Bayshore condos start around $650. Pricing is flat per-property, not per-pound, and includes donation routing and a broom-clean finish.",
      },
      {
        question: "What's included in a South Tampa estate cleanout?",
        answer:
          "A full South Tampa estate cleanout includes every room, the garage, attic, sheds, and yard debris. We sort keep / donate / dispose, route donatable items to Metropolitan Ministries and Habitat ReStore Tampa, deliver donation receipts, and leave the property broom-clean and ready for a realtor walk-through.",
      },
      {
        question: "Can you handle estate cleanouts for out-of-state executors?",
        answer:
          "Yes — much of our South Tampa estate work is for executors and adult children living out of state. We do video walk-throughs, coordinate with the realtor or probate attorney, photograph anything you want documented, and ship small keepsake items at your direction.",
      },
    ],
    faqs: [
      { question: "What happens to documents and photos?", answer: "We bag and set aside all loose paper, photo albums, and anything personal for your review before disposal. Nothing with a name on it leaves the property without your approval." },
      { question: "Do you work with realtors?", answer: "Often. Several South Tampa agents at Smith & Associates and Coldwell Banker bring us in before listing. We can coordinate directly with your agent on access and timing." },
      { question: "Will you donate instead of dump?", answer: "Yes. Anything usable goes to Metropolitan Ministries, Habitat ReStore Tampa, or a charity you name. We deliver receipts within 7 days." },
      { question: "Can you clean out a hoarder estate?", answer: "Yes — we handle hoarder-condition estates regularly. Crews wear PPE and we coordinate with junk in the truck Co's hoarder cleanup protocol for biohazard sorting." },
      { question: "How long does it take?", answer: "Most 2–3 bedroom South Tampa homes are cleared in 1–2 days. Larger Beach Park / Davis Islands estates can run 3–4 days." },
    ],
    jobStory: {
      title: "Palma Ceia bungalow cleared in 2 days",
      summary:
        "A Palma Ceia family asked us to clear their mother's 1947 bungalow off W. Estrella St. before listing. Three generations of contents — full attic, detached garage, and a tool shed. We sorted in place, set aside two banker's boxes of documents and photos for the daughter in Atlanta, delivered eight pickup loads to Habitat ReStore, and handed the realtor a broom-clean home on day three. Flat $2,400.",
    },
    serviceHref: "/services/junk-removal/estate-cleanout/",
    cityHref: "/service-areas/south-tampa-fl/",
  },

  {
    slug: "garage-cleanout-brandon",
    servicePath: "junk-removal/garage-cleanout",
    serviceName: "Garage Cleanout",
    citySlug: "brandon",
    cityName: "Brandon",
    cityParentPath: "/service-areas/brandon-fl/",
    zipCodes: ["33510", "33511"],
    metaTitle: "Garage Cleanout Brandon FL | Same-Day Junk Removal 33511",
    metaDescription:
      "Garage cleanout in Brandon, FL. We clear 2 and 3-car garages across Bloomingdale, Providence Lakes, and FishHawk-adjacent neighborhoods. Flat pricing, fully insured.",
    h1: "Garage Cleanout in Brandon, FL",
    intro:
      "Brandon garages are big — most are 2 or 3-car, attached, with overhead storage racks loaded down with holiday bins, kid bikes, and old paint cans. We clear the whole thing in one visit, sort what's donatable, and sweep the slab so you can actually park inside again.",
    whyHere:
      "Brandon's housing stock is dominated by 1990s–2010s tract homes with oversized garages that turn into long-term storage. We run two to three Brandon garage cleanouts a week, mostly in Bloomingdale, Providence Lakes, Brandon Pointe, and the FishHawk corridor along Lithia-Pinecrest Road.",
    pricing: [
      { label: "Single-car garage", price: "$350–$550", notes: "Standard contents, no hazardous materials." },
      { label: "2-car garage", price: "$550–$900", notes: "Most Brandon HOA-community jobs land here." },
      { label: "3-car or oversized", price: "$900–$1,500", notes: "Includes overhead racks, workbenches, and tool wall." },
    ],
    process: [
      { step: "Free on-site or text-photo quote", detail: "Text us a few photos and we'll send a flat quote — usually within an hour during business hours." },
      { step: "Bring the truck to your driveway", detail: "We park on the apron, lay down a tarp, and start moving things out of the garage in a single staging line." },
      { step: "Sort keep / donate / dump", detail: "You flag anything you want to keep. Donatable items go to Metropolitan Ministries Brandon or local nonprofits." },
      { step: "Sweep & go", detail: "We sweep the slab, knock down cobwebs in the corners, and pull off the driveway. You walk in and park." },
    ],
    localContext:
      "Most Brandon HOAs (Bloomingdale, Providence Lakes, River Hills) require trucks to stay off the lawn — we always park on the driveway apron. Trash service in eastern Hillsborough won't take old paint, motor oil, or pool chemicals, which is why most garage cleanouts include 1–3 buckets of hazmat. We route those to the Hillsborough HHW facility on Falkenburg Rd ourselves.",
    aiAnswers: [
      {
        question: "How much does a garage cleanout cost in Brandon FL?",
        answer:
          "A garage cleanout in Brandon, FL typically costs $350–$550 for a single-car garage, $550–$900 for a standard 2-car garage, and $900–$1,500 for a 3-car or oversized garage. Pricing is flat per-job and includes loading, donation routing, hazmat hand-off, and a broom-clean slab — no per-pound charges.",
      },
      {
        question: "What can you take out of a Brandon garage?",
        answer:
          "We take furniture, appliances, exercise equipment, tools, holiday bins, kid bikes, lumber scraps, drywall, and yard equipment. We can also haul old paint, motor oil, and pool chemicals to the Hillsborough County HHW facility on Falkenburg Road — most general haulers can't.",
      },
      {
        question: "How fast can you clean out a garage in Brandon?",
        answer:
          "Same-day or next-day in most cases. A standard Brandon 2-car garage takes our crew 2–3 hours start to finish, including sweep-out. Book before noon and we can usually have a truck at your Bloomingdale or Providence Lakes driveway the same afternoon.",
      },
    ],
    faqs: [
      { question: "Do I have to be home?", answer: "No. Plenty of Brandon clients leave the garage door code or unlock the side door. We photograph before/after and Venmo-Zelle invoice when done." },
      { question: "Can you take old paint and chemicals?", answer: "Yes — within reason. We can take household quantities of paint, motor oil, fertilizer, and pool chemicals and deliver them to the Hillsborough HHW drop-off on Falkenburg Rd." },
      { question: "What about overhead storage racks?", answer: "Standard cleanout assumes we empty the racks. If you want the racks themselves unbolted and hauled, add $75–$150." },
      { question: "Will you sweep the garage?", answer: "Yes — broom-clean slab is included on every Brandon garage cleanout." },
      { question: "Do you serve Bloomingdale and FishHawk?", answer: "Yes. We're in Bloomingdale and the FishHawk-adjacent Lithia-Pinecrest corridor weekly." },
    ],
    jobStory: {
      title: "3-car Bloomingdale garage cleared in one afternoon",
      summary:
        "A Bloomingdale homeowner relocating to Charlotte called on a Thursday — house going on market Monday. 3-car garage stacked floor to ceiling with kid bikes, a treadmill, six bins of old tax records, and 15 years of paint. Two-man crew on site Friday at 10am, off the driveway by 2:30pm. Donatable bikes and treadmill to Goodwill Brandon; paint and chemicals to HHW. $875 flat.",
    },
    serviceHref: "/services/junk-removal/garage-cleanout/",
    cityHref: "/service-areas/brandon-fl/",
  },

  {
    slug: "shed-removal-riverview",
    servicePath: "demolition/shed-removal",
    serviceName: "Shed Removal & Demolition",
    citySlug: "riverview",
    cityName: "Riverview",
    cityParentPath: "/service-areas/riverview-fl/",
    zipCodes: ["33569", "33578", "33579"],
    metaTitle: "Shed Removal Riverview FL | Demolition & Haul-Away 33579",
    metaDescription:
      "Shed removal and demolition in Riverview, FL. We tear down rotted wood sheds, rusted metal units, and resin storage buildings across Summerfield, Panther Trace, and Triple Creek.",
    h1: "Shed Removal & Demolition in Riverview, FL",
    intro:
      "Most Riverview backyards have a 8x10 or 10x12 shed that's been quietly rotting since the home was built. Termites, soft floors, rusted-through metal panels — eventually it has to come down. We demo the whole thing, haul the debris, and leave you a clean footprint to re-use, re-grade, or sod over.",
    whyHere:
      "Riverview's master-planned communities — Summerfield, Panther Trace, Rivercrest, South Fork, Triple Creek — were built fast in the 2000s with builder-grade resin and wood sheds. Twenty years of Florida sun and humidity has those failing on schedule. We tear down four to six sheds a month between US-301 and Big Bend Road.",
    pricing: [
      { label: "Resin / plastic shed (Rubbermaid, Suncast)", price: "$350–$550", notes: "Including slab sweep." },
      { label: "Metal shed (Arrow, Lifetime)", price: "$400–$650", notes: "Sharp-edge disposal included." },
      { label: "Wood shed up to 10x12", price: "$650–$1,100", notes: "Most common Riverview job." },
      { label: "Wood shed 12x16+ or with loft", price: "$1,100–$1,800", notes: "Two-day job possible." },
    ],
    process: [
      { step: "Quote with one photo", detail: "Text a photo of the shed and a measurement. We send a flat quote and confirm gate access." },
      { step: "Disconnect & empty", detail: "If you haven't already, we empty the shed first and set anything you want to keep aside." },
      { step: "Demo down", detail: "Sledges, pry bars, and saws. Roof first, walls second, floor last. Anchors pulled from the slab or pad." },
      { step: "Haul & clean", detail: "All debris loaded out. Nails and screws magnet-swept. Slab or pad left clean for your next step." },
    ],
    localContext:
      "Many Riverview communities (Summerfield Crossings, Panther Trace) require we enter via the rear gate and protect the sod path with plywood. The clay soil here means concrete pad anchors come out cleanly — wood sheds on dirt floors require more cleanup. If your shed sits inside a CDD-platted easement, we can confirm setback compliance for your re-build before we tear down.",
    aiAnswers: [
      {
        question: "How much does shed removal cost in Riverview FL?",
        answer:
          "Shed removal in Riverview, FL ranges from $350 for a small resin shed to $1,800 for a 12x16 wood shed with a loft. The most common 8x10 or 10x12 wood shed runs $650–$1,100, including full demolition, haul-away, anchor removal, and a magnet-swept clean footprint.",
      },
      {
        question: "Do I need a permit to remove a shed in Riverview?",
        answer:
          "In unincorporated Hillsborough County (which covers most of Riverview), residential sheds under 200 sq ft typically don't require a demolition permit. Sheds over 200 sq ft or those with electrical may. We can help you confirm with Hillsborough Building Services before we start.",
      },
      {
        question: "Can you remove a shed with a concrete pad in Riverview?",
        answer:
          "Yes. Standard pricing demos the shed and leaves the pad intact. If you want the concrete pad broken up and hauled too, we'll quote it separately — typically $250–$500 in Riverview depending on pad size and thickness.",
      },
    ],
    faqs: [
      { question: "Do you remove the slab?", answer: "Standard removal leaves the slab. We can demo the slab for an added $250–$500." },
      { question: "What about asbestos siding or lead paint?", answer: "If the shed was built pre-1980 and we suspect either, we pause and recommend a licensed abatement contractor first. Safety over speed." },
      { question: "Can you remove a shed full of stuff?", answer: "Yes — bundle it with a junk removal job and we'll empty it before demo. Saves you a separate cleanout call." },
      { question: "Do you work in Summerfield Crossings?", answer: "Yes — Summerfield, Panther Trace, Rivercrest, Triple Creek, and South Fork are weekly stops for our Riverview crews." },
      { question: "How long does it take?", answer: "Most Riverview shed demos finish in 3–5 hours. Larger 12x16 wood structures can take a full day." },
    ],
    jobStory: {
      title: "Rotted 10x12 wood shed gone before sunset in Panther Trace",
      summary:
        "A Panther Trace homeowner had a 14-year-old wood shed with a sagging roof and termite-eaten floor against the back fence. We pulled in through the side gate, laid plywood across the sod path, and had the entire shed down, loaded, and a clean concrete pad swept by 5:30pm. Magnet-swept for nails. $895 flat.",
    },
    serviceHref: "/services/demolition/shed-removal/",
    cityHref: "/service-areas/riverview-fl/",
  },

  {
    slug: "appliance-removal-south-tampa",
    servicePath: "junk-removal/appliance-removal",
    serviceName: "Appliance Removal",
    citySlug: "south-tampa",
    cityName: "South Tampa",
    cityParentPath: "/service-areas/south-tampa-fl/",
    zipCodes: ["33606", "33609", "33611", "33616", "33629"],
    metaTitle: "Appliance Removal South Tampa | Same-Day Pickup 33606",
    metaDescription:
      "Appliance removal in South Tampa. Old fridges, washers, dryers, ovens, and water heaters hauled out of Hyde Park, Davis Islands, and Bayshore — same day, recycled responsibly.",
    h1: "Appliance Removal in South Tampa",
    intro:
      "When the new fridge gets delivered, the big-box installer almost never takes the old one. We do — same day, out the side door of your Hyde Park bungalow, off your Bayshore condo loading dock, or up from your Davis Islands garage. Then we recycle it properly instead of leaving it on a curb.",
    whyHere:
      "South Tampa's mix of 1920s bungalows and modern high-rises means appliance removal here is rarely simple. Tight kitchen doorways in Hyde Park, freight-elevator coordination on Bayshore, and saltwater-corroded units from Davis Islands keep our crews busy. We pick up 10–15 South Tampa appliances every week.",
    pricing: [
      { label: "Single appliance (fridge, washer, dryer, oven)", price: "$95–$175", notes: "Curbside or first-floor pickup." },
      { label: "Bundle of 2–3 appliances", price: "$175–$295", notes: "Most common kitchen swap-out." },
      { label: "Full kitchen / laundry strip", price: "$295–$550", notes: "Fridge + range + dishwasher + microwave + W/D." },
      { label: "Bayshore high-rise pickup", price: "+$50–$100", notes: "Covers freight elevator + dock booking." },
    ],
    process: [
      { step: "Text or call", detail: "Tell us the appliance type, where it is, and when you want it gone. Flat quote in minutes." },
      { step: "Disconnect", detail: "We pull the water line, unplug, and cap the gas valve if needed (we don't touch live gas lines — only certified closures)." },
      { step: "Wrap & carry", detail: "Door pads, dollies, and floor protection for hardwood and tile. We pop doors off if a fridge won't clear a 30-inch opening." },
      { step: "Responsible recycling", detail: "Refrigerants reclaimed by certified partners. Steel and copper recycled. Working units donated when possible." },
    ],
    localContext:
      "Hyde Park bungalow kitchens often have 28–30\" doorways — we always measure first and pop the fridge doors off if needed. Bayshore high-rises (Bayshore Royal, One Bayshore, The Westshore) require freight-elevator reservation, which we handle directly. Davis Islands jobs frequently involve a second-floor laundry — we use a stair-climbing dolly rather than risk a banister.",
    aiAnswers: [
      {
        question: "How much does appliance removal cost in South Tampa?",
        answer:
          "Appliance removal in South Tampa costs $95–$175 for a single fridge, washer, dryer, or oven, and $175–$295 for a bundle of two or three. Full kitchen strip-outs run $295–$550. Bayshore high-rise pickups add $50–$100 to cover freight-elevator and loading-dock coordination.",
      },
      {
        question: "Do you take refrigerators in South Tampa?",
        answer:
          "Yes — refrigerator removal is one of our most-requested South Tampa services. We disconnect the water line, pop the doors off if needed to clear a tight Hyde Park bungalow doorway, and route the unit to a certified refrigerant-reclamation partner so the freon doesn't end up in a landfill.",
      },
      {
        question: "Can you remove appliances from a Bayshore high-rise?",
        answer:
          "Yes. We work Bayshore high-rises weekly — Bayshore Royal, One Bayshore, The Westshore, and several others. We book the freight elevator and loading dock with the building directly, bring blanket-wrapped dollies for elevator-cab protection, and add a flat $50–$100 to cover the coordination.",
      },
    ],
    faqs: [
      { question: "Do you take working appliances?", answer: "Yes — and we try to donate working units to Habitat ReStore Tampa or a local nonprofit rather than recycle them." },
      { question: "Will you disconnect gas?", answer: "We only close existing shutoff valves — we won't cut, cap, or re-pipe live gas lines. For a full gas-line termination, you'll need a licensed plumber." },
      { question: "Same day in Hyde Park?", answer: "Usually yes. Book before noon and we'll have a truck on your block that afternoon." },
      { question: "Do you take small appliances too?", answer: "Yes — microwaves, dishwashers, beverage fridges, wine coolers, and trash compactors. Often we add them at no extra cost when bundled with a larger pickup." },
      { question: "What about the doors and racks?", answer: "All included — we take the unit complete." },
    ],
    jobStory: {
      title: "Full Hyde Park kitchen strip-out for a renovation",
      summary:
        "A Hyde Park homeowner was starting a kitchen remodel and needed every appliance gone before the contractor arrived Monday. Fridge, range, dishwasher, microwave, and a beverage fridge in the butler's pantry. We popped the fridge doors to clear the 29\" pantry hall, padded the original 1925 hardwood, and had everything on the truck in 90 minutes. $345 flat.",
    },
    serviceHref: "/services/junk-removal/appliance-removal/",
    cityHref: "/service-areas/south-tampa-fl/",
  },

  {
    slug: "hoarder-cleanup-tampa",
    servicePath: "junk-removal/hoarder-cleanup",
    serviceName: "Hoarder Cleanup",
    citySlug: "tampa",
    cityName: "Tampa Bay",
    cityParentPath: "/service-areas/",
    zipCodes: ["33602", "33603", "33604", "33605", "33606", "33609", "33610", "33611", "33612", "33613", "33614", "33615", "33616", "33617", "33618", "33619", "33620", "33624", "33625", "33626", "33629", "33634", "33635", "33637", "33647"],
    metaTitle: "Hoarder Cleanup Tampa Bay | Compassionate, Discreet, Insured",
    metaDescription:
      "Hoarder cleanup in Tampa Bay. Discreet, judgment-free crews for hoarder, biohazard, and severe clutter cleanouts across Hillsborough County. Family-friendly process, flat pricing.",
    h1: "Hoarder Cleanup in Tampa Bay",
    intro:
      "Hoarder cleanups are different from a normal junk job — they take patience, PPE, and a crew that understands you're dealing with someone you love. We move at the family's pace, sort instead of just dump, and finish with a property that's safe, livable, and ready for whatever comes next.",
    whyHere:
      "We've handled hoarder-condition properties from Seminole Heights bungalows to Wesley Chapel-adjacent ranches to Bayshore condos. Our crews carry the PPE, respirators, and biohazard supplies, and we coordinate with social workers, APS case managers, probate attorneys, and adult children all over Tampa Bay every month.",
    pricing: [
      { label: "Level 1–2 (clutter, no biohazard)", price: "$1,500–$3,500", notes: "1–2 day job, standard PPE." },
      { label: "Level 3 (heavy clutter, some spoilage)", price: "$3,500–$7,500", notes: "Multi-day, respirators, donation sorting." },
      { label: "Level 4–5 (biohazard, animal waste, structural)", price: "$7,500–$20,000+", notes: "Includes biohazard partner, sometimes contents inventory." },
    ],
    process: [
      { step: "Discreet walk-through", detail: "We meet at the property in unmarked vehicles. No yard signs, no truck logos visible during the assessment." },
      { step: "Family conversation", detail: "We talk through what stays, what gets sorted, and what gets disposed. We never throw away anything irreversibly without a checkpoint." },
      { step: "Phased clear", detail: "Most hoarder jobs run 2–5 days. We document each room before, during, and after, and recover identity documents, photos, and valuables." },
      { step: "Sanitize hand-off", detail: "For Level 3+ jobs, we coordinate a sanitization partner before the final walk-through. Property is safe to occupy or list when we leave." },
    ],
    localContext:
      "We work with Tampa-area APS workers, probate attorneys at firms across Hillsborough, and several geriatric care managers in South Tampa and Carrollwood. For Bayshore and Davis Islands high-rise hoarder jobs, we coordinate freight elevators and dock windows so neighbors and building staff see as little as possible. We also know which Tampa Bay landfills and HHW facilities accept what — many hoarder cleanouts require 3–4 different disposal endpoints.",
    aiAnswers: [
      {
        question: "How much does hoarder cleanup cost in Tampa?",
        answer:
          "Hoarder cleanup in Tampa Bay ranges from $1,500–$3,500 for clutter-only Level 1–2 properties, $3,500–$7,500 for heavy Level 3 jobs with spoilage, and $7,500–$20,000+ for Level 4–5 biohazard situations involving animal waste or structural damage. Pricing depends on square footage, density, and biohazard level — we always quote in person.",
      },
      {
        question: "What's the difference between hoarder cleanup and a regular cleanout?",
        answer:
          "Hoarder cleanup involves PPE, respirators, biohazard protocols, and a slower sort-first process to recover identity documents, photos, and valuables. Regular cleanouts are bulk haul-aways. Hoarder jobs also typically involve family conversations, APS coordination, and a sanitization step that regular jobs don't require.",
      },
      {
        question: "Can you handle hoarder cleanup discreetly in Tampa?",
        answer:
          "Yes. Discretion is the starting point. Our crews arrive in unmarked vehicles for the initial walk-through, work in plain clothing without company logos when requested, and coordinate freight elevators in Bayshore high-rises so the job stays invisible to neighbors and building staff.",
      },
    ],
    faqs: [
      { question: "Will you work with my parent's social worker?", answer: "Yes. We regularly coordinate with Hillsborough APS workers, Tampa-area care managers, and family attorneys. We can keep them looped into scheduling and progress." },
      { question: "What about pets and animal waste?", answer: "Both common. We bring respirators and biohazard PPE, and partner with a licensed sanitization company for waste-affected surfaces before final walk-through." },
      { question: "Do you find money and valuables?", answer: "Often. We sort by hand for Level 2+ jobs and document anything that looks like cash, jewelry, deeds, or identity papers. Items go in a secured tote for family review." },
      { question: "Is this confidential?", answer: "Yes. We don't post addresses, we don't photograph faces, and we don't share details outside the job team. NDAs available on request." },
      { question: "Where in Tampa Bay do you work?", answer: "All of Hillsborough County — Tampa, South Tampa, Brandon, Riverview, Carrollwood, Town 'n' Country, Temple Terrace, Valrico, Apollo Beach, and nearby." },
    ],
    jobStory: {
      title: "Level 3 Carrollwood ranch cleared in 4 days",
      summary:
        "An adult daughter in Charlotte called about her father's 1,800 sq ft Carrollwood ranch — five-foot paths through every room, two non-functional bathrooms, and three cats. We met her by FaceTime for the walk-through, worked the property over four days with respirators and PPE, recovered roughly $4,200 in cash and an envelope of savings bonds, coordinated sanitization for the bathrooms, and handed her a safe, broom-clean home. Flat $11,800 including biohazard partner.",
    },
    serviceHref: "/services/junk-removal/hoarder-cleanup/",
    cityHref: "/service-areas/",
  },
];

export const getServiceLocationBySlug = (slug: string) =>
  serviceLocations.find((s) => s.slug === slug);
