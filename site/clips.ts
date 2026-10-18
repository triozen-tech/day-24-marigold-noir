// Used range of each Veo clip (seconds of video time). Data only.
// end = best-matching frame to the end still (V1, V2) or the end of the clip.
// V3: motion plays 0 → motionEnd, then a static hold to `end` (still album, blank pages).
export const clips = {
  v1: { src: "raw/v1.mp4", frames: "marigold-noir-v1", start: 0, end: 7.83, from: "K1", to: "K2" },
  v2: { src: "raw/v2.mp4", frames: "marigold-noir-v2", start: 0, end: 7.96, from: "K3", to: "K4" },
  v3: { src: "raw/v3.mp4", frames: "marigold-noir-v3", start: 0, end: 8, motionEnd: 5.2, from: "A1W", to: "A4" },
} as const;
