# Triple Jump Games — Unity game development

Official landing page for **Triple Jump Games**, built with HTML, CSS and vanilla JavaScript.

## Live website

https://nikita-kiselev-dev.github.io/triple-jump-games/

## Repository

https://github.com/nikita-kiselev-dev/triple-jump-games

## Hosting

GitHub Pages → Deploy from a branch → `main` → `/(root)`.

## Editing

- `index.html`: page content, SEO and social metadata
- `styles.css`: responsive design and visual effects
- `script.js`: project cards, filters and animations
- `assets/`: illustrative project artwork, icon and sharing image

The website contains clearly labeled project placeholders; replace them with real screenshots, descriptions and URLs before using them as released-game examples.

The GitHub account name `nikita-kiselev-dev` is used only for technical URLs, not on-page branding.

## Languages

The site supports English and Russian with a two-button flag switcher in the header. English is the no-JavaScript fallback.

- First visit: browser's preferred language (`ru` → Russian; all other languages → English).
- Manual selection: saved in `localStorage` and reflected in the URL as `?lang=ru` or `?lang=en`.
- An explicit URL language overrides the stored preference for that visit.
- Text, alt attributes, navigation labels, project dialogs, and client-side metadata are translated in `i18n.js`. Add new copy to that dictionary when editing the page.
- No build step or third-party localization dependency.
