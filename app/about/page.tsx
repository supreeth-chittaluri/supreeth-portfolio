import type { Metadata } from "next";
import { PageShell } from "../components";
import { aboutStories, education, sitePath } from "../site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Friends, food, basketball, travel, Michigan football, and live music outside of software."
};

export default function AboutPage() {
  return (
    <PageShell>
      <section className="about-page-intro">
        <p className="eyebrow">05 · About Me</p>
      </section>
      <section className="content-shell about-profile" aria-label="Introduction">
        <div className="about-headshot-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="about-headshot" src={sitePath("/about/headshot.webp")} alt="Supreeth Chittaluri" />
        </div>
        <div className="about-profile-copy">
          <p className="eyebrow">Supreeth Chittaluri</p>
          <div className="about-introduction">
            <p>
              I am a junior at the University of Michigan studying Computer Science, with a focus on software engineering and applied AI. I am drawn to problems where algorithms, data, and product decisions all matter, especially when the result can make something complicated easier to understand or use.
            </p>
            <p>
              That interest shapes the work I choose. I built a2transit to connect Ann Arbor’s two bus systems in one route search, Pulse to separate meaningful market activity from background noise, and Undrift to make skill growth visible through real development history. Alongside my experience building AI and production software at OneStream, these projects have taught me to work across the full product, measure whether an idea actually works, and stay with difficult technical problems until I understand them.
            </p>
          </div>
        </div>
      </section>
      <section className="content-shell about-education" aria-labelledby="education-heading">
        <p className="eyebrow education-section-label" id="education-heading">Education</p>
        <article className="education-card">
          <div className="education-main">
            <div>
              <p className="eyebrow">Ann Arbor, Michigan</p>
              <h2>University of Michigan</h2>
              <div className="education-degree-row">
                <p className="education-degree">Bachelor of Science in Engineering in Computer Science (B.S.E. C.S.)</p>
                <p className="education-standing">Junior</p>
              </div>
            </div>
          </div>
          <div className="coursework coursework-visible">
            <p className="coursework-title">Relevant coursework</p>
            <div className="course-grid">
              {education.map((course) => (
                <p key={course.code}>
                  <strong>{course.code}</strong>
                  <span>{course.title}</span>
                </p>
              ))}
            </div>
          </div>
        </article>
      </section>
      <section className="content-shell off-clock-heading" aria-labelledby="off-clock-heading">
        <h2 className="eyebrow" id="off-clock-heading">Life outside software</h2>
      </section>
      <section className="about-collage" aria-label="Personal photo collage">
        {aboutStories.map((story) => (
          <figure className={`about-story about-story-${story.id}`} key={story.id}>
            <div className={`about-photos about-photos-${story.files.length}`}>
              {story.files.map((file, index) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img className="about-photo" src={sitePath(`/about/${file}`)} alt={story.alts[index]} loading="lazy" key={file} />
              ))}
            </div>
            <figcaption>{story.caption}</figcaption>
          </figure>
        ))}
      </section>
    </PageShell>
  );
}
