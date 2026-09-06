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
      <PageIntro eyebrow="01 · Timeline" title="Experiences" />
      <section className="content-shell experience-grid" aria-label="Professional experience">
        {experiences.map((experience, index) => (
          <article className="experience-card" key={experience.company}>
            <div className="experience-card-top">
              <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
              <span className="experience-company">{experience.company}</span>
            </div>
            <div className="experience-card-main">
              {experience.period ? <p className="experience-period">{experience.period}</p> : null}
              <h2>{experience.role}</h2>
              <p>{experience.summary}</p>
            </div>
            <div className="evidence-row">
              {experience.details.map((detail) => <span key={detail}>{detail}</span>)}
            </div>
          </article>
        ))}
      </section>
    </PageShell>
  );
}
