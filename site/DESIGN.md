# DESIGN.md · Day 24 · Marigold Noir

**Mode: Pro** (LEAN: desktop 1440×900 only). The reel is recorded with `npm run reel` (`?record=1`, about 36 s, same as Days 22 and 23); `?record=1` = smooth auto-scroll + record cursor with ≥ 3 `data-hover-demo` hovers.
Layout **C · Lamplight** (picked from `day24/refs/layouts/`; A and B dropped). Mockup: `day24/refs/layouts/c-lamplight.html`.

- **Brand:** Marigold Noir, a fictional wedding photography studio (India). Concept website, sample prices only.
- **Hook:** "Photographers need websites that feel like the day."
- **Cover keyword:** WEDDING · repo `day-24-marigold-noir` · port 3017 · slug `marigold-noir`.
- **No people, faces or hands** in any asset: objects, flowers, fabric, flame, equipment, spaces.
- **Name check:** Marigold Noir was name-checked earlier in this session (the first pick, "Eternal Frames", is a real business and was dropped). **The IP India class 41 check is the user's to do.**
- Claude Code writes **no Flow/Veo prompts** (see "Prompts (as run)" at the end).

## Look

| Choice | Pick | Why (this site) |
|---|---|---|
| Look | **Lamplit noir**: blue-black room, one brass-gold light, thin-line glass | A wedding is remembered by its light; the page is dark so the gold marigold and flame carry it |
| Palette | see tokens below | One accent (brass gold); the booking band is the one deliberate gold page |
| Type pair | **Italiana** (display, light and wide-set) + **Hanken Grotesk** (300/500/700 body, small caps labels) | New pair; not Gilda+Chivo (Day 23), Cormorant+Jost (Day 21) or League Gothic+JetBrains Mono (Day 22) |
| Nav | **Floating glass pill**, centred; wordmark left inside, links, gold "Enquire" capsule; **NV04 · M471** (pill detaches from the top bar on scroll) | The pill floats over film like a lamp on a table |
| Hero | Top-centred title over a full-bleed mandap film, soft light drift (**HR36** closest shape: title + one floating info chip) | Title sits in the dark upper band, the mandap glows below |
| Section shape | Centred column, wide breathing room, one centred Italiana headline with an italic gold word per section | Calm, gallery-like; opposite of A's horizontal rails and B's giant type |
| Cards | 1 px `#1b222d` line, flat `#090d14` fill, gold line on hover; no shadows, no radius (buttons are pills) | Keeps the noir flat so the light does the work |
| Signature | **Seven rounds**: pinned flame film + a timeline of seven nodes lighting by scroll (**M422**), the petal lands in the flame | The one place the page slows to a held moment |
| Loader | **I39 Toran** (new code, not in MOTION-MENU before this site: it is added there): a thin gold thread draws across, marigold dots pop on along it, the wordmark hangs from the middle, then it lifts away into the hero (~1.1 s; no hairlines, shutter or flash) | The toran is the doorway garland of every Indian wedding; the first thing a guest passes under |
| Traveller | **F1 waypoint travel** with one marigold petal PNG (see Petal path) | Day 24 is a travelling-object day |

**Colour tokens** (`site/site.ts` theme, CSS variables `bg`, `surface`, `fg`, `muted`, `accent`, `accent-fg`, `line`):

| Token | Hex | Use |
|---|---|---|
| bg | `#05070B` | page |
| surface | `#090D14` (cards), `#0C1118`, `#10161E` (stacked packages) | cards and bars |
| teal-night | `#0D1A1F` | seven-rounds floor gradient |
| fg | `#ECE6DA` | text |
| muted | `#7E8794` | small text, captions (contrast ≥ 4.5 on bg) |
| line | `#1B222D` | 1 px borders |
| accent (brass gold) | `#C9A24E` | italic words, buttons, timeline, price |
| accent-fg | `#07090C` | text on gold (booking band, buttons) |
| flame / petal glow | `#FFB534` → `#E2780F` | only in film and the petal; never as UI colour |

