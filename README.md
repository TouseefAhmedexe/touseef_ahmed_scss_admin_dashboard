# SCSS Admin Dashboard

An admin dashboard built with SCSS, CSS Grid and Flexbox, compiled with Sass and served by Vite.
Task 16 of my Bloomrix internship. All data is sample data.

## What it includes
- Sidebar, top bar, page heading, summary cards, a data table, status filters, status badges and a form in a modal
- The sidebar becomes a slide-in menu on screens narrower than 1024px
- Design system using CSS custom properties: colors, spacing, typography, radii, and shadows
- Light and dark themes with explicit user toggle control
- States: hover, focus-visible, disabled, loading, and interactive submit feedback
- Enhanced accessibility: Escape key modal close handler and keyboard focus ring support

## SCSS Folder Structure
src/scss/
- main.scss - The only entry file. Declares layer order and loads partials via meta.load-css
- abstracts/ - Sass-only variables, maps, to-rem/z functions, and mixins
- base/ - Reset, design tokens, typography, and keyframes
- layout/ - App shell, sidebar, top bar, page header, and footer
- components/ - BEM component partials (buttons, table, stat cards, filters, badges, modal, form)
- pages/ - Dashboard layout and status filter rules
- utilities/ - Helper classes
- overrides/ - Prefers-reduced-motion media query

## Compile and Run
- npm install        Installs dependencies (Vite and Sass)
- npm run dev        Development server at http://localhost:5173 with dev source maps
- npm run css        Compiles SCSS directly into `compiled/main.css` for static deployment
- npm run build      Production build bundle in `dist/`
- npm run preview    Serves the production build

## Build Pipeline & Source of Truth
- During local development, Vite compiles `/src/scss/main.scss` in memory with dev sourcemaps.
- For static deployments without Node.js, `compiled/main.css` acts as the compiled production stylesheet.

## Screenshots Verification
Testing screenshots are captured and located in the `screenshots/` directory.