import Link from "next/link";
import { ContactActions, PageShell } from "./components";
import { navItems, sitePath } from "./site-data";
import TypedIntro from "./typewriter";

export default function Home() {
  return (
    <PageShell>
      <section className="hero-shell">
        <div className="hero-content">
          <TypedIntro />
          <ContactActions />
          <nav className="hero-explore" aria-label="Explore the portfolio">
            <span>Explore the portfolio</span>
            <div>
              {navItems.slice(1).map((item) => (
                <Link href={sitePath(item.href)} key={item.label}>{item.label}</Link>
              ))}
            </div>
          </nav>
        </div>
      </section>
    </PageShell>
  );
}
