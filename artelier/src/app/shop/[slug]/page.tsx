import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Button from "@/components/Button";
import { formatPrice } from "@/components/PaintingCard";
import { paintings } from "@/data/paintings";
import { site } from "@/data/site";

export function generateStaticParams() {
  return paintings.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const painting = paintings.find((p) => p.slug === params.slug);
  if (!painting) return {};
  return {
    title: painting.title,
    description: painting.description,
  };
}

export default function PaintingPage({ params }: { params: { slug: string } }) {
  const painting = paintings.find((p) => p.slug === params.slug);
  if (!painting) notFound();

  const requestSubject = encodeURIComponent(`Inquiry about "${painting.title}"`);
  const requestBody = encodeURIComponent(
    `Hi Alina,\n\nI'm interested in "${painting.title}" (${painting.size}, ${formatPrice(
      painting.price
    )}).\n\n`
  );

  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-14 pb-24">
      <a href="/shop" className="text-sm text-ink/60 hover:text-clay-dark transition-colors">
        ← Back to shop
      </a>

      <div className="mt-8 grid md:grid-cols-2 gap-12 md:gap-16">
        <div className="relative aspect-[4/5] bg-paper overflow-hidden">
          <Image
            src={painting.image}
            alt={`${painting.title} — ${painting.medium}, ${painting.size}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className={`object-cover ${painting.available ? "" : "grayscale-[35%] opacity-80"}`}
            priority
          />
          {!painting.available && (
            <span className="absolute top-4 left-4 bg-cream/95 text-sold text-xs px-3 py-1 tracking-wide">
              Sold
            </span>
          )}
        </div>

        <div className="max-w-md">
          <h1 className="font-serif text-4xl">{painting.title}</h1>
          <p className="mt-2 text-ink/60">
            {painting.size} · {painting.medium}
          </p>
          <p className={`mt-4 text-xl ${painting.available ? "" : "text-ink/40 line-through"}`}>
            {formatPrice(painting.price)}
          </p>

          <p className="mt-6 text-ink/75 leading-relaxed">{painting.description}</p>

          <div className="mt-8 pt-8 border-t border-stone/60">
            <h2 className="font-serif text-lg italic">The story behind it</h2>
            <p className="mt-3 text-ink/75 leading-relaxed">{painting.story}</p>
          </div>

          <div className="mt-8 pt-8 border-t border-stone/60 text-sm text-ink/65 space-y-2">
            <p>Carefully packaged and insured for shipping. [SHIPPING DETAILS / RATES]</p>
            <p>Ships from {site.city}. Delivery times vary by destination.</p>
          </div>

          <div className="mt-8">
            {painting.available ? (
              <Button href={`mailto:${site.email}?subject=${requestSubject}&body=${requestBody}`}>
                Inquire to Buy
              </Button>
            ) : (
              <p className="text-sm text-ink/50">
                This piece has found its home. Interested in something similar?{" "}
                <a href="/commissions" className="border-b border-ink hover:border-clay hover:text-clay-dark transition-colors">
                  Commission your own
                </a>
                .
              </p>
            )}
          </div>

          {/* When you're ready to accept payments directly, replace the
              mailto: link above with a checkout link/button from Stripe or
              Shopify — see the README for step-by-step guidance. */}
        </div>
      </div>
    </section>
  );
}
