import ProductPage, { type ProductData } from "./ProductPage";

const product: ProductData = {
  name: "8 INCH FPV",
  features: [
    "Swappable front sensors",
    "Integrated landing leg mounts",
    "Ruggedized camera mount",
    "Multiband comms",
    "FiberLink HD",
  ],
  heroImage: "/images/FPV.png",
  schemaImages: ["/images/FPV.png"],
  variants: [
    {
      number: "01",
      name: "8 INCH FPV",
      image: "/images/FPV.png",
      active: true,
    },
    {
      number: "02",
      name: "10 INCH FPV",
      image: "/images/FPV.png",
      href: "/products/10-fpv",
    },
  ],
  airframe: [
    { name: "Frame", value: "8 INCH" },
    { name: "Weight (w/ Battery)", value: "1.5 Kg" },
  ],
  dataLink: [
    { name: "Video", value: "High power multiband link" },
    { name: "Control", value: "Triple band, EW hardened" },
    { name: "Antennas", value: "User swappable" },
    { name: "Fiber Optic", value: "HD video link" },
  ],
  sensors: [
    { name: "FPV camera", value: "1200 TVL - 150° FOV" },
    { name: "Thermal camera", value: "640 × 480 - 62° FOV" },
    { name: "EO/IR illuminator", value: "1,000 lumens" },
    // { name: "Down camera", value: ["1200 TVL", "150° FOV"] },
  ],
  metricsImage: "/images/drone-hand-detail.jpg",
  metrics: [
    { name: "Top speed", value: "130 km/h" },
    { name: "Flight range", value: "25 km" },
    { name: "Max flight time", value: "30 min" },
    { name: "Max payload", value: "2 kg" },
  ],
  related: [
    {
      name: "10 INCH FPV",
      href: "/products/10-fpv",
      image: "/images/FPV.png",
      category: "Long range",
    },
    {
      name: "GCS",
      href: "/#systems",
      image: "/images/GCS.png",
      category: "Ground control",
    },
  ],
};

export default function Product8Fpv() {
  return <ProductPage product={product} />;
}
