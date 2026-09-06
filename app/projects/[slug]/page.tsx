import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "../../blog-data";
import { ExternalLink, GitHubIcon, PageShell } from "../../components";
import { projects, sitePath } from "../../site-data";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.filter((project) => project.published).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.published);
  if (!project) return {};
  return { title: project.title, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.published);
  if (!project) notFound();
  const relatedPost = blogPosts.find((post) => post.projectSlug === project.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.description,
    author: { "@type": "Person", name: "Supreeth Chittaluri" },
    applicationCategory: project.category,
    url: `https://supreethchittaluri.vercel.app/projects/${project.slug}/`
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className="project-detail">
        <header className="detail-hero">
          <Link href={sitePath("/projects/")} className="back-link">← All projects</Link>
          <p className="eyebrow">{project.category}</p>
          <h1>{project.title}</h1>
          <p className="detail-summary">{project.summary}</p>
          <div className="button-row">
            {project.live ? <ExternalLink href={project.live} primary>Live application</ExternalLink> : null}
            {project.github ? <ExternalLink href={project.github}><GitHubIcon />Source code</ExternalLink> : null}
          </div>
        </header>

        {project.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img className="project-detail-image" src={sitePath(project.image)} alt={project.imageAlt ?? ""} />
        ) : null}

        <div className="project-narrative">
          <section><p className="eyebrow">What it does</p><h2>The project</h2><p>{project.description}</p></section>
          <section><p className="eyebrow">Why I built it</p><h2>The personal connection</h2><p>{project.why}</p></section>
          <section><p className="eyebrow">What broke</p><h2>The hardest problem</h2><p>{project.challenge}</p></section>
          <section><p className="eyebrow">What changed</p><h2>The solution</h2><p>{project.solution}</p></section>
          <section><p className="eyebrow">Evidence</p><h2>How I verified it</h2><p>{project.verification}</p></section>
        </div>

        <section className="project-proof" aria-label="Project evidence">
          {project.evidence.map((item) => <span key={item}>{item}</span>)}
        </section>

        <section className="stack-strip">
          <p className="eyebrow">Built with</p>
          <p>{project.stack.join(" · ")}</p>
        </section>

        {relatedPost ? (
          <Link className="related-story" href={sitePath(`/blog/${relatedPost.slug}/`)}>
            <span><span className="eyebrow">From the blog</span><strong>{relatedPost.title}</strong></span>
            <span>Read the story →</span>
          </Link>
        ) : null}
      </article>
    </PageShell>
  );
}
