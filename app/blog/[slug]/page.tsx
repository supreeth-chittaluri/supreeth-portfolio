import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../../blog-data";
import { ExternalLink, PageShell } from "../../components";
import { sitePath } from "../../site-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.summary };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: new Date(post.date).toISOString(),
    description: post.summary,
    author: { "@type": "Person", name: "Supreeth Chittaluri" },
    url: `https://supreethchittaluri.vercel.app/blog/${post.slug}/`
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="article-shell">
        <header className="article-header">
          <Link href={sitePath("/blog/")} className="back-link">← All articles</Link>
          <p className="blog-meta">{post.category} · {post.date} · {post.readTime}</p>
          <h1>{post.title}</h1>
          <p>{post.summary}</p>
        </header>

        <div className="article-body">
          {post.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.points ? (
                <div className="article-evidence">
                  {section.points.map((point) => <span key={point}>{point}</span>)}
                </div>
              ) : null}
            </section>
          ))}
        </div>

        <footer className="article-footer">
          {post.projectSlug ? <Link className="button button-primary" href={sitePath(`/projects/${post.projectSlug}/`)}>View the project</Link> : null}
          {post.externalLink ? <ExternalLink href={post.externalLink}>View the event</ExternalLink> : null}
          <Link className="button" href={sitePath("/blog/")}>More articles</Link>
        </footer>
      </article>
    </PageShell>
  );
}
