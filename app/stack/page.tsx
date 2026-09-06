import type { Metadata } from "next";
import { PageIntro, PageShell } from "../components";
import { stackGroups } from "../site-data";

export const metadata: Metadata = {
  title: "Stack",
  description: "Languages, frameworks, data systems, machine learning tools, and infrastructure used by Supreeth Chittaluri."
};

export default function StackPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="03 · Stack" title="Skills" description="Technologies used across projects, coursework, and experience." />
      <section className="content-shell stack-directory" aria-label="Technology groups">
        {stackGroups.map((group) => (
          <article className="stack-group" key={group.name}>
            <h2>{group.name}</h2>
            <div className="skill-logo-row">
              {group.skills.map((skill) => (
                <figure className="skill-logo" key={skill.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={skill.icon} alt="" width="46" height="46" loading="lazy" />
                  <figcaption>{skill.name}</figcaption>
                </figure>
              ))}
            </div>
            <p className="stack-text">
              {group.skills.map((skill) => skill.name).join(" · ")}
              {group.extra ? ` · ${group.extra}` : ""}
            </p>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
