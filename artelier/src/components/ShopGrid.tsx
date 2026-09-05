"use client";

import { useState } from "react";
import PaintingCard from "@/components/PaintingCard";
import { paintings } from "@/data/paintings";

type Filter = "all" | "available" | "sold";

export default function ShopGrid() {
  const [filter, setFilter] = useState<Filter>("all");

  const visible = paintings.filter((p) => {
    if (filter === "available") return p.available;
    if (filter === "sold") return !p.available;
    return true;
  });

  const filters: { key: Filter; label: string }[] = [
    { key: "all", label: "All" },
    { key: "available", label: "Available" },
    { key: "sold", label: "Sold" },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 pt-14 pb-24">
      <div className="max-w-xl">
        <h1 className="font-serif text-4xl md:text-5xl">Shop Original Art</h1>
        <p className="mt-4 text-ink/70">
          Every piece here is a one-of-a-kind original — once it's sold, it's gone for good.
          Looking for something specific instead?{" "}
          <a href="/commissions" className="border-b border-ink hover:border-clay hover:text-clay-dark transition-colors">
            Start a commission
          </a>
          .
        </p>
      </div>

      <div className="flex gap-6 mt-10 border-b border-stone/60">
        {filters.map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`pb-3 text-sm transition-colors ${
              filter === f.key
                ? "text-ink border-b-2 border-clay-dark -mb-px"
                : "text-ink/50 hover:text-ink"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="mt-16 text-ink/60">Nothing here yet — check back soon.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-14 mt-12">
          {visible.map((painting) => (
            <PaintingCard key={painting.slug} painting={painting} />
          ))}
        </div>
      )}
    </section>
  );
}
