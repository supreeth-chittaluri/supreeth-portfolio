import { existsSync } from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";

/* ---------------------------------------------------------------------------
   Contact + identity
   --------------------------------------------------------------------------- */
const githubUrl = "https://github.com/supreeth-chittaluri";
const linkedInUrl = "https://www.linkedin.com/in/supreeth-chittaluri-044a42276";
const email = "supreetc@umich.edu";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/* Renders a visible "fill in later" marker so unfinished spots are easy to find. */
function Fill({ children }: { children: ReactNode }) {
  return (
    <span className="rounded bg-amber-200/70 px-1.5 py-0.5 font-mono text-xs text-amber-950 dark:bg-amber-300/20 dark:text-amber-200">
      [FILL IN: {children}]
    </span>
  );
}

/* Numbered eyebrow + heading used above every section. */
function SectionHeading({
  n,
  eyebrow,
  title
}: {
  n: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="mb-12 flex flex-col items-center gap-3 text-center">
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
        {n} — {eyebrow}
      </span>
      <h2 className="font-serif text-4xl font-semibold">{title}</h2>
    </div>
  );
}

/* Small monoline icons — kept in one place so the contact row and project
   links share a consistent stroke weight. */
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5v-11Z" />
      <path d="m3.5 6 8.5 6.5L20.5 6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg viewBox="0 0 20 20" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 15.5V4.5M5 9.5 10 4.5l5 5" />
    </svg>
  );
}

function ArrowOutIcon() {
  return (
    <svg viewBox="0 0 20 20" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 14 14 6M8 6h6v6" />
    </svg>
  );
}

/* Pill-style contact link — used for email / LinkedIn / GitHub instead of a
   plain underline so the intro reads as a proper contact row. */
