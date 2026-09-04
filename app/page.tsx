import type { ReactNode } from "react";

type IconName = "arrow" | "external" | "plus";

const githubUrl = "https://github.com/supreeth-chittaluri";
const linkedInUrl = "https://www.linkedin.com/in/supreeth-chittaluri-044a42276";
const email = "supreetc@umich.edu";

function Icon({ name }: { name: IconName }) {
  if (name === "arrow") {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" className="icon">
        <path d="M3 10h13M11 4l6 6-6 6" />
      </svg>
    );
  }

  if (name === "external") {
    return (
      <svg viewBox="0 0 20 20" aria-hidden="true" className="icon">
        <path d="M11 3h6v6M17 3l-8 8" />
        <path d="M15 11v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="icon">
      <path d="M10 3v14M3 10h14" />
    </svg>
  );
}

function SectionMark({ number, children }: { number: string; children: ReactNode }) {
  return (
    <p className="section-mark">
      <span>{number}</span>
      {children}
    </p>
  );
}

function RedisVisual() {
  return (
    <svg viewBox="0 0 720 320" role="img" aria-label="MiniRedis system sketch">
      <g className="redis-links">
        <path d="M80 90h170l90 70 120-66h178" />
        <path d="M80 90l170 122 90-52 120 74 178-40" />
        <path d="M250 212l90-52 120 8" />
      </g>
      <g className="redis-points">
        <circle cx="80" cy="90" r="9" />
        <circle cx="250" cy="90" r="9" />
        <circle cx="340" cy="160" r="12" />
        <circle cx="460" cy="94" r="9" />
        <circle cx="460" cy="234" r="9" />
        <circle cx="638" cy="194" r="9" />
      </g>
      <g className="redis-labels">
        <text x="64" y="62">TCP</text>
        <text x="314" y="143">POOL</text>
        <text x="438" y="70">CACHE</text>
        <text x="605" y="226">AOF</text>
      </g>
      <text className="redis-metric" x="78" y="286">52k+ ops / sec</text>
    </svg>
  );
}

function UndriftVisual() {
  return (
    <svg viewBox="0 0 520 300" role="img" aria-label="Undrift skill activity sketch">
      <g className="drift-grid">
        <path d="M40 54h440M40 108h440M40 162h440M40 216h440" />
        <path d="M40 54v162M128 54v162M216 54v162M304 54v162M392 54v162M480 54v162" />
      </g>
      <g className="drift-bars">
        <rect x="65" y="130" width="36" height="86" rx="18" />
        <rect x="153" y="94" width="36" height="122" rx="18" />
        <rect x="241" y="158" width="36" height="58" rx="18" />
        <rect x="329" y="72" width="36" height="144" rx="18" />
        <rect x="417" y="112" width="36" height="104" rx="18" />
      </g>
      <g className="drift-dots">
        <circle cx="83" cy="118" r="7" />
        <circle cx="171" cy="82" r="7" />
        <circle cx="259" cy="146" r="7" />
        <circle cx="347" cy="60" r="7" />
        <circle cx="435" cy="100" r="7" />
      </g>
      <text x="40" y="258">RECENCY</text>
      <text x="392" y="258">PRACTICE →</text>
    </svg>
  );
}

function TransitVisual() {
  return (
    <svg viewBox="0 0 560 300" role="img" aria-label="a2transit route sketch">
      <path className="route route-one" d="M22 226C110 212 108 80 218 96s99 106 188 80 82-66 132-82" />
      <path className="route route-two" d="M12 112c90-22 117 60 190 42 77-19 95-99 180-80 56 12 92 46 166 21" />
      <path className="route route-three" d="M62 34c52 50 39 133 107 172 61 35 103-42 173-45 77-3 101 83 190 82" />
      <g className="route-points">
        <circle cx="22" cy="226" r="8" />
        <circle cx="218" cy="96" r="8" />
        <circle cx="410" cy="176" r="8" />
        <circle cx="12" cy="112" r="8" />
        <circle cx="202" cy="154" r="8" />
        <circle cx="382" cy="74" r="8" />
        <circle cx="62" cy="34" r="8" />
        <circle cx="242" cy="206" r="8" />
        <circle cx="532" cy="243" r="8" />
      </g>
      <g className="route-labels">
        <text x="24" y="266">THE RIDE</text>
        <text x="211" y="72">MBUS</text>
        <text x="430" y="164">A2</text>
      </g>
    </svg>
  );
}