Fonts via `site/fonts.ts` (`npm i` the pair): Italiana 400; Hanken Grotesk 300, 500, 700. Headlines: Italiana, 96 px display, italic gold word in a second face weight (Italiana is single-weight: the "italic" word is a skewed or alternate-colour gold word, final choice in Round 1). Small labels: Hanken 500, 11–12 px, tracking .3–.4em, uppercase.

## Section list and layout

11 sections + nav + loader. **No layout code from Days 21–23** (checked against `docs/SITES-LOG.md` Layouts column); codes are the closest SECTION-MENU shape, to be confirmed against the built layout in Round 1.

| # | Section | Layout code | Motion code | Reference |
|---|---|---|---|---|
| – | Nav | NV04 | M471 | ours |
| – | Loader | – | I39 | ours |
| 1 | Hero · the mandap | HR36 | **M328** + M37 light breath (+ soft lamp drift, see note) | ours |
| 2 | The functions (haldi · mehendi · sangeet · wedding) | GL22 | **M241** deck spreads | ours |
| 3 | The seven rounds (signature) | SY02 + film | **M422** timeline with progress line | ours |
| 4 | The details | GL11 | **M147** zoom-parallax cluster | ours |
| 5 | The craft | CP01 | **M46** before/after slider, blur to sharp | ours |
| 6 | Portfolio | GL02 (two tilted rows) | **M428** tilted rows straighten | ours |
| 7 | Packages | PR01 as sticky bars | **M40** sticky stacking cards | ours |
| 8 | The album (product detail) | PS04 | **M54** Flip morph, cover card → detail | ours |
| 9 | Reviews (quotes only) | SP12 | **M236** gravity tag pile | ours |
| 10 | Booking + FAQ | BK04 + FQ01 | **M82** block reveal | ours |
| 11 | Footer | FO01 | **M146** wordmark docks small | ours |

> **Note on the lamp (M250):** Day 21's hero used **M250** (lamp light cone), and the kit rule says a hero must not repeat any earlier hero motion. So the hero's code is **M328** (words blur in); the lamp light becomes a soft **M37** breathing glow that drifts with the pointer and the scroll, not a hard cone reveal. If you want M250 back as the hero code, say so and we drop M328's role as the main move.
> Codes reused from older sites outside hero and signature (M54, M236, M146, M471) are allowed by the rules; none is a hero or signature earlier. M422 (signature) and M328 (hero) are new to the log.

Each section's copy is short (2–6 words a line): "The day, kept in gold" · "Four days, one story" · "Seven rounds" · "Quiet objects" · "Blur, then truth" · "The selects" · "Choose your coverage" · "Held, not scrolled" · "What they kept" · "Hold your date". Sample prices in ₹ always carry the word **sample**: ₹95,000 · ₹2,40,000 · ₹4,80,000 · album ₹38,000. Footer: "Concept website by Triozen Tech".

## Motion map

Rule for every row: **a pure function of scroll position** (any speed, stop, or scrolling back gives the same frame, lesson 138); alive when idle (breath, drift, loops); `?static=1` is the only switch that turns motion off and shows every final state; `prefersReducedMotion()` stays the sole switch (no OS reduce-motion). Desktop only.

