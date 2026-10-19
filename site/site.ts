import type { SiteMeta, Theme } from "@/lib/site";

export const meta: SiteMeta = {
  name: "Marigold Noir",
  title: "Marigold Noir — Wedding photography",
  description: "Concept website: a wedding photography studio, noir and marigold.",
  loaderText: "Marigold Noir",
  loader: false, // the site's own toran loader (components/Loader.tsx, I39) replaces the engine loader
  cursor: true,
  record: { duration: 34 },
};

export const theme: Theme = {
  bg: "#05070B",
  surface: "#090D14",
  text: "#ECE6DA",
  muted: "#7E8794",
  accent: "#C9A24E",
  accentText: "#07090C",
  line: "#1B222D",
  fontDisplay: "'Italiana', serif",
  fontBody: "'Hanken Grotesk Variable', sans-serif",
  radius: 0,
};
