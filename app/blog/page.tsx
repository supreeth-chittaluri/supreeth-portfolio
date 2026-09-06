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
  return (
    <PageShell>
      <PageIntro eyebrow="03 · Blog" title="What broke and what I learned" description="Notes from building systems, questioning the first answer, and tracing a bug far enough to understand it." />
      <section className="content-shell blog-directory" aria-label="Blog posts">
        {blogPosts.map((post, index) => (
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