function StockVisual() {
  return (
    <svg viewBox="0 0 720 300" role="img" aria-label="Real-time stock app concept sketch">
      <g className="stock-grid">
        <path d="M28 58h664M28 118h664M28 178h664M28 238h664" />
        <path d="M28 28v220M160 28v220M292 28v220M424 28v220M556 28v220M692 28v220" />
      </g>
      <path className="stock-line" d="M30 207 98 188l62 26 63-71 66 38 67-72 70 36 68-17 62-58 75 38 58-24" />
      <circle className="stock-dot" cx="486" cy="110" r="7" />
      <text x="28" y="282">CONCEPT / IN DEVELOPMENT</text>
      <text x="566" y="282">LIVE SIGNALS</text>
    </svg>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Supreeth Chittaluri home">
          <span className="wordmark-mark">sc</span>
          <span>Supreeth Chittaluri</span>
        </a>

        <span className="header-note">software engineer / ann arbor</span>

        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#projects">Work</a>
          <a href="#experience">Profile</a>
          <a href="#skills">Stack</a>
          <a href="#contact">Contact</a>
        </nav>

        <details className="mobile-menu">
          <summary>Menu</summary>
          <nav aria-label="Mobile navigation">
            <a href="#projects">Work</a>
            <a href="#experience">Profile</a>
            <a href="#skills">Stack</a>
            <a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <div className="page-shell">
        <section className="intro" id="about" aria-labelledby="intro-title">
          <div className="intro-topline">
            <span>01 / hello</span>
            <span>open to software engineering conversations</span>
          </div>

          <div className="intro-center">
            <p className="intro-kicker">Computer Science @ University of Michigan — Ann Arbor</p>
            <h1 id="intro-title">
              Supreeth
              <span>Chittaluri</span>
            </h1>
            <p className="intro-copy">
              Software engineer interested in backend systems, full-stack products,
              cloud infrastructure, applied AI, and developer tools.
            </p>
          </div>

          <div className="intro-bottomline">
            <span>Most recently / AI Product &amp; Engineering Intern at OneStream Software</span>
            <a className="inline-link" href="#projects">See the work <Icon name="arrow" /></a>
          </div>
        </section>

        <section className="projects-section" id="projects" aria-labelledby="projects-title">
          <div className="section-heading">
            <SectionMark number="02">Selected work</SectionMark>
            <div className="section-heading-copy">
              <h2 id="projects-title">Built to be looked at <em>closely.</em></h2>
              <p>
                A small set of systems, products, and real-world interfaces. Open a tile
                for the thinking behind each one.
              </p>
            </div>
          </div>

          <div className="project-wall">
            <details className="project-tile tile-redis" open>
              <summary>
                <div className="tile-meta">
                  <span>01 / systems</span>
                  <span className="tile-toggle"><Icon name="plus" /></span>
                </div>
                <div className="tile-art tile-art-redis"><RedisVisual /></div>
                <div className="tile-heading">
                  <p>C++ / networked datastore</p>
                  <h3>MiniRedis</h3>
                  <span className="tile-arrow"><Icon name="arrow" /></span>
                </div>
              </summary>
              <div className="project-detail">
                <p className="detail-summary">
                  A Redis-style in-memory key-value database built around concurrent TCP clients,
                  expiration, eviction, persistence, and measured throughput.
                </p>
                <div className="detail-columns">
                  <div>
                    <span className="detail-label">What it covers</span>
                    <p>SET, GET, DEL, EXISTS, EXPIRE, TTL, reader-writer locks, a fixed worker pool, LRU eviction, and append-only persistence.</p>
                  </div>
                  <div>
                    <span className="detail-label">Evidence</span>
                    <p>25,000-request benchmark at 52,000+ operations per second, with unit and integration coverage for parsing, concurrency, expiration, and recovery.</p>
                  </div>
                </div>
                <div className="tile-footer">
                  <span>C++20 · TCP/IP · multithreading · CMake</span>
                  <span>source link pending</span>
                </div>
                {/* [FILL IN: Add the verified MiniRedis repository URL when it is public.] */}
              </div>
            </details>

            <details className="project-tile tile-undrift">
              <summary>
                <div className="tile-meta">
                  <span>02 / developer tool</span>
                  <span className="tile-toggle"><Icon name="plus" /></span>
                </div>
                <div className="tile-art tile-art-undrift"><UndriftVisual /></div>
                <div className="tile-heading">
                  <p>GitHub activity / skill decay</p>
                  <h3>Undrift</h3>
                  <span className="tile-arrow"><Icon name="arrow" /></span>
                </div>
              </summary>
              <div className="project-detail">
                <p className="detail-summary">
                  A full-stack developer skill-decay platform that makes practice patterns visible
                  through GitHub activity and LLM classification.
                </p>
                <div className="detail-columns">
                  <div>
                    <span className="detail-label">The idea</span>
                    <p>Pull commit history, classify the primary technology represented by each commit, and weight the signal toward recent practice.</p>
                  </div>
                  <div>
                    <span className="detail-label">The build</span>
                    <p>FastAPI and PostgreSQL on the backend, with a React dashboard for trends toward and away from staleness.</p>
                  </div>
                </div>
                <div className="tile-footer">
                  <span>Python · FastAPI · React · PostgreSQL · GitHub API · LLM</span>
                  <span>source link pending</span>
                </div>
                {/* [FILL IN: Add the verified Undrift repository or demo URL when it is public.] */}
              </div>
            </details>

            <details className="project-tile tile-transit">
              <summary>
                <div className="tile-meta">
                  <span>03 / real-time maps</span>
                  <span className="tile-toggle"><Icon name="plus" /></span>
                </div>
                <div className="tile-art tile-art-transit"><TransitVisual /></div>
                <div className="tile-heading">
                  <p>Ann Arbor / multimodal routing</p>
                  <h3>a2transit</h3>
                  <span className="tile-arrow"><Icon name="arrow" /></span>
                </div>
              </summary>
              <div className="project-detail">
                <p className="detail-summary">
                  A multimodal Ann Arbor transit planner connecting TheRide and U-M MBus data into one route-planning experience.
                </p>
                <div className="detail-columns">
                  <div>
                    <span className="detail-label">Routing</span>
                    <p>RAPTOR routing across local transit networks, combining scheduled GTFS data with GTFS-Realtime updates.</p>
                  </div>
                  <div>
                    <span className="detail-label">Interface</span>
                    <p>PostGIS and Redis support a FastAPI service; React, MapLibre, and WebSockets carry the experience to the client.</p>
                  </div>
                </div>
                <div className="tile-footer">
                  <span>FastAPI · PostGIS · Redis · React · MapLibre · GTFS</span>
                  <span>source link pending</span>
                </div>
                {/* [FILL IN: Add the verified a2transit repository or demo URL when it is public.] */}
              </div>
            </details>

            <details className="project-tile tile-stock">
              <summary>
                <div className="tile-meta">
                  <span>04 / planned build</span>
                  <span className="tile-toggle"><Icon name="plus" /></span>
                </div>
                <div className="tile-art tile-art-stock"><StockVisual /></div>
                <div className="tile-heading">
                  <p>Market signals / in development</p>
                  <h3>Real-time Stock App</h3>
                  <span className="tile-arrow"><Icon name="arrow" /></span>
                </div>
              </summary>
              <div className="project-detail">
                <p className="detail-summary">
                  Planned and in development. This tile shows the product direction only; it does not claim a finished application or public implementation.
                </p>
                <div className="detail-columns">
                  <div>
                    <span className="detail-label">Direction</span>
                    <p>Exploring how real-time market information could become a focused product experience.</p>
                  </div>
                  <div>
                    <span className="detail-label">Status</span>
                    <p>Repository, implementation scope, and public links are still being finalized.</p>
                  </div>
                </div>
                <div className="tile-footer">
                  <span>planned / in development</span>
                  <span>coming later</span>
                </div>
                {/* [FILL IN: Replace the status copy and add verified links once the Stock App is ready to share.] */}
              </div>
            </details>
          </div>
        </section>

        <section className="profile-section" id="experience" aria-labelledby="profile-title">
          <div className="section-heading compact-heading">
            <SectionMark number="03">Profile</SectionMark>
            <div className="section-heading-copy">
              <h2 id="profile-title">A software engineer, broadly.</h2>
              <p>
                I like work that asks for both a sturdy foundation and a clear experience on top of it.
              </p>
            </div>
          </div>

          <div className="profile-grid">
            <div className="profile-note">
              <span className="note-label">Most recently</span>
              <h3>AI Product &amp; Engineering Intern</h3>
              <p>OneStream Software<br />AI &amp; Operational Analytics</p>
            </div>
            <div className="profile-note">
              <span className="note-label">Education</span>
              <h3>University of Michigan</h3>
              <p>Computer Science<br />Ann Arbor, Michigan</p>
            </div>
            <div className="profile-note profile-note-wide">
              <span className="note-label">How I think about the work</span>
              <p>
                Start with the data model, the protocol, the failure mode, and the person using it.
                Good software makes those decisions feel inevitable after the fact.
              </p>
            </div>
          </div>
        </section>

        <section className="skills-section" id="skills" aria-labelledby="skills-title">
          <div className="section-heading compact-heading">
            <SectionMark number="04">Stack</SectionMark>
            <div className="section-heading-copy">
              <h2 id="skills-title">Tools I reach for.</h2>
              <p>Grouped by the kinds of problems they help me work through.</p>
            </div>
          </div>

          <div className="skill-rows">
            <div className="skill-row">
              <span>01</span>
              <h3>Systems + backend</h3>
              <p>C++ · Python · FastAPI · TCP/IP · concurrency · PostgreSQL · Redis</p>
            </div>
            <div className="skill-row">
              <span>02</span>
              <h3>Full-stack product</h3>
              <p>TypeScript · React · JavaScript · REST APIs · WebSockets · MapLibre</p>
            </div>
            <div className="skill-row">
              <span>03</span>
              <h3>Cloud + delivery</h3>
              <p>Docker · AWS · Google Cloud · Git · GitHub Actions · CMake</p>
            </div>
            <div className="skill-row">
              <span>04</span>
              <h3>Applied AI</h3>
              <p>LLM integration · PyTorch · TensorFlow · Pandas · NumPy</p>
            </div>
          </div>
        </section>

        <section className="now-section" aria-labelledby="now-title">
          <div className="section-heading compact-heading">
            <SectionMark number="05">Current direction</SectionMark>
            <div className="section-heading-copy">
              <h2 id="now-title">Curious about the layers people skip.</h2>
              <p>
                The next projects are a continuation of the same question: how can software stay useful as the conditions around it change?
              </p>
            </div>
          </div>

          <div className="focus-list">
            <span>backend engineering</span>
            <span>systems</span>
            <span>full-stack engineering</span>
            <span>cloud / infrastructure</span>
            <span>applied AI</span>
            <span>developer tools</span>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <SectionMark number="06">Contact</SectionMark>
          <div className="contact-content">
            <h2 id="contact-title">Let&apos;s talk about<br /><em>the hard part.</em></h2>
            <div className="contact-right">
              <p>
                I&apos;m interested in software engineering roles where careful systems thinking and product judgment both matter.
              </p>
              <a className="email-link" href={`mailto:${email}`}>
                {email} <Icon name="external" />
              </a>
              <div className="contact-links">
                <a href={githubUrl} target="_blank" rel="noreferrer">GitHub <Icon name="external" /></a>
                <a href={linkedInUrl} target="_blank" rel="noreferrer">LinkedIn <Icon name="external" /></a>
                {/* [FILL IN: Add a public résumé URL when you have one you want recruiters to use.] */}
                <span className="pending-contact">Résumé link pending</span>
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer">
          <span>© 2026 Supreeth Chittaluri</span>
          <span>Built in Ann Arbor</span>
          <a href="#top">Back to top <Icon name="arrow" /></a>
        </footer>
      </div>
    </main>
  );
}
