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
        {[
          { 
            image: "/images/reel_1.jpeg",
            url: "https://instagram.com/reel/DboXvNfI2zs/",

          },
          {
            image: "/images/reel_2.jpeg",
            url: "https://instagram.com/reel/Dcv7f--IMu5/",
          },
          { 
            image: "/images/reel_3.jpeg",
            url: "https://instagram.com/reel/Dc3xo9toOL4/",
          },
          {
            image: "/images/reel_4.jpeg",
            url: "https://instagram.com/reel/DZE9-AmIhP0/",
          },
        ].map((post,i) => (
          <a
          key={i}
          href={post.url}
          target="_blank"
          rel="noopener noreferrer"
          className="aspect-square overflow-hidden border border-stone/50"
          >
            <img
            src={post.image}
            alt={'Behind the scenes reel ${i + 1}'}
            className="w-full h-full objecr-cover transition-transform duration-500 hover:scale-105"
            />
          </a>
      
        ))}
      </div>
    </section>
  );
}
