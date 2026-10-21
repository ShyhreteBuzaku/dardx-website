import { useState } from "react";
import "./App.css";

const capabilities = [
  {
    title: "UAVs",
    text: "Reconnaissance, strike, and logistics platforms engineered for contested environments.",
  },
  {
    title: "Radar",
    text: "Compact surveillance and tracking radars for airspace awareness and force protection.",
  },
  {
    title: "Sensors",
    text: "Electro-optical payloads and mission computers that turn flight time into intelligence.",
  },
  {
    title: "EW / SIGINT",
    text: "Electronic warfare modules that detect, disrupt, and protect against hostile links.",
  },
  {
    title: "Ground control",
    text: "Operator interfaces and datalinks built for rapid deployment and crew training.",
  },
  {
    title: "Integration",
    text: "Open interfaces so DARDX systems plug into existing C2 and NATO-aligned stacks.",
  },
];

const systems = [
  {
    name: "Aether Scout",
    description:
      "A long-endurance ISR quadcopter for day/night observation, target designation, and convoy overwatch. Modular payloads swap in minutes.",
    tags: ["ISR", "EO/IR", "Payload ready"],
    image: "/images/drone-payload.jpg",
    alt: "DARDX ISR quadcopter with underslung payload",
  },
  {
    name: "Vantage FPV",
    description:
      "A high-speed FPV strike drone with hardened video link options and a compact airframe for urban and trench-line missions.",
    tags: ["FPV", "Strike", "Low signature"],
    image: "/images/drone-hand.jpg",
    alt: "Operator holding a DARDX FPV quadcopter",
  },
  {
    name: "DroneConnect Ground",
    description:
      "A rapid-deploy mast and antenna node that extends command links, video, and mesh connectivity from the field edge.",
    tags: ["Comms", "Mast", "Field deploy"],
    image: "/images/ground-station.png",
    alt: "DARDX DroneConnect Ground mast and antenna kit",
  },
  {
    name: "Field Kit",
    description:
      "A hard-case deployable FPV package — airframe, battery, and foam cutouts ready for transport and immediate launch.",
    tags: ["FPV", "Hard case", "Ready to fly"],
    image: "/images/drone-case.jpg",
    alt: "DARDX FPV drone packed in a tactical hard case",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a className="logo-link" href="#top" aria-label="DARDX Systems home">
            <img src="/logo.png" alt="DARDX Systems" />
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`nav${menuOpen ? " open" : ""}`} aria-label="Primary">
            <a href="#capabilities" onClick={closeMenu}>
              Capabilities
            </a>
            <a href="#systems" onClick={closeMenu}>
              Systems
            </a>
            <a href="#mission" onClick={closeMenu}>
              Mission
            </a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" aria-label="Introduction">
          <div className="hero-media" aria-hidden="true">
            <img
              src="/images/drone-hand-detail.jpg"
              alt=""
            />
            <div className="hero-veil" />
          </div>
          <div className="container hero-content">
            <img
              className="hero-brand"
              src="/logo.png"
              alt="DARDX Systems"
            />
            <h1>Defense systems that stay ahead of the fight</h1>
            <p className="hero-lead">
              We design and field UAVs, radars, and sensing platforms for units
              that need reliable awareness and rapid effect.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#systems">
                View systems
              </a>
              <a className="btn btn-ghost" href="#contact">
                Talk to us
              </a>
            </div>
          </div>
        </section>

        <section className="stats" aria-label="Company figures">
          <div className="stat">
            <strong>40+</strong>
            <span>Fielded platforms</span>
          </div>
          <div className="stat">
            <strong>12</strong>
            <span>Active programs</span>
          </div>
          <div className="stat">
            <strong>24/7</strong>
            <span>Mission support</span>
          </div>
          <div className="stat">
            <strong>UAV · RADAR</strong>
            <span>Core product lines</span>
          </div>
        </section>

        <section className="section mission" id="mission">
          <div className="container">
            <span className="section-label">Our mission</span>
            <p className="mission-quote">
              Deliver practical unmanned and sensing technology that shortens the
              gap between detection and decision.
            </p>
          </div>
        </section>

        <section className="section" id="capabilities">
          <div className="container">
            <div className="section-head">
              <span className="section-label">Capabilities</span>
              <h2>What we build</h2>
              <p>
                A focused portfolio for air reconnaissance, strike support, and
                electromagnetic awareness — designed for operators, not demos.
              </p>
            </div>
            <div className="cap-grid">
              {capabilities.map((item) => (
                <article className="cap-item" key={item.title}>
                  <div>
                    <div className="cap-mark" aria-hidden="true" />
                    <h3>{item.title}</h3>
                  </div>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="systems">
          <div className="container">
            <div className="section-head">
              <span className="section-label">Systems</span>
              <h2>UAV &amp; radar lineup</h2>
              <p>
                Representative platforms from the DARDX catalogue. Specs and
                configurations adapt to each customer mission set.
              </p>
            </div>
            <div className="systems-list">
              {systems.map((system) => (
                <article className="system-row" key={system.name}>
                  <div className="system-media">
                    <img src={system.image} alt={system.alt} loading="lazy" />
                  </div>
                  <div className="system-copy">
                    <h3>{system.name}</h3>
                    <p>{system.description}</p>
                    <div className="system-meta">
                      {system.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="container">
            <div className="contact-panel">
              <div className="contact-copy">
                <span className="section-label">Contact</span>
                <h2>Partner with DARDX</h2>
                <p>
                  For procurement, trials, or integration programs, reach the
                  team directly. We respond to qualified inquiries within two
                  business days.
                </p>
                <dl className="contact-details">
                  <div>
                    <dt>Email</dt>
                    <dd>bberisha@dardx.ai</dd>
                  </div>
                  <div>
                    <dt>Programs</dt>
                    <dd>Defense · Border · Critical infrastructure</dd>
                  </div>
                </dl>
              </div>
              <aside className="contact-aside">
                <p>
                  Ready to evaluate a platform or request a capability brief?
                </p>
                <a className="btn btn-primary" href="mailto:bberisha@dardx.ai">
                  Email DARDX
                </a>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="/logo.png" alt="DARDX Systems" />
              <p>
                Unmanned systems and sensing technology for modern defense
                forces.
              </p>
            </div>
            <div className="footer-links">
              <div>
                <h3>Explore</h3>
                <a href="#capabilities">Capabilities</a>
                <a href="#systems">Systems</a>
                <a href="#mission">Mission</a>
              </div>
              <div>
                <h3>Company</h3>
                <a href="#contact">Contact</a>
                <a href="mailto:bberisha@dardx.ai">Email</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} DARDX Systems. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
