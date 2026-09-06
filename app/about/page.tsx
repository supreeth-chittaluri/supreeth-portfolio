import type { Metadata } from "next";
import { PageIntro, PageShell } from "../components";
import { aboutStories, education, sitePath } from "../site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Friends, food, basketball, travel, Michigan football, and live music outside of software."
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="05 · About Me" title="Education" />
      <section className="content-shell about-profile" aria-label="Introduction">
        <div className="about-headshot-frame">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="about-headshot" src={sitePath("/about/headshot.webp")} alt="Supreeth Chittaluri" />
        </div>
        <div className="about-profile-copy">
          <p className="eyebrow">Supreeth Chittaluri</p>
          <p className="about-introduction">
            I am a junior studying Computer Science at the University of Michigan, interested in software engineering, applied AI, and dependable systems. I enjoy turning complicated problems into products people can understand and use, especially when algorithms, data, and thoughtful product decisions all matter.
          </p>
          <div className="about-focus" aria-label="Areas of interest">
            <span>Software engineering</span>
            <span>Applied AI</span>
            <span>Systems</span>
          </div>
        </div>
      </section>
      <section className="content-shell about-education" aria-labelledby="education-heading">
        <article className="education-card">
          <div className="education-main">
            <div>
              <p className="eyebrow">Ann Arbor, Michigan</p>
              <h2 id="education-heading">University of Michigan</h2>
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
        <h2 id="off-clock-heading">Life outside software</h2>
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
