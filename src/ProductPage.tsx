import { useState } from "react";

export type SpecItem = { name: string; value: string };

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
  tagline: string;
  lead: string;
  features: string[];
  heroImage: string;
  schemaImages: string[];
  variants: VariantCard[];
  airframe: SpecItem[];
  dataLink: SpecItem[];
  sensors: SensorItem[];
  metrics: MetricItem[];
  metricsImage?: string;
  related: RelatedProduct[];
};

function SpecBlock({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: SpecItem[];
}) {
  return (
    <div className="product-specs_block">
      <header className="product-specs_block_title">
        <span className="product-specs_block_square" aria-hidden="true" />
        <span className="product-specs_block_num">{number}</span>
        <h2>{title}</h2>
      </header>
      <dl className="product-specs_block_list">
        {items.map((item) => (
          <div className="product-specs_block_item" key={item.name}>
            <dt className="product-specs_label">{item.name}</dt>
            <dd className="product-specs_block_prop">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function ProductPage({ product }: { product: ProductData }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  const schemaPrimary = product.schemaImages[0] ?? product.heroImage;
  const schemaSecondary =
    product.schemaImages[1] ?? product.schemaImages[0] ?? product.heroImage;

  return (
    <>
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
            <a href="/#mission" onClick={closeMenu}>
              Mission
            </a>
            <a className="nav-cta" href="/#contact" onClick={closeMenu}>
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="product-page">
        <section className="np-hero">
          <img src={product.heroImage} alt="" />
          <div className="np-hero-copy">
            <div className="container">
              <h1>{product.name}</h1>
            </div>
          </div>
        </section>

        <section className="np-intro">
          <div className="container">
            <p className="np-tagline">{product.tagline}</p>

            <div className="np-variants">
              {product.variants.map((variant) => {
                const content = (
                  <>
                    <span className="np-variant-num">{variant.number}</span>
                    <h2>{variant.name}</h2>
                    <div className="np-variant-media">
                      <img src={variant.image} alt="" />
                    </div>
                  </>
                );

                return variant.href && !variant.active ? (
                  <a
                    key={variant.name}
                    className="np-variant"
                    href={variant.href}
                  >
                    {content}
                  </a>
                ) : (
                  <article
                    key={variant.name}
                    className={`np-variant${variant.active ? " is-active" : ""}`}
                  >
                    {content}
                  </article>
                );
              })}
            </div>

            <p className="np-lead">{product.lead}</p>

            <div className="np-features-row">
              <div className="np-features">
                <span className="np-kicker">Key features</span>
                <ul>
                  {product.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="np-features-media">
                <img src={schemaPrimary} alt={`${product.name} schema`} />
              </div>
            </div>
          </div>
        </section>

        <section className="product-specs_wrap" aria-label="Specifications">
          <div className="container product-specs_layout">
            <div className="product-specs_gallery">
              <div className="product-specs_image">
                <img
                  src={schemaPrimary}
                  alt={`${product.name} isometric schema`}
                />
              </div>
              <div className="product-specs_image">
                <img
                  src={schemaSecondary}
                  alt={`${product.name} top schema`}
                />
              </div>
            </div>

            <div className="product-specs_blocks">
              <SpecBlock number="01" title="Airframe" items={product.airframe} />
              <SpecBlock number="02" title="Data link" items={product.dataLink} />

              <div className="product-specs_block">
                <header className="product-specs_block_title">
                  <span className="product-specs_block_square" aria-hidden="true" />
                  <span className="product-specs_block_num">03</span>
                  <h2>Sensors</h2>
                </header>

                <div className="product-specs_block_list">
                  {product.sensors.map((sensor) => (
                    <article
                      className="product-specs_block_item product-specs_block_item--sensor"
                      key={sensor.name}
                    >
                      <div className="product-specs_block_type">
                        <span className="product-specs_label">{sensor.name}</span>
                      </div>
                      <div className="product-specs_block_prop">
                        {sensor.lines.map((line) => (
                          <strong key={line}>{line}</strong>
                        ))}
                      </div>
                      <div
                        className={`product-specs_block_image${sensor.image ? "" : " is-empty"}`}
                      >
                        {sensor.image ? (
                          <img src={sensor.image} alt="" />
                        ) : null}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="np-metrics" aria-label="Performance">
          {product.metricsImage ? (
            <img className="np-metrics-bg" src={product.metricsImage} alt="" />
          ) : null}
          <div className="np-metrics-veil" />
          <div className="container np-metrics-list">
            {product.metrics.map((metric) => (
              <div className="np-metric" key={metric.name}>
                <span>{metric.name}</span>
                <strong>{metric.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section className="np-related">
          <div className="container">
            <h2>Explore more products</h2>
            <div className="np-related-track">
              {product.related.map((item) => (
                <a className="np-related-card" href={item.href} key={item.href}>
                  <div className="np-related-media">
                    <img src={item.image} alt="" />
                  </div>
                  <span>{item.category}</span>
                  <h3>{item.name}</h3>
                  <em>Discover more</em>
                </a>
              ))}
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
                <a href="/#capabilities">Capabilities</a>
                <a href="/#systems">Systems</a>
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
    </>
  );
}
