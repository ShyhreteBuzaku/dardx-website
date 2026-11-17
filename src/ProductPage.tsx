import { useState } from "react";

export type SpecItem = { name: string; value: string };

export type SpecGroup = { title: string; items: SpecItem[] };

export type SensorItem = {
  name: string;
  lines: string[];
  image?: string;
};

export type MetricItem = {
  name: string;
  value: string;
};

export type VariantCard = {
  number: string;
  name: string;
  href?: string;
  image: string;
  active?: boolean;
};

export type RelatedProduct = {
  name: string;
  href: string;
  image: string;
  category: string;
};

export type ProductData = {
  name: string;
  tagline?: string;
  lead?: string;
  features: string[];
  heroImage: string;
  schemaImages: string[];
  variants: VariantCard[];
  airframe: SpecItem[];
  dataLink: SpecItem[];
  sensors: SpecItem[];
  metrics: MetricItem[];
  metricsImage?: string;
  related: RelatedProduct[];
};

/* —— Shared site chrome —— */

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header site-header--product">
      <div className="container header-inner">
        <a className="logo-link" href="/" aria-label="DARDX Systems home">
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
          <a href="/#capabilities" onClick={closeMenu}>
            Capabilities
          </a>
          <a href="/#systems" onClick={closeMenu}>
            Systems
          </a>
          <a href="/#components" onClick={closeMenu}>
            Components
          </a>
          <a href="/#mission" onClick={closeMenu}>
            Mission
          </a>
          <a className="nav-cta" href="/#contact" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
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
              <a href="/#capabilities">Capabilities</a>
              <a href="/#systems">Systems</a>
              <a href="/#components">Components</a>
              <a href="/#mission">Mission</a>
            </div>
            <div>
              <h3>Company</h3>
              <a href="/#contact">Contact</a>
              <a href="mailto:bberisha@dardx.ai">Email</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} DARDX Systems. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

/* —— Shared detail-page sections (products + components) —— */

export function DetailHero({
  back,
  label,
  name,
  tagline,
  lead,
  image,
  alt,
}: {
  back: { href: string; label: string };
  label: string;
  name: string;
  tagline?: string;
  lead?: string;
  image: string;
  alt: string;
}) {
  return (
    <section className="detail-hero">
      <div className="container detail-hero-grid">
        <div className="detail-hero-copy">
          <a className="detail-back" href={back.href}>
            ← {back.label}
          </a>
          <span className="section-label">{label}</span>
          <h1>{name}</h1>
          {tagline ? <p className="detail-tagline">{tagline}</p> : null}
          {lead ? <p className="detail-lead">{lead}</p> : null}
        </div>
        <div className="detail-hero-media">
          <img src={image} alt={alt} />
        </div>
      </div>
    </section>
  );
}

export function DetailOverview({
  features,
  specs,
}: {
  features: string[];
  specs: SpecGroup[];
}) {
  const groups = specs.filter((g) => g.items.length > 0);

  return (
    <section className="detail-overview" aria-label="Features and specifications">
      <div className="container detail-overview-grid">
        <aside className="detail-features">
          <h2 className="detail-kicker">Key features</h2>
          <ul>
            {features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </aside>

        <div className="detail-specs">
          {groups.map((group, i) => (
            <div className="spec-block" key={group.title}>
              <header className="spec-block-title">
                <span className="spec-block-num">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2>{group.title}</h2>
              </header>
              <dl>
                {group.items.map((item) => (
                  <div className="spec-row" key={item.name}>
                    <dt>{item.name}</dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DetailRelated({
  title,
  items,
}: {
  title: string;
  items: RelatedProduct[];
}) {
  if (items.length === 0) return null;

  return (
    <section className="detail-related">
      <div className="container">
        <h2 className="detail-kicker">{title}</h2>
        <div className="detail-related-grid">
          {items.map((item) => (
            <a className="detail-related-card" href={item.href} key={item.href}>
              <div className="detail-related-media">
                <img src={item.image} alt="" loading="lazy" />
              </div>
              <div className="detail-related-copy">
                <span>{item.category}</span>
                <h3>{item.name}</h3>
                <em>View details →</em>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* —— Product page —— */

export default function ProductPage({ product }: { product: ProductData }) {
  const showVariants = product.variants.length > 1;

  return (
    <>
      <SiteHeader />

      <main className="detail-page">
        <DetailHero
          back={{ href: "/#systems", label: "All systems" }}
          label="Systems"
          name={product.name}
          tagline={product.tagline}
          lead={product.lead}
          image={product.heroImage}
          alt={`${product.name} schematic`}
        />

        {showVariants ? (
          <nav className="detail-variants" aria-label="Variants">
            <div className="container detail-variants-row">
              {product.variants.map((variant) => {
                const content = (
                  <>
                    <img src={variant.image} alt="" />
                    <span className="detail-variant-num">{variant.number}</span>
                    <span className="detail-variant-name">{variant.name}</span>
                  </>
                );

                return variant.href && !variant.active ? (
                  <a key={variant.name} className="detail-variant" href={variant.href}>
                    {content}
                  </a>
                ) : (
                  <span
                    key={variant.name}
                    className="detail-variant is-active"
                    aria-current="page"
                  >
                    {content}
                  </span>
                );
              })}
            </div>
          </nav>
        ) : null}

        <DetailOverview
          features={product.features}
          specs={[
            { title: "Airframe", items: product.airframe },
            { title: "Data link", items: product.dataLink },
            { title: "Sensors", items: product.sensors },
          ]}
        />

        {product.metrics.length > 0 ? (
          <section className="detail-metrics" aria-label="Performance">
            {product.metricsImage ? (
              <img className="detail-metrics-bg" src={product.metricsImage} alt="" />
            ) : null}
            <div className="container detail-metrics-row">
              {product.metrics.map((metric) => (
                <div className="detail-metric" key={metric.name}>
                  <span>{metric.name}</span>
                  <strong>{metric.value}</strong>
                </div>
              ))}
            </div>
          </section>
        ) : null}

        <DetailRelated title="Explore more products" items={product.related} />
      </main>

      <SiteFooter />
    </>
  );
}
