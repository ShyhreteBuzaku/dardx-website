import { useState } from "react";
import "./App.css";
import Product8Fpv from "./Product8Fpv";
import Product10Fpv from "./Product10Fpv";

const capabilities = [
  {
    title: "UAV's",
    text: "Reconnaissance & strike platforms engineered for contested environments.",
  },
  {
    title: "Detectors",
    text: "Compact surveillance and tracking radars for airspace awareness.",
  },
  {
    title: "Integration",
    text: "Open interfaces so DARDX systems plug into your platforms.",
  },
];

const systems = [
  {
    name: "8inch FPV",
    description:
      "A long-endurance strike fpv for day/night, Modular payloads swap in minutes.",
    tags: ["RF", "Fiber Optic", "Payload ready"],
    image: "/images/FPV.png",
    alt: "DARDX 8 inch FPV drone schematic",
    href: "/products/8-fpv",
  },
  // {
  //   name: "10inch Frame",
  //   description:
  //     "An FPV drone built for long-distance operations, prioritizing range, performance, and payload capacity.",
  //   tags: ["RF", "Fiber Optic", "Payload ready"],
  //   image: "/images/FPV.png",
  //   alt: "DARDX 10 inch FPV drone schematic",
  //   href: "/products/10-fpv",
  // },
  {
    name: "GCS",
    description:
      "A rapid-deploy mast and antenna node that extends command links, video, and mesh connectivity from the field edge.",
    tags: ["RF", "Fiber Optic"],
    image: "/images/GCS.png",
    alt: "DARDX GCS Ground mast and antenna kit",
  },
  {
    name: "Drone Detector",
    description:
      "A compact RF and visual detection node that spots, classifies, and tracks hostile UAS for early warning and airspace security.",
    tags: ["UWB", "Portable", "AOA", "FEED VIEW"],
    image: "/images/SCAN.png",
    alt: "DARDX Drone Scanner detection system",
  },
];

type Component = {
  name: string;
  image: string; // under public/; placeholder shows until the file exists
  alt: string;
  href: string; // details page
};

const components: Component[] = [
  {
    name: "Flight Controller",
    image: "/images/fc0.png",
    alt: "DARDX flight controller board",
    href: "/components/flight-controller",
  },
  {
    name: "Radio Link / VTX + RC",
    image: "/images/radio.png",
    alt: "DARDX radio link with video transmitter and RC receiver",
    href: "/components/radio-link",
  },
  {
    name: "Fiber Link / VTX + RC",
    image: "/images/fiber.png",
    alt: "DARDX fiber optic link with video and RC control",
    href: "/components/fiber-link",
  },
  {
    name: "AI Camera",
    image: "/images/aicam.png",
    alt: "DARDX AI camera module",
    href: "/components/ai-camera",
  },
  {
    name: "ESC",
    image: "/images/esc.png",
    alt: "DARDX electronic speed controller",
    href: "/components/esc",
  },
  {
    name: "Scrambler",
    image: "/images/scram.png",
    alt: "DARDX scrambler module",
    href: "/components/scrambler",
  },
];

function ComponentImage({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <span className="comp-placeholder" aria-hidden="true">
        Image
      </span>
    );
  }

  return (
    <img src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />
  );
}

function Home() {
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
            <a href="#components" onClick={closeMenu}>
              Components
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
            <img src="/images/drone-hand-detail.jpg" alt="" />
            <div className="hero-veil" />
          </div>
          <div className="container hero-content">
            <img className="hero-brand" src="/logo.png" alt="DARDX Systems" />
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

        {/* <section className="stats" aria-label="Company figures">
          <div className="stat">
            <strong>FPV's · DETECTORS</strong>
            <span>Core product lines</span>
          </div>
        </section> */}

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
                electromagnetic awareness — designed for operators.
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
                    {"href" in system && system.href ? (
                      <a className="system-link" href={system.href}>
                        View specs →
                      </a>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="components">
          <div className="container">
            <div className="section-head">
              <span className="section-label">Components</span>
              <h2>Building blocks</h2>
              <p>
                The in-house subsystems that power DARDX platforms, available
                for integration into your own builds. <b>(All components are NDAA compliant)</b>
              </p>
            </div>
            <div className="comp-grid">
              {components.map((item, i) => (
                <a className="comp-item" key={item.name} href={item.href}>
                  <div className="comp-media">
                    <ComponentImage src={item.image} alt={item.alt} />
                  </div>
                  <div className="comp-copy">
                    <span className="comp-index">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3>{item.name}</h3>
                  </div>
                  <span className="comp-link">View details →</span>
                </a>
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
                    <dd>contact@dardxsystems.com</dd>
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
                <a className="btn btn-primary" href="mailto:contact@dardxsystems.com">
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
                <a href="#components">Components</a>
                <a href="#mission">Mission</a>
              </div>
              <div>
                <h3>Company</h3>
                <a href="#contact">Contact</a>
                <a href="mailto:contact@dardxsystems.com">Email</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} DARDX SYSTEMS. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}

export default function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";

  if (path === "/products/8-fpv") {
    return <Product8Fpv />;
  }

  if (path === "/products/10-fpv") {
    return <Product10Fpv />;
  }

  return <Home />;
}
