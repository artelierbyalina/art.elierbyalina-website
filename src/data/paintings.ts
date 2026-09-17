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
    slug: "where-the-river-leads",
    title: "Where the river leads",
    image: "/images/paintings/IMG_3125.jpeg",
    size: "50 x 70 cm",
    medium: "Acrylic on canvas",
    price: 530,
    available: true,
    description: "A peaceful forest path where sunlight breaks through the trees, inviting you to slow down and breathe.",
    story: "This painting is about finding your way, even when you don't know exactly where the path will lead. The river flowing through the forest represents the quiet movement of life — always changing, but always finding its way forward. The sunlight breaking through the trees becomes a symbol of clarity and hope, reminding us that even in the most hidden places, there is always a way for the light to come through. I wanted this piece to feel like a moment of stillness — a place to pause, breathe, and keep going.",
    featured: true,
  },
  {
    slug: "coffee-with-a-view",
    title: "coffee wirh a view",
    image: "/images/paintings/IMG_View.jpeg", // [PAINTING IMAGE]
    size: "60 x 80 cm",
    medium: "Acrylics on canvas",
    price: 590, // [PAINTING PRICE]
    available: true,
    description: "would you like to take a seat?",
    story: "This painting was inspired by the simple beauty of a quiet morning — a warm cup of coffee, fresh flowers, and a view that makes you want to stay a little longer. Outside the window, the little castle and green landscape create a world that feels almost like a fairytale. I wanted this piece to capture that peaceful feeling of being completely at home, while still dreaming about the world beyond the window.",
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
    description: "When the boarders of the horizon blend.",
    story: "This painting was created to capture a feeling of peace — that quiet moment when there is nowhere you need to be and nothing you need to rush towards. The soft pink sky, turquoise water, and little boat create a world that feels calm, hopeful, and almost dreamlike. To me, it is a reminder that sometimes the most beautiful moments are the quiet ones.",
    featured: true,
  },
  {
    slug: "city-heights",
    title: "city heights",
    image: "/images/paintings/IMG_city.jpeg",
    size: "70 x 100 cm",
    medium: "Acrylic on canvas",
    price: 1200,
    available: false,
    description: "A path along the city center.",
    story:
      "This painting was inspired by the energy of a city — the feeling of walking through a place that seems almost too big to take in at once. Towering buildings, glowing shop windows, passing people, and endless details fill every corner. I wanted the city to feel slightly unreal and overwhelming, but also exciting — like there is always something new waiting just around the corner.",
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
    story: "A commissioned piece I did for my hostfamiliy when I was an Au-Pair in the Netherlands",
    featured: false,

  },
  
  { 
    slug: "the-three-sins",
    title: "The Three Sins",
    image: "/images/paintings/IMG_2198.jpeg",
    size: "50 x 50 cm",
    medium: "Acrylic on canvas", 
    price: 0,
    available: false,
    description: "four souls, one place",
    story: "This painting was created as a symbol of home, connection, and the people who make a place special. The Three Peaks reflected in the water represent something lasting and steady, while the four birds in the sky stand for the four people who belong together. Surrounded by mountains, water, and nature, I wanted this piece to capture the feeling of having a place — and people — you can always come back to. -> this one was made as a gift",
    featured: true,

  },  
  { 
    slug: "dancing-light",
    title: "Dancing Light",
    image: "/images/paintings/IMG_5748.jpeg",
    size: "40 x 60cm",
    medium: "Acrylic on canvas", 
    price: 100,
    available: false,
    description: "Two rays gliding through the water beneath the dancing patterns of sunlight.",
    story: "This painting was inspired by the quiet beauty of the underwater world, where everything feels slower and more peaceful. The two rays move through the water beneath patterns of light reflected from the surface, creating an almost dreamlike scene. I wanted the dancing light to represent the little moments of beauty that appear unexpectedly — fleeting, gentle, and worth holding on to.",
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
    description: "Are we coming or leaving?.",
    story: 
     "This painting is about the moments when you don't quite know whether you're leaving something behind or moving towards something new. The ship caught between the cliffs and the fading sunlight became a symbol of change, uncertainty, and hope. The calm light beyond the waves suggests that even when the journey feels uncertain, there is always the possibility of finding a safe harbour — or the courage to leave one behind.",
    featured: false,
  },


  {
    slug: "forest-in-abstraction",
    title: "Forest in abstraction",
    image: "/images/paintings/IMG_3118.jpeg",
    size: "30 x 40 cm",
    medium: "Acrylic on canvas",
    price: 150,
    available: true,
    description: "A peacful morning in the forest featuring three of its inhabitants.",
    story: 
     "This painting was inspired by the feeling of family — the quiet connection, comfort, and strength that comes from knowing you belong somewhere. The three animals are a small reflection of that idea, each different but sharing the same space. The deep green of the forest represents hope, growth, and the belief that even through difficult seasons, there is always something worth holding on to. I wanted this piece to feel like a quiet reminder of the people who make a place feel like home.",
    featured: true,
  },
  {
    slug: "lavender-spring",
    title: "Lavender spring",
    image: "/images/paintings/IMG_3119.jpeg",
    size: "30 x 40 cm",
    medium: "Acrylic on canvas",
    price: 150,
    available: true,
    description: "spring blooming in lavender.",
    story:  "I wanted this painting to capture that soft, almost dreamlike feeling of spring — when everything feels lighter, quieter, and full of possibility. The lavender tones, still water, and gentle landscape came together to create a place that feels almost unreal, like a memory of a perfect spring day. If spring were a painting, I think it would look a little like this.",
     featured: false,
  },
  {
    slug: "reflection-of-your-mind",
    title: "Reflection of your Mind",
    image: "/images/paintings/IMG_3121.jpeg",
    size: "25 x 30cm",
    medium: "Acrylic on canvas",
    price: 130,
    available: true,
    description: "looking beyond what we know",
    story: 
      "This painting explores the feeling of looking beyond what we already know. The astronaut represents curiosity, while the galaxy reflected in the helmet becomes a glimpse into something distant, unknown, and full of possibility. I wanted the piece to capture that quiet sense of wonder we feel when we look up and imagine what might be out there.",
    featured: false,
  },


];

export const featuredPaintings = paintings.filter((p) => p.featured);
