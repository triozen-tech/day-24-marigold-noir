// Used range of each Veo clip (seconds of video time). Data only.
// end = best-matching frame to the end still (V1, V2) or the end of the clip.
// V1: trimmed to 6.2 s (jump at 6.25 s).
// V3: motion plays 0 → motionEnd, then a static hold to `end` (still album, blank pages).
export const clips = {
  v1: { src: "raw/v1.mp4", frames: "marigold-noir-v1", start: 0, end: 6.2, from: "K1", to: "K2" },
  v2: { src: "raw/v2.mp4", frames: "marigold-noir-v2", start: 0, end: 7.96, from: "K3", to: "K4" },
  v3: { src: "raw/v3.mp4", frames: "marigold-noir-v3", start: 0, end: 8, motionEnd: 5.2, from: "A1W", to: "A4" },
  // V4: raw/v4b-3.mp4 (Veo take 3, mark cropped out at 1.154×, so vd / vd2 stills use raw/clean/*-crop.jpg). Still moving at the last frame.
  v4: { src: "raw/v4b-3.mp4", frames: "marigold-noir-v4", start: 0, end: 7.96, from: "VD", to: "VD2" },
} as const;
