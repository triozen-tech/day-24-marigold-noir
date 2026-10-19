// All text + data for Marigold Noir (concept website). Images live in /images/marigold-noir/.
export const IMG = (n: string) => `/images/marigold-noir/${n}.webp`;

export const NAV = [
  { label: "Stories", href: "#functions" },
  { label: "Films", href: "#rounds" },
  { label: "Albums", href: "#album" },
  { label: "Packages", href: "#packages" },
];

export const HERO = { lines: [["The", "day,"], ["kept", "in", "gold"]], sub: "Wedding photography · Noir & marigold" };

export const FUNCTIONS = [
  { name: "Haldi", img: "f1-haldi" },
  { name: "Mehendi", img: "f2-mehendi" },
  { name: "Sangeet", img: "f3-sangeet" },
  { name: "Wedding", img: "k2-mandap-close" },
];

export const ROUNDS = ["I", "II", "III", "IV", "V", "VI", "VII"];

export const DETAILS = [
  { img: "d1-rings", cap: "Rings" },
  { img: "d2-jewellery", cap: "Jewellery" },
  { img: "d3-fabric", cap: "Fabric" },
  { img: "d4-garlands", cap: "Garlands" },
  { img: "p3-thali", cap: "Thali" },
];

export const SELECTS = [
  ["p1-aisle", "p2-petalfloor", "p3-thali", "p4-courtyard", "p5-gate", "p6-table", "k1-mandap"],
  ["d1-rings", "f1-haldi", "d4-garlands", "k3-flame", "f2-mehendi", "d2-jewellery", "f3-sangeet"],
];

export const PACKAGES = [
  { name: "The Day", meta: "1 day · 1 photographer · 300 frames", price: "₹95,000" },
  { name: "The Celebration", meta: "3 days · 2 photographers · linen album", price: "₹2,40,000", feature: true },
  { name: "The Destination", meta: "5 days · travel · two albums", price: "₹4,80,000" },
];

export const ALBUM = {
  title: ["Held,", "not", "scrolled"],
  body: "Silk, linen or velvet, ribbon-tied in a keepsake box.",
  covers: [
    { name: "Night silk", img: "a1-album", color: "#10151d" },
    { name: "Teal linen", img: "a2-album-teal", color: "#14352f" },
    { name: "Brass cloth", img: "a3-album-brass", color: "#c9a24e" },
  ],
  sizes: ["10×10", "12×12", "14×10"],
  price: "₹38,000",
};

export const REVIEWS = [
  "Calm. Invisible. Brilliant.",
  "We cried at the album.",
  "Every frame smelled of marigolds.",
  "They shot the silence.",
  "Worth every sample rupee.",
];

export const FAQ = [
  ["How early to book?", "Eight to ten months ahead for the season; sooner for a destination."],
  ["Do you travel?", "Yes. Travel and stay are quoted with the Destination package."],
  ["When is the album ready?", "Ten weeks after the last function, ribbon-tied and boxed."],
  ["Can we choose the music?", "For the film, always. Tell us the song your family hums."],
];
