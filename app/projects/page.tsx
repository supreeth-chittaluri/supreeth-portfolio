import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro, PageShell } from "../components";
import { projects, sitePath } from "../site-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Systems, applied AI products, and developer tools built by Supreeth Chittaluri."
};

function ProjectContent({ project, index }: { project: (typeof projects)[number]; index: number }) {
  return (
    <>
      <span className="project-card-topline">
        <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
        <span className="eyebrow">{project.category}</span>
      </span>
      <strong className="project-card-title">{project.title}</strong>
      <span className="project-card-summary">{project.summary}</span>
      <span className="project-card-stack">{project.stack.join(" · ")}</span>
      <span className="project-card-action">{project.published ? "View project →" : project.status}</span>
    </>
  );
}

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="02 · Passion work" title="Projects" description="Software built around problems I wanted to understand deeply enough to solve." />
      <section className="content-shell project-directory" aria-label="Project directory">
        {projects.map((project, index) => project.published ? (
          <Link className="project-card" href={sitePath(`/projects/${project.slug}/`)} key={project.slug}>
            <ProjectContent project={project} index={index} />
          </Link>
        ) : (
          <div className="project-card project-card-disabled" key={project.slug}>
            <ProjectContent project={project} index={index} />
          </div>
        ))}
      </section>
    </PageShell>
  );
}
