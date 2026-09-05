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
  city: "Duesseldorf", // e.g. "Freiburg, Germany"
  email: "alinareibold@gmail.com",
  instagramHandle: "@art.elierbyalina",
  instagramUrl: "https://instagram.com/art.elierbyalina",

  nav: [
    { label: "Shop", href: "/shop" },
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
      "Hand-painted originals and custom commissions by Alina, an artist based in Duesseldorf.",
    primaryCta: { label: "Shop Original Art", href: "/shop" },
    secondaryCta: { label: "Create a Custom Painting", href: "/commissions" },
  },

  customArt: {
    heading: "Custom Art",
    body: "Every piece starts with something real — a face, a pet, a place you keep going back to in your mind. Send me the memory, and I'll turn it into a painting that stays.",
    categories: [
      "Portraits",
  
      "Pets",
      "Places",
      "Travel memories",
      "Meaningful moments",

    ],
    cta: { label: "Commission a painting", href: "/commissions" },
  },

  story: {
    heading: "My Story",
    // Honest, first-person, not overly polished — keep edits in this voice.
    paragraphs: [
      "Hey, I am Alina, a 20 zear old acrylic artist from Germany! I make atmospheric paintings that draw you in as soon as you take a glance ",
      "I'm about to start university, and I'm building art.elier alongside it — not as a side project, but as the thing I actually want my life to be built around. Slowly, one commission at a time.",
      "The paintings that mean the most to me are the ones that carry someone else's memory. A view from a family holiday. A pet that isn't around anymore. A place two people call home. If you're looking for something like that, I'd love to hear about it.",
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
      { name: "Portraits", description: "A face you don't want to forget." },
      { name: "Pets", description: "The ones who feel like family." },
      { name: "Places", description: "A view, a street, a home." },
      { name: "Memories", description: "A moment worth keeping around." },
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
          "I'll paint by hand and check in with you along the way, especially for portraits and pets.",
      },
      {
        step: "04",
        title: "Your artwork comes home",
        description:
          "Once it's finished and fully dry, it's carefully packaged and shipped to you.",
      },
    ],
  },

  about: {
    heading: "About me",
    paragraphs: [
      "I'm Alina — I paint, and I'm trying to build a life around it.",
      "I picked up a brush before I could really explain why. What kept me painting was realizing that a picture could hold something a photo couldn't quite reach — the feeling of a place, not just how it looked.",
      "I paint mostly landscapes, portraits, and pieces built around a personal story. One of the paintings I'm proudest of shows the Three Peaks for a lovely family — with four small, half-hidden birds worked into the peaks, one for each person in the family. Almost no one notices them at first. That's usually the point.",
    
      "If you're here because a painting means something to you too, you're in the right place.",
    ],
    photoCaptions: [
      "[PHOTO: in the studio]",
      "[PHOTO: Work in progress]",
      "[PHOTO: painting outdoors]",
    ],
  },

  contact: {
    heading: "Have an idea for a painting?",
    subheading: "I'd love to hear it.",
  },

  seo: {
    metaTitle: "art.elier by Alina — Original & Custom Paintings",
    metaDescription:
      "Hand-painted original artworks and custom commission paintings by Alina — portraits, pets, places, and personal memories, painted by hand and shipped worldwide.",
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