| Section | Layout | Motion | How it plays here | Record mode (`?record=1`) |
|---|---|---|---|---|
| Loader | – | I39 | thread draws across (DrawSVG), marigold dots pop on along it in turn, the wordmark hangs from the middle and swings once, then the toran lifts away upward into the hero (~1.1 s total, hero first frame ready underneath) | plays once, then auto-scroll starts |
| Nav | NV04 | M471 | top bar condenses into a floating glass pill after ~80 px of scroll; wordmark stays inside | follows scroll |
| Hero | HR36 | M328 + M37 | the headline's words blur in one by one; a warm light breathes and drifts; hero film V1 (K1→K2, frames via `film-frames`) scrubs as a slow push-in with petals falling; idle: slow push continues, petals drift | scroll-driven push-in |
| Functions | GL22 | M241 | pinned ~2.5 screens: four cards start stacked, fan out into a spread as you scroll, reverse on scroll back | scrub |
| Seven rounds | SY02 + film | M422 | **pinned ~5 screens**; V2 flame film (frames via `film-frames`) scrubs under; a hairline gold progress line fills across seven nodes (I–VII), each node lights as it passes; flame breathes when idle | scrub |
| Details | GL11 | M147 | five stills at five depths; as the section scrolls, they drift and scale at different rates and settle into a loose cluster | scrub |
| Craft | CP01 | M46 | scroll drags the gold divider across the lens: left blurred (code blur of the same still), right sharp | scrub, pinned ~1.5 screens |
| Portfolio | GL02 | M428 | two rows of tiles tilted −4°; scroll slides them opposite ways and straightens them to 0° | scrub |
| Packages | PR01 | M40 | three bars stack and pin in turn, each settling on top of the last; middle bar has the gold border | scrub |
| Album | PS04 | M54 | pinned ~2 screens: **V3** (frames via `film-frames`, scrubbed) opens the closed album to the open spread as you scroll; at the end M54 Flips the cover card into the buy box (swatches and chips live); crossfade join only between the V3 end frame and the card | scrub + one hover-click demo |
| Reviews | SP12 | M236 | five quote tags fall in and pile with small tilts as the section arrives; reverse on scroll back | scrub |
| Booking + FAQ | BK04 + FQ01 | M82 | a night-blue block wipes off the gold band; FAQ rows self-open in turn (idle) | scrub |
| Footer | FO01 | M146 | **V4** (frames via `film-frames`, scrubbed) plays as a dim backdrop while the giant wordmark docks small and the petal lands on it; idle: last V4 frames breathe; no join | scrub |
| **Traveller** | F1 | see below | one petal PNG moves between 7 measured anchors | scrub, never pauses |

### Travelling marigold petal (F1, 7 stops, from `day24/refs/moments.md`)

One cut-out petal (`petal.png`) travels the whole page. It **replaces each section's own copy** (no static petal drawn inside the sections), **measures its anchors live every frame** (`data-anchor` elements), **moves only through free space** and **never covers text**, and is **hidden in `?static=1`** (lessons 99, 139). Calm easing (`cubic-bezier(0.22,1,0.36,1)`); it idles with a slow bob and a small turn. No stop in Booking: the path skips it and lands at the footer.

| Stop | Anchor | Where it rests |
|---|---|---|
| 1 | hero light | the warm light patch under the title, lifting out of the falling film petals |
| 2 | mandap pillar | left of the mandap in the hero film, in the dark band beside the pillar |
| 3 | haldi bowl | rim of the haldi card in the functions deck, top corner |
| 4 | sacred flame | beside the flame in the seven-rounds film, at node IV |
| 5 | lens | the focus line of the craft slider, riding the divider |
| 6 | album cover | the top corner of the album cover |
| 7 | footer wordmark | lands on the wordmark's capital M and dissolves into it |

## Hover and cursor ideas

Custom cursor: a small brass ring that grows with a label (`data-cursor`): **Open** (functions cards), **View** (details, portfolio), **Hold** (packages, Reserve), **Slide** (craft divider). In `?record=1` the engine's record cursor plays the marked hovers by itself.

| Element | Hover | `data-hover-demo` |
|---|---|---|
| Nav links / Enquire pill | underline draws left to right; pill fills brighter gold | – |
| Functions deck cards | card lifts, border goes gold, still brightens, label "Open" | **yes** (haldi card) |
| Details cluster stills | still scales 1.06 and drifts toward the cursor; gold hairline appears | **yes** (rings) |
| Craft slider | cursor shows "Slide"; divider glows brighter | – |
| Portfolio tiles | tile lifts out of the tilt, others dim to 60% | – |
| Package bars | bar lifts 14 px and scales 1.02, border gold; price brightens | **yes** (middle bar) |
| Album swatches | click swaps the cover still (A1 → A2 → A3) with a push, not a crossfade | **yes, "click"** (swatch 2) |
| Size chips | gold highlight slides between chips | – |
| Reserve button | gold fills from the left, label changes to "Held", three petals burst | **yes, "click"** |
| Review tags | tag straightens and lifts | – |
| FAQ rows | "+" turns to "–", row opens | – |

