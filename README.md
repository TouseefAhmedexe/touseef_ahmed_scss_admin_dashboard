# SCSS Admin Dashboard

An admin dashboard built with SCSS, CSS Grid and Flexbox, compiled with Sass and served by Vite.
Task 16 of my Bloomrix internship. There is no JavaScript. All data is sample data.

## What it includes
- Sidebar, top bar, page heading, summary cards, a data table, status filters, status badges
  and a form in a modal
- The sidebar becomes a slide-in menu on screens narrower than 1024px
- A design system made of CSS custom properties: colors, spacing, typography, radii, shadows
- Light and dark themes
- States: hover, focus-visible, disabled, loading and error

## SCSS folder structure
src/scss/
- main.scss - the only entry file. It declares the layer order and loads each folder into a layer
- abstracts/ - Sass-only code that creates no CSS: maps, the to-rem and z functions, mixins
- base/ - the reset, the custom properties (design tokens), typography and keyframes
- layout/ - the app shell, sidebar, top bar, page header and footer
- components/ - one partial for each component, named with BEM
- pages/ - the dashboard grid areas and the filter wiring
- utilities/ - small helper classes
- overrides/ - the reduced motion rule

## Compile and run
- npm install        installs Vite and Sass
- npm run dev        development server at http://localhost:5173 with source maps
- npm run css        sass --style=expanded --source-map src/scss/main.scss compiled/main.css
- npm run build      production build in dist/
- npm run preview    serves the production build

## Sass variables and CSS custom properties
Sass variables and maps exist only while compiling: breakpoints, spacing and radii values, the
list of status names and progress steps. CSS custom properties exist in the browser and can
change at runtime, so colors and the theme use them. The Sass maps feed the custom properties
with @each, so both stay in one place.

## Sass features used
- @use and @forward with _index.scss files
- Mixins: respond-to (mobile-first media queries), focus-ring, visually-hidden, surface, dark-tokens
- Functions: to-rem and z
- Maps: breakpoints, spacing, radii, z-layers and statuses
- Loops: the spacing and radius tokens, the status badges, the stat colors, the progress bar
  widths and the filter rules
- meta.load-css puts each folder into a cascade layer

## Design choices
- Cascade layers (reset, base, layout, components, pages, utilities, overrides) decide the
  priority, so no !important is needed.
- Class names follow BEM. Nesting goes one level deep.
- The container query is on the summary cards, because the same card appears in columns of
  different widths. The rest of the page uses media queries.
- clamp() is used for the page title, the section headings and the big numbers.

## CSS-only interactions and their limits
- The mobile menu and the dark theme checkbox use :has(). Dark mode also follows the system
  setting. If the system is dark, the page is dark even when the checkbox is unticked.
- The status filters hide table rows with :has(). CSS cannot search text, so there is no search.
- The modal uses :target. Escape does not close it and the keyboard focus is not trapped,
  because those need JavaScript.
- :has() and container queries need a current browser.

## Tested
Phone 375px, tablet 768px and desktop 1280px. Screenshots are in the screenshots folder.