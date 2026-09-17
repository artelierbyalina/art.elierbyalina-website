"use client";

import { useState } from "react";

const inputClasses =
  "w-full bg-paper border border-stone/70 px-4 py-3 text-ink placeholder:text-ink/40 focus:outline-none focus:border-clay-dark transition-colors";
const labelClasses = "block text-sm text-ink/70 mb-2";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzebjaoq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  }

  if (submitted) {
    return (
      <div className="bg-paper border border-stone/60 px-8 py-14 text-center">
        <h3 className="font-serif text-2xl">Message sent</h3>
        <p className="mt-3 text-ink/70">I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className={labelClasses} htmlFor="name">
          Name
        </label>
        <input
          className={inputClasses}
          id="name"
          name="name"
          type="text"
          required
        />
      </div>

      <div>
        <label className={labelClasses} htmlFor="email">
          Email
        </label>
        <input
          className={inputClasses}
          id="email"
          name="email"
          type="email"
          required
        />
      </div>

      <div>
        <label className={labelClasses} htmlFor="message">
          Message
        </label>
        <textarea
          className={inputClasses}
          id="message"
          name="message"
          rows={6}
          required
        />
      </div>

      <div>
        <label className={labelClasses} htmlFor="image">
          Image (optional)
        </label>
        <input
          className={`${inputClasses} file:mr-4 file:py-2 file:px-4 file:border-0 file:bg-ink file:text-cream file:text-sm`}
          id="image"
          name="image"
          type="file"
          accept="image/*"
        />
      </div>

      {error && (
        <p className="text-sm text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="inline-flex items-center justify-center px-8 py-3.5 bg-ink text-cream text-[15px] tracking-wide hover:bg-clay-dark transition-colors duration-300 disabled:opacity-50"
      >
        {sending ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}