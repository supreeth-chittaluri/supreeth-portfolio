import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "../blog-data";
import { PageIntro, PageShell } from "../components";
import { sitePath } from "../site-data";

export const metadata: Metadata = {
  title: "Blog",
  description: "What broke, what changed, and what Supreeth Chittaluri learned while building software."
};

export default function BlogPage() {
  const posts = [...blogPosts].sort((left, right) => Date.parse(right.date) - Date.parse(left.date));

  return (
    <PageShell>
      <PageIntro eyebrow="04 · Engineering notes" title="Blog" />
      <section className="content-shell blog-directory" aria-label="Blog posts">
        {posts.map((post, index) => (
          <Link className="blog-row" href={sitePath(`/blog/${post.slug}/`)} key={post.slug}>
            <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
            <span className="blog-row-copy">
              <span className="blog-meta">{post.category} · {post.date} · {post.readTime}</span>
              <strong>{post.title}</strong>
              <span>{post.summary}</span>
            </span>
            <span className="blog-row-action">Read article →</span>
          </Link>
        ))}
      </section>
    </PageShell>
  );
}
