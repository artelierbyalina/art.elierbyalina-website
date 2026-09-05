"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-stone/60">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
            <span className="font-serif text-2xl italic">{site.brandName}</span>
            <span className="font-sans text-xs text-ink/60">{site.brandSuffix}</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-9">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-[15px] text-ink/80 hover:text-clay-dark transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-soft border-t border-stone/60 ${
          open ? "max-h-72" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4 bg-cream">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-sans text-lg text-ink/85"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
