import ProductPage, { type ProductData } from "./ProductPage";

const product: ProductData = {
  name: "10'' FPV",
  tagline: "One platform. Two missions.",
  lead: "An FPV drone built for long-distance operations, prioritizing range, performance, and payload capacity.",
  features: [
    "Swappable front sensors",
    "Integrated landing leg mounts",
    "Ruggedized camera mount",
    "Frequency tuned, user swappable antennas",
  ],
  heroImage: "/images/FPV.png",
  schemaImages: ["/images/FPV.png"],
  variants: [
    {
      number: "01",
      name: "10'' FPV",
      image: "/images/FPV.png",
      active: true,
    },
    {
      number: "02",
      name: "8'' FPV",
      image: "/images/FPV.png",
      href: "/products/8-fpv",
    },
  ],
  airframe: [
    { name: "Length", value: "20.5 IN" },
    { name: "Width", value: "23.2 IN" },
    { name: "Weight (airframe)", value: "7.72 LB (3,500 G)" },
  ],
  dataLink: [
    { name: "Video", value: "High power adjustable analog link" },
    { name: "Control", value: "Dual band, EW hardened" },
    { name: "Antennas", value: "Frequency tuned · User swappable" },
  ],
  sensors: [
    { name: "FPV camera", lines: ["1200 TVL", "150° FOV"] },
    { name: "Thermal camera", lines: ["640 × 480", "78° FOV"] },
    { name: "EO/IR illuminator", lines: ["1,000 lumens", "1,000 mW/sr"] },
    { name: "Down camera", lines: ["1200 TVL", "150° FOV"] },
  ],
  metricsImage: "/images/drone-hand-detail.jpg",
  metrics: [
    { name: "Top speed", value: "80 mph / 129 kph" },
    { name: "Flight range", value: "36 km" },
    { name: "Flight time", value: "48 min" },
    { name: "Launch time", value: "<3 min" },
  ],
  related: [
    {
      name: "8'' FPV",
      href: "/products/8-fpv",
      image: "/images/FPV.png",
      category: "Long range",
    },
    {
      name: "DroneConnect Ground",
      href: "/#systems",
      image: "/images/ground-station.png",
      category: "Ground control",
    },
  ],
};

export default function Product10Fpv() {
  return <ProductPage product={product} />;
}
