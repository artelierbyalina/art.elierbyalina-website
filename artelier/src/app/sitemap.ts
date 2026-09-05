import type { MetadataRoute } from "next";
import { paintings } from "@/data/paintings";

// TODO: replace example.com with your real domain once you connect one.
const BASE_URL = "https://example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/shop", "/commissions", "/about", "/contact"].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const paintingRoutes = paintings.map((p) => ({
    url: `${BASE_URL}/shop/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...paintingRoutes];
}
