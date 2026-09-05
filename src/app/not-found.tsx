import Button from "@/components/Button";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-6xl px-6 md:px-10 py-32 text-center">
      <h1 className="font-serif text-4xl">Page not found</h1>
      <p className="mt-4 text-ink/60">The page you're looking for doesn't exist, or the painting may have moved.</p>
      <Button href="/" className="mt-8">
        Back to home
      </Button>
    </section>
  );
}
