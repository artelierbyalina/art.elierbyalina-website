// ---------------------------------------------------------------------------
// SITE CONFIG
// This is the file to open when you want to change contact details, the
// Instagram handle, or the short pieces of copy that appear in more than
// one place on the site (like the footer or the CTA banners).
//
// For the paintings themselves (photos, prices, sizes), go to
// src/data/paintings.ts instead.
// ---------------------------------------------------------------------------

export const site = {
  brandName: "art.elier",
  brandSuffix: "by Alina",
  artistName: "Alina",
  artistFullName: "Alina Reibold",
  city: "Düsseldorf, Germany", // e.g. "Freiburg, Germany"
  email: "alinareibold@gmail.com",
  instagramHandle: "@art.elierbyalina",
  instagramUrl: "https://instagram.com/art.elierbyalina",

  nav: [
    { label: "Explore", href: "/shop" },
    { label: "Commissions", href: "/commissions" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    // Three headline options were drafted for this brief — this is the one
    // in use. Swap in headlineAlt1 / headlineAlt2 any time by editing which
    // line is called "headline" here.
    headline: "Art that makes a space feel like yours.",
    headlineAlt1: "Art that makes a space feel like yours.",
    headlineAlt2: "A place, a person, a moment — painted to last.",
    subheadline:
      "Hand-painted originals and custom commissions by Alina, an artist based in Düsseldorf.",
    primaryCta: { label: "Explore Original Art", href: "/shop" },
    secondaryCta: { label: "Create a Custom Painting", href: "/commissions" },
  },

  customArt: {
    heading: "Custom Art",
    body: "Every piece starts with something real — a face, a pet, a place. Send me your vision, and I'll turn it into a painting that stays.",
    categories: [
      "Places",
      "Portraits",
      "Pets",
    ],
    cta: { label: "Commission a painting", href: "/commissions" },
  },

  story: {
    heading: "My Story",
    // Honest, first-person, not overly polished — keep edits in this voice.
    paragraphs: [
      "Painting is my happy place. And I want to give that joy to others with my paintings.",
      "The paintings that mean the most to me are the ones that carry someone else's story. A view from a family holiday. A pet that isn't around anymore. A place two people call home. If you're looking for something like that, I'd love to hear about it.",
    ],
  },

  instagramSection: {
    heading: "Instagram",
    body: "New paintings, works in progress, and behind-the-scenes.",
    cta: { label: "Follow my journey", href: "https://instagram.com/art.elierbyalina" },
  },

  finalCta: {
    heading: "Want a painting of your own?",
    cta: { label: "Get in touch", href: "/contact" },
  },

  commissions: {
    heading: "A painting made just for you.",
    intro:
      "Send me an idea, a photo, a place, or a memory, and I'll paint it by hand — sized and framed to fit the space you have in mind.",
    categories: [
      { name: "Places", description: "A view, a street, a home" },
      { name: "Pets", description: "The ones who feel like family." },
      { name: "Portraits", description: "A special keepsake of your loved ones." },
    ],
    process: [
      {
        step: "01",
        title: "Tell me your idea",
        description:
          "Fill out the form below with what you're picturing — even a rough idea is a good place to start.",
      },
      {
        step: "02",
        title: "Send your reference photos",
        description:
          "Upload the photos or details that capture the moment. I'll follow up if I need anything else.",
      },
      {
        step: "03",
        title: "I create your painting",
        description:
          "I'll paint and check in with you along the way.",
      },
      {
        step: "04",
        title: "Your artwork comes home",
        description:
          "Once it's finished and sealed, it's carefully packaged and shipped to you.",
      },
    ],
  },

  about: {
    heading: "About me",
    paragraphs: [

  "I'm Alina — I paint, and I'm building a life around it.",
  "I've been drawing for as long as I can remember, but I only really started painting when I was around 15. At the time, I was about to do an internship in the art studio of a theatre. I had never really worked with a paintbrush before, and the thought of showing up without knowing what I was doing made me think: I should probably practice first.",
  "So, about a week before the internship, I picked up a brush and started painting. I didn't know it at the time, but that little bit of preparation would turn into something much bigger. I never really stopped painting after that.",
  "The experience at the theatre also introduced me to something I still love today: working on a large scale. I quickly started moving from small canvases to bigger and bigger ones.",
  "Today, I paint mostly landscapes, portraits, and pieces built around a personal story. I'm especially drawn to atmosphere — the kind of light, colour, and little details that can make a painting feel like a place you could actually step into. Sometimes the meaning is obvious; sometimes it's hidden in something as small as four birds above a mountain range, each representing someone important.",
  "I'm starting university soon, and I'll be building art.elier around it — early mornings, evenings, and whatever time I can make. It's slower this way, but it's real. And I'd rather grow it properly than rush it.",
  "I don't know exactly where painting will take me yet. I just know that I want to find out — and, hopefully, build a life around it.",


    ],
    photoCaptions: [
      "[PHOTO: in the studio]",
      "[PHOTO: Work in progress]",
      "[PHOTO: Me ]",
    ],
  },

  contact: {
    heading: "Want a painting of your own?",
    subheading: "I'd love to hear about it.",
  },

  seo: {
    metaTitle: "art.elier by Alina — Original & Custom Paintings",
    metaDescription:
      "Hand-painted original artworks and custom commission paintings by Art.elierbyalina — painted by hand and shipped worldwide.",
    keywords: [
      "original paintings",
      "handmade paintings",
      "contemporary artist",
      "commission paintings",
      "custom paintings",
      "portrait paintings",
      "personalized art",
      "original artwork",
      "paintings Germany",
      "artist Germany",
      
    
    ],
  },
};


