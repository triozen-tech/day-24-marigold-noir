// Used range of each Veo clip (seconds of video time). Data only.
// end = the frame that best matches the clip's end still (SSIM, last 2 s).
export const clips = {
  v1: { src: "raw/v1.mp4", frames: "marigold-noir-v1", start: 0, end: 7.83, from: "K1", to: "K2" },
  v2: { src: "raw/v2.mp4", frames: "marigold-noir-v2", start: 0, end: 7.96, from: "K3", to: "K4" },
  v3: { src: "raw/v3.mp4", frames: "marigold-noir-v3", start: 0, end: 7.46, from: "A1W", to: "A4" },
  v4: { src: "raw/v4.mp4", frames: "marigold-noir-v4", start: 0, end: 7.96, from: "VD", to: "VD2" },
} as const;
