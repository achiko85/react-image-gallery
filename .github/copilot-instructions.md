# Project Guidelines

## Tech Stack

- **React 18** with functional components and hooks (no class components)
- **Vite** for dev server and production builds
- **React Router DOM v6** for client-side routing
- **Tailwind CSS 3** for all styling — use utility classes directly, no CSS modules or styled-components
- **PostCSS + Autoprefixer** for CSS processing

## Architecture

```
src/
├── components/    # Shared/reusable UI components (e.g., Navbar)
├── pages/         # Route-level page components (Home, Gallery, About)
├── main.jsx       # Entry point (StrictMode + BrowserRouter)
├── App.jsx        # Route definitions
└── index.css      # Tailwind directives only
public/images/     # Static image assets (image1.jpg–image10.jpg)
```

- **Pages** map 1:1 to routes defined in `App.jsx`
- **Components** are shared UI elements used across pages
- Static assets live in `public/` and are referenced with absolute paths (e.g., `/images/image1.jpg`)

## Code Style

- Functional components with default exports
- PascalCase filenames for components (`Navbar.jsx`, `Gallery.jsx`)
- JSX file extension for all React components
- Tailwind utility classes inline — no separate CSS files per component
- Mobile-first responsive design (e.g., `grid-cols-2 md:grid-cols-5`)

## Build and Test

```bash
npm install        # Install dependencies
npm run dev        # Start Vite dev server with HMR
npm run build      # Production build → dist/
npm run preview    # Preview production build locally
```

No test framework or linter is currently configured.

## Deployment

AWS CodeBuild deploys `dist/` to S3. See `buildspec.yml` — the S3 bucket name placeholder (`REPLACE_ME_BUCKET_NAME`) must be replaced before use.

## Conventions

- No state management library — component-local state only
- No custom hooks currently; add to `src/hooks/` if needed
- New routes: add page in `src/pages/`, register route in `App.jsx`, add link in `Navbar.jsx`
