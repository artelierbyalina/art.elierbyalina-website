import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-stone/60 mt-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-14 grid gap-10 md:grid-cols-3">
        <div>
          <div className="font-serif text-xl italic">
            {site.brandName} <span className="font-sans not-italic text-sm text-ink/60">{site.brandSuffix}</span>
          </div>
          <p className="mt-3 text-sm text-ink/60 max-w-xs">
            Hand-painted originals and custom commissions, painted in{" "}
            {site.city}.
          </p>
        </div>

        <div className="text-sm">
          <div className="text-ink/50 mb-3">Explore</div>
          <ul className="space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink/80 hover:text-clay-dark transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          <div className="text-ink/50 mb-3">Get in touch</div>
          <ul className="space-y-2">
            <li>
              <a href={`mailto:${site.email}`} className="text-ink/80 hover:text-clay-dark transition-colors">
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ink/80 hover:text-clay-dark transition-colors"
              >
                {site.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone/60 py-6">
        <p className="text-center text-xs text-ink/45">
          © {new Date().getFullYear()} {site.artistFullName}. All artwork shown remains the property of the artist until sold.
        </p>
      </div>
    </footer>
  );
}
