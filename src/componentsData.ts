import type { SpecGroup } from "./ProductPage";

export type ComponentData = {
  slug: string; // URL: /components/<slug>
  name: string;
  category: string;
  image: string; // under public/
  alt: string;
  tagline: string;
  lead: string;
  features: string[];
  specs: SpecGroup[];
};

// Placeholder copy — replace "TBD" values and wording with real specs.
export const components: ComponentData[] = [
  {
    slug: "flight-controller",
    name: "Flight Controller",
    category: "Avionics",
    image: "/images/fc0.webp",
    alt: "DARDX flight controller board",
    tagline: "The flight brain for airframes.",
    lead: "A compact flight controller designed in-house for FPV and tactical UAV platforms, with stable flight control and clean integration with DARDX links and payloads.",
    features: [
      "Designed for FPV and tactical UAV airframes",
      "Integrates with DARDX radio and fiber links",
      "Payload and peripheral interfaces",
      "NDAA compliant",
    ],
    specs: [
      {
        title: "Interfaces",
        items: [
          { name: "AI", value: "UART w/MSP Override" },
          { name: "OSD", value: "On Board + Target Drawing" },
          { name: "LIDAR", value: "I2C + Trigger Pin" },
          { name: "GPS", value: "UART" },
          { name: "VTX", value: "UART + CVBS Output" },
          { name: "RC", value: "UART" },
          { name: "Camera", value: "2x Camera switcher" },
          { name: "ESC", value: "4x DSHOT + ADC + UART RX" },
          { name: "TRIGGER", value: "LIDAR / AI / Mechanical / Manual" },
          { name: "DETONATOR", value: "ENABLE + Trigger output" },
        ],
      },
      {
        title: "Software",
        items: [
          { name: "FC Firmware", value: "Betaflight" },
          { name: "OSD + LIDAR", value: "Proprietary" },
        ],
      },
    ],
  },
  {
    slug: "radio-link",
    name: "Radio Link / VTX + RC",
    category: "Datalink",
    image: "/images/radio.webp",
    alt: "DARDX radio link with video transmitter and RC receiver",
    tagline: "Video and control in one hardened RF link.",
    lead: "A combined video transmitter and RC receiver that carries live video down and pilot commands up over a single radio link built to hold up under electronic warfare.",
    features: [
      "Combined VTX and RC in one unit",
      "Multiband operation",
      "Designed to resist jamming",
      "NDAA compliant",
    ],
    specs: [
      {
        title: "Video",
        items: [
          { name: "Bands", value: "5.8Ghz + Optional (Not Public)" },
          { name: "Output power", value: "Not Public" },
          { name: "Range with DARDX VRX", value: "Not Public" },
          { name: "Added Latency", value: "Sub-MS" },
        ],
      },
      {
        title: "Control",
        items: [
          { name: "Bands", value: "2.4Ghz + Optional (Not Public)" },
          { name: "Range", value: "~20km" },
          { name: "Protocol", value: "Hardened ELRS" },
        ],
      },
    ],
  },
  {
    slug: "fiber-link",
    name: "Fiber Link / VTX + RC",
    category: "Datalink",
    image: "/images/fiber.webp",
    alt: "DARDX fiber optic link with video and RC control",
    tagline: "A wired link that radio jamming can't touch.",
    lead: "A fiber optic link that carries HD video and RC control over a physical cable, giving a jam-proof connection where the RF spectrum is contested.",
    features: [
      "Analog or HD video over fiber",
      "RC control over the same line",
      "Immune to RF jamming",
      "NDAA compliant",
    ],
    specs: [
      {
        title: "Link",
        items: [
          { name: "Fiber length", value: "Limited only by weight" },
          { name: "Video resolution", value: "CVBS or 1280x720" },
          { name: "Added Latency", value: "Sub-MS" },
        ],
      },
    ],
  },
  {
    slug: "ai-camera",
    name: "AI Camera",
    category: "Payload",
    image: "/images/aicam.webp",
    alt: "DARDX AI camera module",
    tagline: "A camera that sees, detects and tracks on board.",
    lead: "A camera module with on-board processing for target detection and tracking, cutting operator workload and keeping guidance working when the link degrades.",
    features: [
      "On-board detection and tracking",
      "Operator assist and terminal guidance",
      "Works with DARDX flight controllers",
      "NDAA compliant",
    ],
    specs: [
      {
        title: "Sensor",
        items: [
          { name: "AI Resolution", value: "FULL HD" },
          { name: "Field of view", value: "180 deg" },
        ],
      },
      {
        title: "Processing",
        items: [
          { name: "Compute", value: "On Board AI + CPU" },
          { name: "Tracks", value: "Anything on screen" },
          { name: "Video", value: "CVBS" },
          { name: "Control", value: "MSP over UART" },
        ],
      },
    ],
  },
  {
    slug: "esc",
    name: "ESC",
    category: "Power",
    image: "/images/esc.webp",
    alt: "DARDX electronic speed controller",
    tagline: "Reliable motor control under heavy load.",
    lead: "An electronic speed controller sized for DARDX airframes, delivering consistent motor response with heavy payloads and in harsh field conditions.",
    features: [
      "Sized for heavy-lift FPV airframes",
      "Telemetry back to the flight controller",
      "Built for field conditions",
      "NDAA compliant",
    ],
    specs: [
      {
        title: "Electrical",
        items: [
          { name: "Continuous current", value: "60A" },
          { name: "Burst current", value: "100A" },
          { name: "Input voltage", value: "Max 8S" },
        ],
      },
      {
        title: "Control",
        items: [
          { name: "Protocol", value: "DSHOT" },
          { name: "Firmware", value: "AM32" },
        ],
      },
    ],
  },
  {
    slug: "scrambler",
    name: "Scrambler",
    category: "EW",
    image: "/images/scram.webp",
    alt: "DARDX scrambler module",
    tagline: "Keep your links private in the field.",
    lead: "A scrambler module that protects video and control traffic against interception, so links stay private in contested environments.",
    features: [
      "Protects video and control links",
      "Pairs with DARDX radio links",
      "Compact, low power",
      "NDAA compliant",
    ],
    specs: [
      {
        title: "Compatibility",
        items: [
          { name: "Supported", value: "Any VTX" },
          { name: "Added latency", value: "Sub-MS" },
        ],
      },
    ],
  },
];

export const componentHref = (c: ComponentData) => `/components/${c.slug}`;
