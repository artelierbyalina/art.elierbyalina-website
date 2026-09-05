import { site } from "@/data/site";

export default function InstagramSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-20 border-t border-stone/60">
      <div className="grid md:grid-cols-[1fr_auto] items-end gap-6">
        <div>
          <h2 className="font-serif text-3xl md:text-4xl">{site.instagramSection.heading}</h2>
          <p className="mt-3 text-ink/70 max-w-md">{site.instagramSection.body}</p>
        </div>
        <a
          href={site.instagramSection.cta.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm border-b border-ink pb-0.5 hover:border-clay hover:text-clay-dark transition-colors w-fit"
        >
          {site.instagramSection.cta.label}
        </a>
      </div>

      {/* Placeholder grid — replace each block with an <Image> of a real
          Instagram post/reel still once you have the URLs. Until then this
          keeps the section visually intact. */}
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="aspect-square bg-paper border border-stone/50 flex items-center justify-center text-xs text-ink/35"
          >
            [INSTAGRAM POST {i}]
          </div>
        ))}
      </div>
    </section>
  );
}
