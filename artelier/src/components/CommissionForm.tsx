"use client";

import { useState } from "react";
import { site } from "@/data/site";

const inputClasses =
  "w-full bg-paper border border-stone/70 px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:border-clay-dark transition-colors";

const labelClasses = "block text-sm text-ink/70 mb-2";

export default function CommissionForm() {
  const [submitted, setSubmitted] = useState(false);

  // NOTE FOR ALINA: this form does not send anything on its own yet — see
  // the README section "Connecting the forms" for the two easiest options
  // (Formspree or a simple mailto fallback) to make it actually deliver
  // submissions to your inbox.
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-paper border border-stone/60 px-8 py-14 text-center">
        <h3 className="font-serif text-2xl">Thank you!</h3>
        <p className="mt-3 text-ink/70 max-w-sm mx-auto">
          Your request has been received. I'll get back to you at the email address you provided
          within a few days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses} htmlFor="name">
            Name
          </label>
          <input className={inputClasses} id="name" name="name" type="text" required />
        </div>
        <div>
          <label className={labelClasses} htmlFor="email">
            Email
          </label>
          <input className={inputClasses} id="email" name="email" type="email" required />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses} htmlFor="type">
            Type of painting
          </label>
          <select className={inputClasses} id="type" name="type" defaultValue="">
            <option value="" disabled>
              Choose one
            </option>
            {site.commissions.categories.map((c) => (
              <option key={c.name} value={c.name}>
                {c.name}
              </option>
            ))}
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className={labelClasses} htmlFor="size">
            Desired size
          </label>
          <input
            className={inputClasses}
            id="size"
            name="size"
            type="text"
            placeholder="e.g. 50 x 70 cm"
          />
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="motif">
          Desired motif
        </label>
        <input
          className={inputClasses}
          id="motif"
          name="motif"
          type="text"
          placeholder="What should the painting show?"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className={labelClasses} htmlFor="deadline">
            Desired deadline
          </label>
          <input className={inputClasses} id="deadline" name="deadline" type="text" placeholder="Flexible / specific date" />
        </div>
        <div>
          <label className={labelClasses} htmlFor="budget">
            Budget
          </label>
          <input className={inputClasses} id="budget" name="budget" type="text" placeholder="e.g. [PAINTING PRICE]" />
        </div>
      </div>

      <div>
        <label className={labelClasses} htmlFor="photos">
          Reference photos
        </label>
        <input
          className={`${inputClasses} file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-ink file:text-cream file:text-sm`}
          id="photos"
          name="photos"
          type="file"
          accept="image/*"
          multiple
        />
      </div>

      <div>
        <label className={labelClasses} htmlFor="message">
          Message
        </label>
        <textarea className={inputClasses} id="message" name="message" rows={5} placeholder="Tell me a bit about the story behind this idea." />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center px-8 py-3.5 bg-ink text-cream text-[15px] tracking-wide hover:bg-clay-dark transition-colors duration-300"
      >
        Request a Commission
      </button>
    </form>
  );
}
