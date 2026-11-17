import {
  DetailHero,
  DetailOverview,
  DetailRelated,
  SiteFooter,
  SiteHeader,
} from "./ProductPage";
import { componentHref, components, type ComponentData } from "./componentsData";

export default function ComponentPage({
  component,
}: {
  component: ComponentData;
}) {
  const others = components
    .filter((c) => c.slug !== component.slug)
    .map((c) => ({
      name: c.name,
      href: componentHref(c),
      image: c.image,
      category: c.category,
    }));

  return (
    <>
      <SiteHeader />

      <main className="detail-page">
        <DetailHero
          back={{ href: "/#components", label: "All components" }}
          label={component.category}
          name={component.name}
          tagline={component.tagline}
          lead={component.lead}
          image={component.image}
          alt={component.alt}
        />

        <DetailOverview features={component.features} specs={component.specs} />

        <DetailRelated title="Explore more components" items={others} />
      </main>

      <SiteFooter />
    </>
  );
}
