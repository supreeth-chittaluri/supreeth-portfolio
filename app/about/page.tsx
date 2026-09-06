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
      <PageIntro eyebrow="05 · About" title="About me" />
      <section className="content-shell about-education" aria-labelledby="education-heading">
        <article className="education-card">
          <div className="education-main">
            <div>
              <p className="eyebrow">Ann Arbor, Michigan</p>
              <h2 id="education-heading">University of Michigan</h2>
              <p className="education-degree">Bachelor of Science, Computer Science</p>
            </div>
            <p className="education-standing">Junior</p>
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
        <p className="eyebrow">Life outside software</p>
        <h2 id="off-clock-heading">Off the clock</h2>
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
