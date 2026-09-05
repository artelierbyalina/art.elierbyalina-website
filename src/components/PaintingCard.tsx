import Image from "next/image";
import Link from "next/link";
import type { Painting } from "@/data/paintings";

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);
}

export default function PaintingCard({
  painting,
  showViewLabel = false,
}: {
  painting: Painting;
  showViewLabel?: boolean;
}) {
  return (
    <Link href={`/shop/${painting.slug}`} className="group block">
      <div className="relative aspect-[4/5] overflow-hidden bg-paper">
        <Image
          src={painting.image}
          alt={`${painting.title} — ${painting.medium}, ${painting.size}`}
          fill
          sizes="(min-width: 768px) 33vw, 100vw"
          className={`object-cover transition-transform duration-700 ease-soft group-hover:scale-[1.03] ${
            painting.available ? "" : "grayscale-[35%] opacity-80"
          }`}
        />
        {!painting.available && (
          <span className="absolute top-3 left-3 bg-cream/95 text-sold text-xs px-3 py-1 tracking-wide">
            Sold
          </span>
        )}
      </div>

      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <h3 className="font-serif text-lg leading-tight">{painting.title}</h3>
          <p className="text-sm text-ink/55 mt-1">
            {painting.size} · {painting.medium}
          </p>
        </div>
        <div className="text-right shrink-0">
          <p className={`text-sm ${painting.available ? "text-ink" : "text-ink/40 line-through"}`}>
            {formatPrice(painting.price)}
          </p>
        </div>
      </div>

      {showViewLabel && (
        <span className="mt-3 inline-block text-sm text-clay-dark border-b border-clay-dark/40 group-hover:border-clay-dark transition-colors">
          View painting
        </span>
      )}
    </Link>
  );
}