function ContactChip({
  href,
  icon,
  label,
  external = true
}: {
  href: string;
  icon: ReactNode;
  label: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
      className="inline-flex items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent dark:border-paper/15"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}

function MiniRedisBenchmark() {
  return (
    <figure
      className="mini-redis-benchmark"
      aria-label="MiniRedis benchmark: more than 52,000 operations per second across 25,000 requests"
    >
      <div className="mini-redis-toolbar">
        <span className="mini-redis-status" />
        <span>localhost:6379</span>
        <span className="ml-auto opacity-50">benchmark</span>
      </div>
      <div className="mini-redis-terminal" aria-hidden="true">
        <p><span>$</span> ./benchmark --requests 25000</p>
        <p><span>→</span> clients connected concurrently</p>
        <p><span>→</span> SET · GET · DEL · EXISTS · EXPIRE · TTL</p>
      </div>
      <div className="mini-redis-result">
        <div>
          <strong>52K+</strong>
          <span>operations / second</span>
        </div>
        <div className="mini-redis-bar" aria-hidden="true"><span /></div>
        <p>25,000 requests completed</p>
      </div>
    </figure>
  );
}

/* ---------------------------------------------------------------------------
   Data
   --------------------------------------------------------------------------- */
type ProjectLink = { label: string; href: string };

type Project = {
  title: string;
  category: string;
  summary: string;
  description: string;
  why: string;
  stack: string;
  links: ProjectLink[];
  image?: string;
  imageAlt?: string;
  metric?: { value: string; label: string };
};

const projects: Project[] = [
  {
    title: "a2transit",
    category: "Transit routing",
    summary: "One trip planner for Ann Arbor's two bus networks.",
    description:
      "Combines TheRide and U-M MBus schedules, walking transfers, live vehicles, and delays into one door-to-door route search.",
    why:
      "As a Michigan student, I wanted the overlapping systems I use around campus to feel like one network—not two disconnected maps.",
    stack: "Python · FastAPI · PostGIS · Redis · React · MapLibre · GTFS",
    links: [
      { label: "Live project", href: "https://a2transit.vercel.app" },
      { label: "GitHub", href: "https://github.com/supreeth-chittaluri/a2transit" }
    ],
    image: "/projects/a2transit.webp",
    imageAlt:
      "a2transit planning a route from Blake Transit Center to Pierpont Commons across a live map of Ann Arbor"
  },
  {
    title: "Pulse",
    category: "Market intelligence",
    summary: "Finds stock-discussion spikes that are unusual for each ticker.",
    description:
      "Collects market conversations, scores ticker sentiment, and compares each symbol with its own rolling baseline before surfacing a spike.",
    why:
      "I built Pulse to separate meaningful shifts from the constant noise around popular stocks—and to make that signal useful without charging the public.",
    stack: "TypeScript · Node.js · PostgreSQL · React · Gemini · SSE",
    links: [
      { label: "Live project", href: "https://pulse-b8zd.onrender.com" },
      { label: "GitHub", href: "https://github.com/supreeth-chittaluri/pulse" }
    ],
    image: "/projects/pulse.webp",
    imageAlt:
      "Pulse dashboard showing NVDA sentiment and mention volume alongside a live stream of scored market discussions"
  },
  {
    title: "Undrift",
    category: "Developer analytics",
    summary: "Turns coding history into an evidence-backed view of skill freshness.",
    description:
      "Classifies GitHub activity and translates it into explainable freshness, depth, momentum, and skill-decay forecasts.",
    why:
      "I built Undrift after realizing a résumé says what I have learned, but not what I have practiced lately—or what I should revisit next.",
    stack: "Python · FastAPI · PostgreSQL · React · GitHub API · Claude",
    links: [
      { label: "Live project", href: "https://undrift-supreeth-chittaluri.vercel.app" },
      { label: "GitHub", href: "https://github.com/supreeth-chittaluri/undrift" }
    ],
    image: "/projects/undrift.webp",
    imageAlt:
      "Undrift dashboard showing skill freshness, depth, momentum, and decay forecasts derived from GitHub activity"
  },
  {
    title: "MiniRedis",
    category: "Systems engineering",
    summary: "A Redis-style server built to understand concurrency from the inside.",
    description:
      "Serves concurrent TCP clients with expiration, LRU eviction, append-only persistence, and six familiar Redis commands.",
    why:
      "I built MiniRedis because reading about caches and locks is different from designing one, breaking it under load, and measuring the result.",
    stack: "C++20 · TCP/IP · multithreading · CMake",
    links: [],
    metric: { value: "52K+", label: "operations per second" }
  }
];

type Skill = { name: string; icon: string };

const icon = (path: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@2.16.0/icons/${path}`;

const skills: Skill[] = [
  { name: "C++", icon: icon("cplusplus/cplusplus-original.svg") },
  { name: "Python", icon: icon("python/python-original.svg") },
  { name: "TypeScript", icon: icon("typescript/typescript-original.svg") },
  { name: "JavaScript", icon: icon("javascript/javascript-original.svg") },
  { name: "React", icon: icon("react/react-original.svg") },
  { name: "Next.js", icon: icon("nextjs/nextjs-original.svg") },
  { name: "FastAPI", icon: icon("fastapi/fastapi-original.svg") },
  { name: "PostgreSQL", icon: icon("postgresql/postgresql-original.svg") },
  { name: "Redis", icon: icon("redis/redis-original.svg") },
  { name: "Docker", icon: icon("docker/docker-original.svg") },
  { name: "AWS", icon: icon("amazonwebservices/amazonwebservices-original-wordmark.svg") },
  { name: "Google Cloud", icon: icon("googlecloud/googlecloud-original.svg") },
  { name: "Git", icon: icon("git/git-original.svg") },
  { name: "GitHub", icon: icon("github/github-original.svg") },
  { name: "CMake", icon: icon("cmake/cmake-original.svg") },
  { name: "Linux", icon: icon("linux/linux-original.svg") },
  { name: "PyTorch", icon: icon("pytorch/pytorch-original.svg") },
  { name: "TensorFlow", icon: icon("tensorflow/tensorflow-original.svg") },
  { name: "Pandas", icon: icon("pandas/pandas-original.svg") },
  { name: "NumPy", icon: icon("numpy/numpy-original.svg") }
];

type Course = { code: string; title: string };

const umichCourses: Course[] = [
  { code: "EECS 201", title: "Computer Science Pragmatics" },
  { code: "EECS 203", title: "Discrete Mathematics" },
  { code: "EECS 280", title: "Programming and Introductory Data Structures" },
  { code: "EECS 281", title: "Data Structures and Algorithms" },
  { code: "EECS 370", title: "Introduction to Computer Organization" },
  { code: "EECS 376", title: "Foundations of Computer Science" },
  { code: "EECS 482", title: "Introduction to Operating Systems" },
  { code: "EECS 484", title: "Database Management Systems" },
  { code: "EECS 485", title: "Web Systems" },
  { code: "EECS 491", title: "Introduction to Distributed Systems" },
  { code: "EECS 493", title: "User Interface Development" },
  { code: "EECS 497", title: "Human-Centered Software Design and Development" },
  { code: "EECS 498-016", title: "Applied Agentic Software Engineering (Special Topics)" },
  { code: "ROB 102", title: "Introduction to AI Programming" },
  { code: "MATH 214", title: "Applied Linear Algebra" },
  { code: "MATH 215", title: "Multivariable and Vector Calculus" }
];

type AboutTile = {
  file: string; // expected path under /public/about — drop the photo in with this filename
  caption: string;
};

/* Personal "About Me" tiles, plain grid — one photo per tile, one caption
   under each. Drop the matching photo into public/about/<file> and it will
   appear automatically. */
const aboutTiles: AboutTile[] = [
  {
    file: "pizza.jpg",
    caption: "Always chasing the next great meal — this one's L'Industrie Pizzeria in NYC."
  },
  {
    file: "friends-1.jpg",
    caption: "Always love hanging out with my friends."
  },
  {
    file: "friends-2.jpg",
    caption: "Always love hanging out with my friends."
  },
  {
    file: "sunset-1.jpg",
    caption: "I love traveling — these were sunsets in LA, California."
  },
  {
    file: "sunset-2.jpg",
    caption: "I love traveling — these were sunsets in LA, California."
  }
];

/* Shared classes for the rounded card containers used by Education / Experiences. */
const card =
  "relative rounded-2xl p-8 sm:p-10 border border-black/10 transition-colors hover:border-accent/50 dark:border-paper/10";

/* ---------------------------------------------------------------------------
   Page
   --------------------------------------------------------------------------- */
export default function Home() {
  return (
    <main id="top">
      {/* Floating pill nav */}
      <header className="fixed left-1/2 top-5 z-50 h-16 w-[92%] max-w-[1100px] -translate-x-1/2 rounded-full border border-black/10 bg-paper/40 px-5 backdrop-blur-2xl dark:border-paper/10 dark:bg-ink/50">
        <div className="flex h-full items-center justify-between">
          <a href="#top" className="group flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl border border-accent/60 bg-accent/10 font-serif text-sm font-bold text-accent transition-transform group-hover:-rotate-6">
              SC
            </span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="font-serif text-sm">Supreeth Chittaluri</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-55">
                Software Engineer
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a href="#experiences" className="nav-link">Experiences</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#education" className="nav-link">Education</a>
            <a href="#about" className="nav-link">About</a>
          </nav>
        </div>
      </header>

      {/* Intro */}
      <section
        id="intro"
        className="flex min-h-screen items-center justify-center bg-paper px-6 dark:bg-ink"
      >
        <div className="flex max-w-xl flex-col gap-4 text-sm">
          <h1 className="font-serif text-4xl font-bold">Supreeth Chittaluri</h1>
          <p className="opacity-70">
            Studying Computer Science at the University of Michigan.
          </p>
          <p className="opacity-70">
            <Fill>a one-line personal sentence — what you like to do</Fill>
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <ContactChip href={`mailto:${email}`} icon={<MailIcon />} label={email} external={false} />
            <ContactChip href={linkedInUrl} icon={<LinkedInIcon />} label="LinkedIn" />
            <ContactChip href={githubUrl} icon={<GitHubIcon />} label="GitHub" />
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section id="experiences" className="bg-paper py-24 dark:bg-ink">
        <SectionHeading n="01" eyebrow="Timeline" title="Experiences" />
        <div className="mx-auto max-w-4xl px-6">
          <div className="flex flex-col gap-6">
            <div className={card}>
              <h3 className="mb-3 font-serif text-2xl font-semibold">
                AI Product &amp; Engineering Intern
              </h3>
              <p className="mb-2 text-lg font-medium opacity-90">OneStream Software</p>
              <p className="mb-1 text-base opacity-70">
                <Fill>dates</Fill>
              </p>
              <p className="mb-4 text-base opacity-70">
                <Fill>location</Fill>
              </p>
              <p className="text-base leading-relaxed opacity-70">
                AI &amp; Operational Analytics — <Fill>one-line description of the work</Fill>
              </p>
            </div>

            <div className={card}>
              <h3 className="mb-3 font-serif text-2xl font-semibold">
                <Fill>role</Fill>
              </h3>
              <p className="mb-2 text-lg font-medium opacity-90">
                <Fill>organization</Fill>
              </p>
              <p className="mb-1 text-base opacity-70">
                <Fill>dates</Fill>
              </p>
              <p className="mb-4 text-base opacity-70">
                <Fill>location</Fill>
              </p>
              <p className="text-base leading-relaxed opacity-70">
                <Fill>one-line description</Fill>
              </p>
            </div>

            <div className={card}>
              <h3 className="mb-3 font-serif text-2xl font-semibold">
                <Fill>role</Fill>
              </h3>
              <p className="mb-2 text-lg font-medium opacity-90">
                <Fill>organization</Fill>
              </p>
              <p className="mb-1 text-base opacity-70">
                <Fill>dates</Fill>
              </p>
              <p className="mb-4 text-base opacity-70">
                <Fill>location</Fill>
              </p>
              <p className="text-base leading-relaxed opacity-70">
                <Fill>one-line description</Fill>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="bg-paper py-24 dark:bg-ink">
        <SectionHeading n="02" eyebrow="Selected work" title="Projects" />
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6">
          <div className="project-list">
            {projects.map((p, index) => (
              <details
                key={p.title}
                className="project-row"
              >
                <summary className="project-summary">
                  <span className="project-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="project-heading">
                    <span className="project-category">{p.category}</span>
                    <span className="font-serif text-2xl font-semibold sm:text-3xl">{p.title}</span>
                  </span>
                  <span className="project-summary-copy">{p.summary}</span>
                  <span className="project-toggle" aria-hidden="true">＋</span>
                </summary>
                <div className="project-panel">
                  <div className="project-panel-inner">
                    <div className="project-visual-wrap">
                      {p.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`${basePath}${p.image}`}
                          alt={p.imageAlt ?? ""}
                          width={p.title === "Undrift" ? 1200 : 880}
                          height={p.title === "Undrift" ? 890 : 539}
                          loading="lazy"
                          className="project-image"
                        />
                      ) : (
                        <MiniRedisBenchmark />
                      )}
                    </div>
                    <div className="project-copy">
                      <div>
                        <p className="project-copy-label">What it does</p>
                        <p>{p.description}</p>
                      </div>
                      <div>
                        <p className="project-copy-label">Why I built it</p>
                        <p>{p.why}</p>
                      </div>
                      <p className="font-mono text-xs uppercase tracking-[0.08em] opacity-55">
                        {p.stack}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {p.links.map((l) => (
                          <a
                            key={l.label}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            className="project-link"
                          >
                            {l.label === "GitHub" ? <GitHubIcon /> : null}
                            {l.label}
                            {l.label !== "GitHub" ? <ArrowOutIcon /> : null}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-paper py-24 dark:bg-ink">
        <SectionHeading n="03" eyebrow="Toolkit" title="Main Skills" />
        <div className="mx-auto flex max-w-[1000px] flex-wrap justify-center gap-4 px-4">
          {skills.map((s) => (
            <div
              key={s.name}
              className="flex w-24 flex-col items-center gap-2"
            >
              <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-black/[0.03] p-4 transition-colors hover:bg-accent/10 dark:bg-paper/[0.06]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.icon}
                  alt={s.name}
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-12 w-12 select-none object-contain"
                />
              </div>
              <span className="text-center text-xs opacity-70">{s.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="bg-paper py-24 dark:bg-ink">
        <SectionHeading n="04" eyebrow="Coursework" title="Education" />
        <div className="mx-auto max-w-4xl px-6">
          <div className={card}>
            <h3 className="mb-2 font-serif text-2xl font-semibold">University of Michigan</h3>
            <p className="mb-1 text-base opacity-70">Ann Arbor, MI</p>
            <p className="mb-4 text-lg font-medium opacity-90">
              Bachelor of Science, Computer Science
            </p>
            <p className="mb-2 font-mono text-xs uppercase tracking-wide opacity-55">
              Relevant coursework
            </p>
            <ul className="columns-1 gap-x-8 text-sm opacity-70 sm:columns-2">
              {umichCourses.map((c) => (
                <li key={c.code} className="mb-2 break-inside-avoid">
                  {c.code} — {c.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section id="about" className="bg-paper py-24 dark:bg-ink">
        <SectionHeading n="05" eyebrow="Off the clock" title="About Me" />
        <div className="mx-auto grid max-w-content-lg grid-cols-2 gap-x-6 gap-y-10 px-4 sm:grid-cols-3">
          {aboutTiles.map((tile) => {
            const hasPhoto = existsSync(path.join(process.cwd(), "public", "about", tile.file));
            return (
              <div key={tile.file} className="text-center">
                {hasPhoto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`${basePath}/about/${tile.file}`}
                    alt={tile.caption}
                    className="aspect-[4/5] w-full rounded-lg border-4 border-paper object-cover shadow-lg dark:border-paper/90"
                  />
                ) : (
                  <div className="grid aspect-[4/5] place-items-center overflow-hidden rounded-lg border-4 border-dashed border-black/20 p-3 text-center dark:border-paper/20">
                    <Fill>drop photo in as public/about/{tile.file}</Fill>
                  </div>
                )}
                <p className="mt-4 text-sm opacity-70">{tile.caption}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="flex flex-col items-center gap-3 border-t border-black/10 bg-paper px-6 py-10 text-xs opacity-70 sm:flex-row sm:justify-between dark:border-paper/10 dark:bg-ink">
        <span>© 2026 Supreeth Chittaluri · Ann Arbor, MI</span>
        <a href="#top" className="inline-flex items-center gap-1.5 hover:text-accent hover:opacity-100">
          Back to top <ArrowUpIcon />
        </a>
      </footer>
    </main>
  );
}
