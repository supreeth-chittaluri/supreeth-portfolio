import type { Metadata } from "next";
import { PageIntro, PageShell } from "../components";
import { aboutStories, sitePath } from "../site-data";

export const metadata: Metadata = {
  title: "About",
  description: "Friends, food, basketball, travel, Michigan football, and live music outside of software."
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageIntro eyebrow="05 · Off the clock" title="About me" description="A few of the people, places, games, and meals that make life outside the editor feel full." />
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
