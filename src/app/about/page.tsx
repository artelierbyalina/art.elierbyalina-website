import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Alina — the artist behind art.elier.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-14 pb-24">
      <h1 className="font-serif text-4xl md:text-5xl">
        {site.about.heading}
        </h1>

      <div className="mt-12 grid md:grid-cols-[1.1fr_0.9fr] gap-14">

        <div className="max-w-prose space-y-5 text-ink/75 leading-relaxed order-2 md:order-1">
          {site.about.paragraphs.map((p, i) => (
            <p 
            
              key={i} 
              className={
                i === 0 
                ? "font-serif text-2xl text-ink noy-italic" 
                : ""
              } 

              >

              {p}
            </p>
          ))}

        </div>

        <div className="space-y-6 order-1 md:order-2">
          {[ 
            "/images/about-studio.jpg",
            "/images/about-work.jpg",
            "/images/about-me.jpg",
          ].map((image, i) => (
            <div
               key={i}
               className="relative overflow-hidden border border-stone/50"

            >

              <img
                src={image}
                alt={'About Alina ${i + 1}'}
                className="w-full h-full object-cover"
             />
           </div>
          ))}

     </div>

     </div>

     </section>

        );
      }


