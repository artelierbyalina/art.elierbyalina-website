import type { Metadata } from "next";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Alina — the artist behind art.elier.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-14 pb-24">
      <h1 className="font-serif text-4xl md:text-5xl">{site.about.heading}</h1>

      <div className="mt-12 grid md:grid-cols-[1.1fr_0.9fr] gap-14">
        <div className="max-w-prose space-y-5 text-ink/75 leading-relaxed order-2 md:order-1">
          {site.about.paragraphs.map((p, i) => (
            <p key={i} className={i === 0 ? "font-serif text-2xl text-ink not-italic" : ""}>
              {p}
            </p>
          ))}
        </div>

        <div className="space-y-6 order-1 md:order-2">
          {site.about.photoCaptions.map((caption, i) => (
            <div
              key={i}
              className={`relative bg-paper border border-stone/50 flex items-center justify-center text-xs text-ink/40 ${
                i === 0 ? "aspect-[4/5]" : "aspect-[3/2]"
              }`}
            >
              {caption}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
