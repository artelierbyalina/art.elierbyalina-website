import Image from "next/image";
import Button from "@/components/Button";
import PaintingCard from "@/components/PaintingCard";
import InstagramSection from "@/components/InstagramSection";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";
import { featuredPaintings } from "@/data/paintings";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 pt-14 md:pt-20">
        <div className="max-w-2xl fade-up">
          <h1 className="font-serif text-[2.5rem] leading-[1.08] md:text-6xl md:leading-[1.05]">
            {site.hero.headline}
          </h1>
          <p className="mt-6 text-lg text-ink/70 max-w-md">{site.hero.subheadline}</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button href={site.hero.primaryCta.href}>{site.hero.primaryCta.label}</Button>
            <Button href={site.hero.secondaryCta.href} variant="outline">
              {site.hero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 md:px-10 mt-10 md:mt-14">
        <div
          className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-paper overflow-hidden fade-up"
          style={{ animationDelay: "150ms" }}
        >
          <Image
            src="/images/hero-painting.jpg" // [PAINTING IMAGE] — your strongest hero shot
            alt="Featured hand-painted artwork by Alina"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* FEATURED WORKS */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-24">
        <Reveal>
          <div className="flex items-end justify-between gap-6 mb-10">
            <h2 className="font-serif text-3xl md:text-4xl">Featured Works</h2>
            <a href="/shop" className="text-sm border-b border-ink pb-0.5 hover:border-clay hover:text-clay-dark transition-colors hidden sm:inline-block">
              View all
            </a>
          </div>
        </Reveal>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {featuredPaintings.map((painting, i) => (
            <Reveal key={painting.slug} delayMs={i * 80}>
              <PaintingCard painting={painting} showViewLabel />
            </Reveal>
          ))}
        </div>

        <a href="/shop" className="mt-10 inline-block sm:hidden text-sm border-b border-ink pb-0.5">
          View all
        </a>
      </section>

      {/* CUSTOM ART */}
      <section className="bg-paper border-y border-stone/60">
        <div className="mx-auto max-w-6xl px-6 md:px-10 py-24 grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="font-serif text-3xl md:text-4xl">{site.customArt.heading}</h2>
            <p className="mt-5 text-ink/70 max-w-md">{site.customArt.body}</p>
            <Button href={site.customArt.cta.href} className="mt-8">
              {site.customArt.cta.label}
            </Button>
          </Reveal>
          <Reveal delayMs={100}>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-ink/70">
              {site.customArt.categories.map((c) => (
                <li key={c} className="border-b border-stone/60 pb-3">
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* MY STORY */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-24">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="font-serif text-3xl md:text-4xl">{site.story.heading}</h2>
            <div className="mt-6 space-y-5 text-ink/75 leading-relaxed">
              {site.story.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <a
              href="/about"
              className="mt-6 inline-block text-sm border-b border-ink pb-0.5 hover:border-clay hover:text-clay-dark transition-colors"
            >
              Read the full story
            </a>
          </div>
        </Reveal>
      </section>

      {/* INSTAGRAM */}
      <InstagramSection />

      {/* FINAL CTA */}
      <section className="mx-auto max-w-6xl px-6 md:px-10 py-24 text-center">
        <Reveal>
          <h2 className="font-serif text-3xl md:text-5xl max-w-2xl mx-auto">
            {site.finalCta.heading}
          </h2>
          <Button href={site.finalCta.cta.href} className="mt-8">
            {site.finalCta.cta.label}
          </Button>
        </Reveal>
      </section>
    </>
  );
}
