import type { Metadata } from "next";
import ShopGrid from "@/components/ShopGrid";

export const metadata: Metadata = {
  title: "Explore Original Art",
  description:
    "Browse original hand-painted artworks by Alina — landscapes, portraits, and personal pieces available to buy.",
};

export default function ShopPage() {
  return <ShopGrid />;
}
