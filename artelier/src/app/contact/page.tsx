import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Alina about a painting, a commission, or a question.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 md:px-10 pt-14 pb-24">
      <h1 className="font-serif text-4xl md:text-5xl">{site.contact.heading}</h1>
      <p className="mt-3 text-xl text-ink/60 font-serif italic">{site.contact.subheading}</p>

      <div className="mt-12">
        <ContactForm />
      </div>

      <div className="mt-14 pt-8 border-t border-stone/60 text-sm text-ink/60">
        <p>
          Prefer email? Reach me directly at{" "}
          <a href={`mailto:${site.email}`} className="text-ink border-b border-ink hover:border-clay hover:text-clay-dark transition-colors">
            {site.email}
          </a>
          .
        </p>
        <p className="mt-2">
          Instagram:{" "}
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink border-b border-ink hover:border-clay hover:text-clay-dark transition-colors"
          >
            {site.instagramHandle}
          </a>
        </p>
      </div>
    </section>
  );
}
