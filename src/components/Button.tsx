import Link from "next/link";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export default function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-7 py-3 text-[15px] tracking-wide transition-colors duration-300 ease-soft";

  const styles =
    variant === "solid"
      ? "bg-ink text-cream hover:bg-clay-dark"
      : "border border-ink text-ink hover:border-clay hover:text-clay-dark";

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
