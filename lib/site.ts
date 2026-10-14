/**
 * KORU Lahore — single source of truth for verified contact + content status.
 * Unverified claims are NEVER rendered as fact; see content-sources.md.
 * Dish names below come from third-party menus (possibly stale) — each is
 * marked "owner confirmation required"; no prices/ingredients published.
 *
 * Photography: locally stored licensed editorial photos (Unsplash), JPEG-magic
 * verified Oct 2026. Illustrative of the style — never Koru's own room/dishes.
 * See public/images/ASSET-SOURCES.md.
 */

export const SITE = {
  name: "Koru Restaurant",
  wordmark: "KORU",
  tagline: "Mediterranean flavours and sushi in Gulberg II.",
  address: "22/B Zahoor Elahi Road, Gulberg II, Lahore",
  phoneDisplay: "0327 1116666",
  phoneHref: "tel:+923271116666",
  whatsapp: "923271116666",
  instagram: "https://www.instagram.com/koru.lahore/",
  facebook: "https://www.facebook.com/KoruLahore",
  foodpanda: "https://www.foodpanda.pk/restaurant/tjzy/koru-restaurant",
  heroH1: "Good taste takes many forms.",
  heroSub:
    "Sushi, wood-fired pizza, steaks and seafood — one warm room and a relaxed courtyard in Gulberg II. Explore the menu, then gather around the table.",
  directionsUrl:
    "https://www.google.com/maps/search/?api=1&query=22B+Zahoor+Elahi+Road+Gulberg+II+Lahore",
  photoNote:
    "Photography is illustrative of the style — Koru's room and dishes confirmed on enquiry.",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}

export type HeroSlide = {
  src: string;
  alt: string;
  width: number;
  height: number;
  position?: string;
};

/** Continuous cinematic order: sushi → fire → room → craft. 40s cycle. */
export const HERO_SLIDES: HeroSlide[] = [
  {
    src: "/images/sushi-platter.jpg",
    alt: "Overhead sushi platter with nigiri, maki rolls, chopsticks and soy",
    width: 1600,
    height: 1067,
    position: "50% 55%",
  },
  {
    src: "/images/steak-fire.jpg",
    alt: "Sliced grilled steak with fries on a dark plate",
    width: 1600,
    height: 1067,
    position: "50% 55%",
  },
  {
    src: "/images/hero-interior.jpg",
    alt: "Warm modern restaurant dining room with set tables",
    width: 1920,
    height: 1280,
    position: "50% 50%",
  },
  {
    src: "/images/salmon-plate.jpg",
    alt: "Plated salmon dish with vegetables on a ceramic plate",
    width: 1600,
    height: 1067,
    position: "50% 45%",
  },
];

export type MenuCategory = {
  id: string;
  label: string;
  blurb: string;
  img: string;
  alt: string;
};

export const MENU_CATEGORIES: MenuCategory[] = [
  { id: "sushi", label: "Sushi Bar", blurb: "Maki, nigiri and signatures", img: "/images/sushi-rolls.jpg", alt: "Assorted sushi rolls with salmon and tuna" },
  { id: "starters", label: "Starters", blurb: "To open the table", img: "/images/salad-fresh.jpg", alt: "Fresh green salad bowl" },
  { id: "soups-salads", label: "Soups & Salads", blurb: "Light and warming", img: "/images/soup-bowl.jpg", alt: "Steaming soup bowl with herbs" },
  { id: "pizza", label: "Pizza", blurb: "Wood-fired favourites", img: "/images/pizza-wood.jpg", alt: "Wood-fired pizza with basil and mozzarella" },
  { id: "pasta", label: "Pasta", blurb: "Creamy and classic", img: "/images/pasta-creamy.jpg", alt: "Creamy pasta in a white bowl" },
  { id: "seafood", label: "Seafood", blurb: "Fresh catch plates", img: "/images/salmon-plate.jpg", alt: "Plated salmon with vegetables" },
  { id: "steaks", label: "Steaks & Grill", blurb: "Fired and sliced", img: "/images/steak-fire.jpg", alt: "Grilled steak sliced with fries" },
  { id: "burgers", label: "Burgers & Sandwiches", blurb: "Stacked and toasted", img: "/images/burger-stack.jpg", alt: "Stacked burger with fries" },
  { id: "desserts", label: "Desserts", blurb: "To finish", img: "/images/chocolate-dessert.jpg", alt: "Chocolate dessert with berries" },
];

export type MenuItem = {
  name: string;
  category: string;
  img: string;
  alt: string;
  note?: string;
  status: "to-confirm";
};

/**
 * Dish names sourced from third-party menus (menumoment / foodiespakistan,
 * Oct 2026) — possibly stale. Owner confirmation required before treating
 * any as current. No prices, ingredients, or availability published.
 */
