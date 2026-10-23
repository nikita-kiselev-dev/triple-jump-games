# Triple Jump Games — visual system

Mode: **Experience / studio portfolio**. This is a refinement of the existing website, not a rebrand. The content and truthful labeling of illustration placeholders stay intact.

## Visual direction
- Dark charcoal with a warm aubergine undertone, coral/peach highlights, restrained atmospheric glows.
- Large, tightly typeset editorial headlines with Inter, supported by DM Mono for genuine technical metadata and codes.
- Product-like presentation for game concepts: window chrome, image-first case studies, compact caption overlays.
- Sections alternate open editorial layouts and subtle surface changes; avoid generic nested-card grids.
- Rounded corners, soft offset shadow depth, understated outlines, and clear interactive affordances.
- The existing animated hero and abstract studio artwork are established brand components. Keep movement restrained and honour reduced-motion preferences.

## Tokens
Defined in `styles.css`, especially `--bg`, `--surface`, `--stroke`, `--muted`, `--accent`, `--accent-2`, `--container`. Edit tokens before introducing one-off colors.

## UX / responsiveness
- Header stays accessible on long pages and marks the current section; top hairline shows reading progress.
- Project filters expose a live visible count; project controls and modal work with keyboard and pointer.
- Desktop: editorial two-column project grid. Mobile: one column, conservative image crops, readable captions, tap-friendly controls.
- Without JavaScript, static content stays readable. With reduced motion, animation must never block content.
- Project artworks marked as concepts are not screenshots of shipped games. Do not silently turn placeholder text into product claims.

## Quality checks
Validate the landing on narrow phone, intermediate tablet, desktop, keyboard-only and reduced-motion setups. Maintain the incumbent brand while adjusting typography, layout, semantics and polish.

Design criteria drawn from [Impeccable](https://github.com/pbakaus/impeccable), especially `polish`, `typeset`, and `craft-floor`. No Impeccable runtime is required to view or deploy this static site.
