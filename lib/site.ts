/**
 * Single source of truth for everything on socialriser.com.
 *
 * Adding a new product later = add one object to `products` below.
 * Nothing else needs to change.
 */

export const site = {
  name: "SocialRiser",
  domain: "socialriser.com",
  url: "https://socialriser.com",
  tagline: "Independent software studio",
  description:
    "SocialRiser is an independent software studio building focused, self-contained products — each with its own home, its own users, and its own reason to exist.",
  email: "contact@socialriser.com",
  founded: 2026,
  social: {
    x: "https://x.com/socialriser",
    github: "https://github.com/socialriser",
    linkedin: "https://linkedin.com/company/socialriser",
  },
} as const;

export type ProductStatus = "live" | "building" | "planned";

export interface Product {
  /** Short slug, used as a React key. */
  id: string;
  name: string;
  /** Where it lives. Omit for products that aren't reachable yet. */
  url?: string;
  /** Shown under the URL on the card. Keep to one line. */
  tagline: string;
  status: ProductStatus;
  /** Two or three concrete things the product does. */
  highlights: string[];
  /** Tailwind gradient stops for the card's accent glow. */
  accent: string;
  /**
   * Keep a product off the public site without deleting it.
   * Flip to `false` (or remove the line) when it's ready to announce.
   */
  hidden?: boolean;
}

export const statusLabels: Record<ProductStatus, string> = {
  live: "Live",
  building: "In development",
  planned: "Planned",
};

/* ------------------------------------------------------------------ *
 * TODO: The taglines and highlights below are placeholders written
 * from a rough description. Replace them with what these products
 * actually do before you go live.
 * ------------------------------------------------------------------ */

export const products: Product[] = [
  {
    id: "multiverse",
    name: "Multiverse",
    url: "https://multiverse.socialriser.com",
    tagline:
      "Create, duplicate and manage multiple versions of a social presence from one dashboard.",
    status: "live",
    highlights: [
      "Clone and branch profiles in seconds",
      "One dashboard for every version",
      "Built for creators managing more than one identity",
    ],
    accent: "from-violet-500/25 to-fuchsia-500/10",
  },
  {
    id: "ipo",
    name: "IPO",
    url: "https://ipo.socialriser.com",
    tagline:
      "Upcoming IPOs, allotment status and listing performance in one fast, clean interface.",
    status: "building",
    highlights: [
      "Live and upcoming issue calendar",
      "Allotment and listing tracking",
      "No clutter, no popups, no noise",
    ],
    accent: "from-sky-500/25 to-emerald-500/10",
    // Not public yet — set to false to show the card, footer link and roadmap entry.
    hidden: true,
  },
  {
    id: "next",
    name: "Next product",
    tagline:
      "Something new is in early planning. Get in touch and you'll hear about it first.",
    status: "planned",
    highlights: ["In early planning", "Details soon"],
    accent: "from-zinc-500/15 to-zinc-500/5",
  },
];

export type RoadmapStatus = "shipped" | "active" | "planned";

export interface RoadmapItem {
  title: string;
  detail: string;
  status: RoadmapStatus;
  /** Same idea as `Product.hidden` — keeps unannounced work off the public page. */
  hidden?: boolean;
}

export const roadmap: RoadmapItem[] = [
  {
    title: "Multiverse — public launch",
    detail: "Live and open to everyone at multiverse.socialriser.com.",
    status: "shipped",
  },
  {
    title: "IPO — private beta",
    detail: "Core tracking is being built. Beta invites go out first to anyone who gets in touch.",
    status: "active",
    // Hidden alongside the IPO product card.
    hidden: true,
  },
  {
    title: "One SocialRiser account",
    detail: "A single login that works across every product, instead of one per app.",
    status: "planned",
  },
  {
    title: "Third product",
    detail: "Still being scoped. It won't be announced until it's real.",
    status: "planned",
  },
];

/** What the public site actually renders. Anything flagged `hidden` is dropped. */
export const visibleProducts = products.filter((product) => !product.hidden);
export const visibleRoadmap = roadmap.filter((item) => !item.hidden);

export const principles = [
  {
    title: "Ship small, ship often",
    body: "Each product does one thing properly instead of ten things badly. Smaller surface, fewer bugs, faster releases.",
  },
  {
    title: "Own the whole stack",
    body: "Design, build and operations sit with the same person. Nothing gets lost in a handoff, and fixes land the same day.",
  },
  {
    title: "Fast by default",
    body: "No heavy trackers, no interstitials, no cookie-wall theatre. Pages load, and then you can use them.",
  },
];
