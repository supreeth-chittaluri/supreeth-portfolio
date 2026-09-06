import type { Metadata } from "next";
import { PageIntro, PageShell } from "../components";
import { experiences } from "../site-data";

export const metadata: Metadata = {
  title: "Experience",
  description: "Engineering and analytics experience across production AI, software systems, and operational data."
};

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageIntro eyebrow="01 · Experience" title="Where I have worked" description="The teams, systems, and measurable problems that have shaped how I build software." />
      <section className="content-shell experience-list" aria-label="Professional experience">
        {experiences.map((experience, index) => (
          <article className="experience-row" key={experience.company}>
            <p className="row-number">{String(index + 1).padStart(2, "0")}</p>
            <div className="experience-heading">
              <p className="eyebrow">{experience.company}</p>
              <h2>{experience.role}</h2>
              {experience.period ? <p className="experience-period">{experience.period}</p> : null}
            </div>
            <div className="experience-body">
              <p>{experience.summary}</p>
              <div className="evidence-row">
                {experience.details.map((detail) => <span key={detail}>{detail}</span>)}
              </div>
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
