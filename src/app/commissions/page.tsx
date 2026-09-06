import type { Metadata } from "next";
import CommissionForm from "@/components/CommissionForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Commissions",
  description:
    "Commission a custom hand-painted artwork — places, pets, personal memories or painted objects, made just for you.",
};

export default function CommissionsPage() {
  return (
    <section className="pb-24">
      <div className="mx-auto max-w-6xl px-6 md:px-10 pt-14">
        <h1 className="font-serif text-4xl md:text-5xl max-w-xl">{site.commissions.heading}</h1>
        <p className="mt-5 text-ink/70 max-w-md">{site.commissions.intro}</p>
      </div>

      {/* Categories */}
      <div className="mx-auto max-w-6xl px-6 md:px-10 mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {site.commissions.categories.map((c) => (
          <div key={c.name} className="border-t border-stone/60 pt-4">
            <h3 className="font-serif text-lg">{c.name}</h3>
            <p className="mt-1 text-sm text-ink/60">{c.description}</p>
          </div>
        ))}
      </div>

      {/* Process — a genuine sequence, so numbering earns its place here */}
      <div className="mx-auto max-w-6xl px-6 md:px-10 mt-24">
        <h2 className="font-serif text-3xl md:text-4xl">How it works</h2>
        <div className="mt-10 grid md:grid-cols-4 gap-10 md:gap-6">
          {site.commissions.process.map((step) => (
            <div key={step.step}>
              <span className="font-serif text-3xl text-clay-dark">{step.step}</span>
              <h3 className="mt-3 text-lg">{step.title}</h3>
              <p className="mt-2 text-sm text-ink/65 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Form */}
      <div className="mx-auto max-w-2xl px-6 md:px-10 mt-24">
        <h2 className="font-serif text-3xl mb-8">Start your commission</h2>
        <CommissionForm />
      </div>
    </section>
  );
}
