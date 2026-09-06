import { ContactActions, PageShell, SectionHeading } from "./components";
import { education, snapshots } from "./site-data";
import TypedIntro from "./typewriter";

export default function Home() {
  return (
    <PageShell>
      <section className="hero-shell">
        <div className="hero-content">
          <TypedIntro />
          <ContactActions />
        </div>
      </section>

      <section className="profile-strip" aria-label="Current profile">
        <div className="snapshot-grid">
          {snapshots.map((snapshot) => (
            <article className="snapshot-card" key={snapshot.label}>
              <p className="snapshot-label">{snapshot.label}</p>
              <p className="snapshot-value">{snapshot.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell" aria-labelledby="education-heading">
        <SectionHeading number="01" eyebrow="Education" title="University of Michigan" id="education-heading" />
        <article className="education-card">
          <div className="education-main">
            <div>
              <p className="eyebrow">Ann Arbor, Michigan</p>
              <h3>Bachelor of Science in Engineering, Computer Science</h3>
            </div>
            <p className="education-standing">Junior</p>
          </div>
          <p className="education-copy">
            My coursework has shaped how I think about algorithms, systems, databases, interfaces, and the engineering work required to turn an idea into dependable software.
          </p>
          <details className="coursework">
            <summary>View relevant coursework</summary>
            <div className="course-grid">
              {education.map((course) => (
                <p key={course.code}>
                  <strong>{course.code}</strong>
                  <span>{course.title}</span>
                </p>
              ))}
            </div>
          </details>
        </article>
      </section>

    </PageShell>
  );
}
