import type { MetadataRoute } from "next";
import { blogPosts } from "./blog-data";
import { projects } from "./site-data";

const origin = "https://supreethchittaluri.vercel.app";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/experience", "/projects", "/blog", "/stack", "/about"];
  return [
    ...pages.map((path) => ({ url: `${origin}${path}/`, changeFrequency: "monthly" as const, priority: path === "" ? 1 : 0.8 })),
    ...projects.filter((project) => project.published).map((project) => ({ url: `${origin}/projects/${project.slug}/`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...blogPosts.map((post) => ({ url: `${origin}/blog/${post.slug}/`, changeFrequency: "monthly" as const, priority: 0.7 }))
  ];
}
