---
description: "Scaffold a new page with route registration and navbar link"
agent: "agent"
---
Create a new page called "{{pageName}}" for this React app. Follow these steps exactly:

1. **Create the page component** in `src/pages/{{pageName}}.jsx` as a functional component with a default export. Use Tailwind utility classes for styling. Include a heading and placeholder content.

2. **Register the route** in [src/App.jsx](src/App.jsx):
   - Import the new page component
   - Add a `<Route>` element inside `<Routes>` with path `/{{pageName lowercase}}`

3. **Add a navbar link** in [src/components/Navbar.jsx](src/components/Navbar.jsx):
   - Add a `<Link>` to the new route, matching the existing link style

Follow the project conventions: functional components, default exports, PascalCase filenames, inline Tailwind classes, mobile-first responsive design.