≥ 3 hover moments are planned (5 marked). Each marked section gets a `data-record-hold` so the hover plays while the page is still.

### Product detail plan (Album section)

| Interaction | Where |
|---|---|
| Swatch swap (3 cover colours, push transition) | album card |
| Option chips with sliding highlight (10×10, 12×12, 14×10) | album card |
| Sticky buy box (PS04): price **sample**, Reserve button | album section |
| Reserve animation: fill, "Held", petal burst | album card |
| Cover detail loupe on hover (crops from the 2K source, lesson 146) | album cover |
| Album open spread: the V3 end frame stays as the detail image | album card |

## Reel time table (`npm run reel`, `?record=1`, about 36 s; target 25–40 s)

| Part | Seconds |
|---|---|
| Loader + hero open | 4.0 |
| Hero (push-in, petals) | 4.0 |
| Functions deck | 3.5 |
| Seven rounds (signature, hold) | 6.0 |
| Details | 3.0 |
| Craft slider | 3.0 |
| Portfolio | 2.5 |
| Packages | 2.5 |
| Album (+ swatch click, Reserve) | 3.5 |
| Reviews | 2.0 |
| Booking + FAQ | 1.5 |
| Footer (petal lands) | 2.0 |
| **Total** | **37.5** |

`meta.record.duration` ≈ 34 s of page scroll plus the loader (final value tuned in Round 5).

## MISSING ASSETS

Aspect ratios are 16:9, 9:16, 1:1 or 3:4 only (never 4:5). Stills are `.jpg`. The petal (PT) is cut out **after Batch 1 is saved**: `npm run cutout` turns `raw/pt-petal.jpg` into `public/images/marigold-noir/petal.png`. Everything is **Flow (stills) or Veo (clips)**. A Flow edit attaches **one** image only (the master).
Batches follow Day 23: nothing attached first, then attached, then clips.

### Batch 1 · stills, nothing attached (19)

| ID | Item | Aspect | Ext | Save as | Attach | Used in |
|---|---|---|---|---|---|---|
| K1 | decorated mandap, canopy, pillars, hanging marigold strings (hero master) | 16:9 | .jpg | `raw/k1-mandap.jpg` | nothing | hero film start; functions "Wedding" card crop |
| K3 | sacred fire in a brass kund, ghee, flower offerings | 16:9 | .jpg | `raw/k3-flame.jpg` | nothing | seven rounds film start |
| F1 | haldi bowl, turmeric paste, marigold petals, brass thali | 3:4 | .jpg | `raw/f1-haldi.jpg` | nothing | functions card 1 |
| F2 | mehendi cone and dried henna leaves on fabric (no skin) | 3:4 | .jpg | `raw/f2-mehendi.jpg` | nothing | functions card 2, details cluster |
| F3 | sangeet: brass dholak, fairy lights, diyas, no people | 3:4 | .jpg | `raw/f3-sangeet.jpg` | nothing | functions card 3 |
| D1 | wedding rings on silk, macro | 3:4 | .jpg | `raw/d1-rings.jpg` | nothing | details, portfolio |
| D2 | bridal jewellery laid out: necklace, bangles, maang tikka | 1:1 | .jpg | `raw/d2-jewellery.jpg` | nothing | details, portfolio |
| D3 | lehenga and dupatta fabric, zari folds | 3:4 | .jpg | `raw/d3-fabric.jpg` | nothing | details |
| D4 | varmala garlands resting on a stand | 1:1 | .jpg | `raw/d4-garlands.jpg` | nothing | details, portfolio |
| C1 | camera with a prime lens, macro of the lens glass | 16:9 | .jpg | `raw/c1-lens.jpg` | nothing | craft (sharp side; the blur is made in code) |
| A1 | album with linen cover and ribbon, on a dark table | 3:4 | .jpg | `raw/a1-album.jpg` | nothing | album master, swatch 1, source for A1W/A2/A3 |
| P1 | aisle lined with lamps, no people | 16:9 | .jpg | `raw/p1-aisle.jpg` | nothing | portfolio |
| P2 | floor carpeted with marigold petals | 16:9 | .jpg | `raw/p2-petalfloor.jpg` | nothing | portfolio |
| P3 | brass pooja thali with diyas | 16:9 | .jpg | `raw/p3-thali.jpg` | nothing | portfolio |
| P4 | courtyard under string lights, empty | 16:9 | .jpg | `raw/p4-courtyard.jpg` | nothing | portfolio |
| P5 | decorated gateway with marigold toran | 16:9 | .jpg | `raw/p5-gate.jpg` | nothing | portfolio |
| P6 | reception table setting: candles, florals, empty | 16:9 | .jpg | `raw/p6-table.jpg` | nothing | portfolio |
| VD | vidaai: decorated car, rice and petal trail, closed door, no people | 16:9 | .jpg | `raw/vd-vidaai.jpg` | nothing | portfolio, V4 start keyframe |
| PT | single marigold petal, macro, plain dark background | 1:1 | .jpg | `raw/pt-petal.jpg` | nothing | petal source; `npm run cutout` makes `public/images/marigold-noir/petal.png` after Batch 1 is saved |

