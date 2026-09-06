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
    slug: "coffee-with-a-view",
    title: "coffee wirh a view",
    image: "/images/paintings/IMG_View.jpeg", // [PAINTING IMAGE]
    size: "60 x 80 cm",
    medium: "Acrylics on canvas",
    price: 480, // [PAINTING PRICE]
    available: true,
    description: "would you like a cup?",
    story:
      "This painting shows the view out of a window on a beautiful fairy tale landscape",
    featured: true,
  },
  {
    slug: "Between-sky-and-sea",
    title: "Between sky and sea",
    image: "/images/paintings/IMG_Boot.jpeg",
    size: "50 x 70 cm",
    medium: "Acrylic on canvas",
    price: 400,
    available: true,
    description: "Where the edges of the horizon blend.",
    story:
      "only for a moment in the evening, there is a time where the sky meets the sea and they lend seamlessly",
    featured: true,
  },
  {
    slug: "city-heights",
    title: "city heights",
    image: "/images/paintings/IMG_city.jpeg",
    size: "70 x 100 cm",
    medium: "Acrylic on canvas",
    price: 800,
    available: false,
    description: "A path along the city center.",
    story:
      "The first and still the largest painting I ever did",
    featured: true,
  },

  
  { 
    slug: "comissioned-painting-kids",
    title: "commissioned painting kids",
    image: "/images/paintings/IMG_kids.jpeg",
    size: "50 x 70 cm",
    medium: "Acrylic on canvas", 
    price: 400,
    available: false,
    description: "comissioned family painting",
    story: "A commissioned piece I did for my hostfamiliy",
    featured: false,

  },


  {
    slug: "still-life-in-violet",
    title: "still life in violet",
    image: "/images/paintings/IMG_flowers.jpeg",
    size: "60 x 60 cm",
    medium: "Acrylic on canvas",
    price: 300,
    available: false,
    description: "A violet flower still life",
    story: 
    "This painting was made during my stay as an Au-Pair in Amsterdam. It made my room feel like home.",
    featured: false,

  },


  {
    slug: "chasing-the-last-light",
    title: "Chasing the last light",
    image: "/images/paintings/IMG_5398.jpeg",
    size: "50 x 70 cm",
    medium: "Acrylic on canvas",
    price: 300,
    available: true,
    description: "A ship trying to see the last rays of sun.",
    story: 
     "This painting was made in a really hard time of my life and it was meant to give me back some hope, by bringing me back my passion for painting.",
    featured: false,
  },

];

export const featuredPaintings = paintings.filter((p) => p.featured);