export const MENU_ITEMS: MenuItem[] = [
  { name: "Crunchy California Roll", category: "sushi", img: "/images/sushi-rolls.jpg", alt: "California sushi rolls with sesame", status: "to-confirm" },
  { name: "Spicy Crab Roll", category: "sushi", img: "/images/sushi-platter.jpg", alt: "Sushi platter with maki and nigiri", status: "to-confirm" },
  { name: "Dragon Roll", category: "sushi", img: "/images/sushi-rolls.jpg", alt: "Dragon sushi roll with avocado", status: "to-confirm" },
  { name: "Salmon Sashimi", category: "sushi", img: "/images/sushi-platter.jpg", alt: "Fresh salmon sashimi slices", status: "to-confirm" },
  { name: "Dynamite Tuna Roll", category: "sushi", img: "/images/sushi-rolls.jpg", alt: "Tuna sushi rolls with sauce", status: "to-confirm" },
  { name: "Creamy Yuzu Truffle Sushi", category: "sushi", img: "/images/sushi-platter.jpg", alt: "Specialty sushi with creamy topping", note: "Named in foodiespakistan roundup", status: "to-confirm" },
  { name: "Kalamata Sole", category: "seafood", img: "/images/salmon-plate.jpg", alt: "Plated white fish with olives and herbs", note: "Named in foodiespakistan roundup", status: "to-confirm" },
  { name: "Fresh Catch Plate", category: "seafood", img: "/images/salmon-plate.jpg", alt: "Grilled fish fillet with vegetables", status: "to-confirm" },
  { name: "Moroccan Chicken", category: "starters", img: "/images/salad-fresh.jpg", alt: "Spiced chicken with fresh salad", note: "Named in foodiespakistan roundup", status: "to-confirm" },
  { name: "Herbed Crusted Chicken", category: "starters", img: "/images/salad-fresh.jpg", alt: "Herb-crusted chicken plate", note: "Named in explorerestaurant listing", status: "to-confirm" },
  { name: "Grilled Lamb Chops", category: "steaks", img: "/images/steak-fire.jpg", alt: "Grilled lamb chops with char", note: "Signature per explorerestaurant", status: "to-confirm" },
  { name: "Wood-Fired Pizza", category: "pizza", img: "/images/pizza-wood.jpg", alt: "Wood-fired pizza with melted cheese", status: "to-confirm" },
  { name: "Creamy Alfredo Pasta", category: "pasta", img: "/images/pasta-creamy.jpg", alt: "Creamy pasta bowl", status: "to-confirm" },
  { name: "Chicken Burger", category: "burgers", img: "/images/burger-stack.jpg", alt: "Crispy chicken burger with fries", status: "to-confirm" },
  { name: "Garden Salad", category: "soups-salads", img: "/images/salad-fresh.jpg", alt: "Fresh garden salad", status: "to-confirm" },
  { name: "Tomato Soup", category: "soups-salads", img: "/images/soup-bowl.jpg", alt: "Tomato soup with basil", status: "to-confirm" },
  { name: "Chocolate Dessert", category: "desserts", img: "/images/chocolate-dessert.jpg", alt: "Chocolate dessert with berries", status: "to-confirm" },
];

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  large?: boolean;
};

export const GALLERY: GalleryImage[] = [
  { src: "/images/sushi-platter.jpg", alt: "Overhead sushi platter with nigiri and maki", caption: "From the sushi bar", width: 1600, height: 1067, large: true },
  { src: "/images/steak-fire.jpg", alt: "Sliced grilled steak with fries", caption: "Fired and sliced", width: 1600, height: 1067 },
  { src: "/images/pizza-wood.jpg", alt: "Wood-fired pizza with basil", caption: "Wood-fired", width: 1600, height: 1067 },
  { src: "/images/hero-interior.jpg", alt: "Warm restaurant dining room with set tables", caption: "The room, set", width: 1920, height: 1280, large: true },
  { src: "/images/salmon-plate.jpg", alt: "Plated salmon with vegetables", caption: "Fresh plates", width: 1600, height: 1067 },
  { src: "/images/pasta-creamy.jpg", alt: "Creamy pasta bowl", caption: "Creamy and classic", width: 1600, height: 1067 },
  { src: "/images/interior-2.jpg", alt: "Restaurant dining room with open kitchen glow", caption: "Warm inside", width: 1280, height: 853 },
  { src: "/images/burger-stack.jpg", alt: "Stacked burger with fries", caption: "Stacked high", width: 1200, height: 900 },
  { src: "/images/chocolate-dessert.jpg", alt: "Chocolate dessert with berries", caption: "To finish", width: 1200, height: 900 },
];

export const EVENT_TYPES = [
  { id: "birthday", label: "Birthdays", blurb: "Gather the table" },
  { id: "bridal", label: "Bridal showers", blurb: "Before the big day" },
  { id: "engagement", label: "Engagements", blurb: "Mark the moment" },
  { id: "gathering", label: "Intimate gatherings", blurb: "Small and warm" },
] as const;

export const NAV = [
  { href: "#menu", label: "Menu" },
  { href: "#experience", label: "Experience" },
  { href: "#gallery", label: "Gallery" },
  { href: "#events", label: "Private Events" },
  { href: "#visit", label: "Visit" },
] as const;