### Batch 2 · stills, attached (7)

| ID | Item | Aspect | Ext | Save as | Attach | Used in |
|---|---|---|---|---|---|---|
| K2 | mandap pushed in closer, petals mid-fall (hero end frame) | 16:9 | .jpg | `raw/k2-mandap-close.jpg` | `k1-mandap.jpg` | hero film end keyframe |
| K4 | flame close, petals dropping in (seven rounds end frame) | 16:9 | .jpg | `raw/k4-flame-close.jpg` | `k3-flame.jpg` | flame film end keyframe |
| A2 | same album, second cover colour (deep teal) | 3:4 | .jpg | `raw/a2-album-teal.jpg` | `a1-album.jpg` | album swatch 2 |
| A3 | same album, third cover colour (brass silk) | 3:4 | .jpg | `raw/a3-album-brass.jpg` | `a1-album.jpg` | album swatch 3 |
| A1W | same album, wide frame: the closed album on the dark table, camera position fixed for the V3 pair | 16:9 | .jpg | `raw/a1w-album-wide.jpg` | `a1-album.jpg` | V3 start keyframe |
| A4 | same album open on a spread of blank dark pages, **same camera position as A1W** | 16:9 | .jpg | `raw/a4-album-open.jpg` | `a1w-album-wide.jpg` | V3 end keyframe |
| VD2 | vidaai from farther back: the car and petal trail small in the frame, no people | 16:9 | .jpg | `raw/vd2-vidaai-far.jpg` | `vd-vidaai.jpg` | V4 end keyframe |

### Batch 3 · clips (4)

| ID | Item | Aspect | Ext | Save as | Attach | Used in |
|---|---|---|---|---|---|---|
| V1 | slow push-in on the mandap, petals falling (~8 s) | 16:9 | .mp4 | `raw/v1.mp4` | K1 + K2 | hero film (FrameScrub, `lib/chain.ts`) |
| V2 | sacred flame breathing, petals dropping in (~8 s) | 16:9 | .mp4 | `raw/v2.mp4` | K3 + K4 | seven rounds film |
| V3 | the album opens from closed cover to open spread (~6 s) | 16:9 | .mp4 | `raw/v3.mp4` | A1W + A4 | album section (replaces a code flip) |
| V4 | vidaai: the car and petal trail pulling away (~6 s) | 16:9 | .mp4 | `raw/v4.mp4` | VD + VD2 | footer backdrop |

**Total: 30 generations = 26 Flow stills (19 + 7) + 4 Veo clips.** Clips go through `npm run film-frames` at full quality (watermark painted out in one batch with `clean-mark` into `raw/_orig`). No size caps: the goal is the best output.

## Prompts (as run)

_Empty. The user pastes the Flow/Veo prompts here: asset ID · date · prompt (word for word) · attachments._

## Uniqueness

8 of 8 choices different from Days 21–23, see `docs/SITES-LOG.md` (Uniqueness checks, Day 24 plan).
