// ---------------------------------------------------------------------------
// PAINTINGS
// This is the file to edit whenever you:
//   - add a new painting
//   - change a price
//   - mark something as sold
//   - swap in a real photo
//
// HOW TO ADD A NEW PAINTING
//   1. Put your photo in /public/images/paintings/ (e.g. "coastline.jpg").
//   2. Copy one of the objects below and change every field.
//   3. "slug" must be unique — it's used in the painting's URL
//      (/shop/your-slug), so keep it short, lowercase, with dashes.
//   4. Set "available" to false once something sells — it will then show
//      as "Sold" automatically everywhere on the site.
// ---------------------------------------------------------------------------

export type Painting = {
  slug: string;
  title: string;
  image: string; // path inside /public, e.g. "/images/paintings/coastline.jpg"
  size: string; // e.g. "50 x 70 cm"
  medium: string; // e.g. "Oil on canvas"
  price: number; // in EUR, no currency symbol — formatted automatically
  available: boolean; // false = shows as "Sold"
  description: string; // short description shown on the shop grid
  story: string; // longer story / inspiration, shown on the detail page
  featured?: boolean; // shown in "Featured Works" on the home page
};

export const paintings: Painting[] = [
  {
    slug: "three-peaks",
    title: "Three Peaks",
    image: "/images/paintings/placeholder-1.jpg", // [PAINTING IMAGE]
    size: "60 x 80 cm",
    medium: "Oil on canvas",
    price: 480, // [PAINTING PRICE]
    available: true,
    description: "A mountain view, painted for a family who once became mine.",
    story:
      "This painting shows the Drei Zinnen. Look closely and you'll find four small birds worked into the peaks — one for each person in the family I painted it for. Most people miss them the first time.",
    featured: true,
  },
  {
    slug: "morning-window",
    title: "Morning Window",
    image: "/images/paintings/placeholder-2.jpg",
    size: "40 x 50 cm",
    medium: "Acrylic on canvas",
    price: 260,
    available: true,
    description: "Soft morning light across a quiet room.",
    story:
      "Painted on a slow morning when the light was doing something I couldn't ignore. Sometimes a painting starts with nothing more than that.",
    featured: true,
  },
  {
    slug: "coastal-path",
    title: "Coastal Path",
    image: "/images/paintings/placeholder-3.jpg",
    size: "50 x 70 cm",
    medium: "Oil on canvas",
    price: 420,
    available: false,
    description: "A path along the coast, somewhere between two seasons.",
    story:
      "One of the first larger landscapes I finished. It sold within a week of being posted, which is still hard for me to fully believe.",
    featured: true,
  },
  {
    slug: "quiet-portrait",
    title: "Quiet Portrait",
    image: "/images/paintings/placeholder-4.jpg",
    size: "30 x 40 cm",
    medium: "Oil on canvas board",
    price: 220,
    available: true,
    description: "A study in expression, painted from a single reference photo.",
    story:
      "A personal study, not a commission — but a good example of how I approach portraits: fewer details, more feeling.",
    featured: false,
  },
];

export const featuredPaintings = paintings.filter((p) => p.featured);
