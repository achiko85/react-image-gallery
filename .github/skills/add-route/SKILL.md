---
name: add-route
description: "Add a new route to the React app. Use when creating a new page, adding a route, or extending navigation. Scaffolds page component, registers route in App.jsx, and adds Navbar link."
---

# Add Route

## When to Use
- Adding a new page to the application
- Creating a new route endpoint
- Extending the navigation menu

## Procedure

### 1. Create the page component

Create `src/pages/{PageName}.jsx` following the existing pattern:

```jsx
export default function PageName() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">Page Title</h1>
      <p className="mt-4">Page content here.</p>
    </div>
  );
}
```

- PascalCase filename and function name
- Default export
- Tailwind utility classes for styling
- `p-6` container padding to match other pages

### 2. Register the route in App.jsx

In [src/App.jsx](../../src/App.jsx):

1. Add import: `import PageName from "./pages/PageName";`
2. Add route inside `<Routes>`: `<Route path="/pagename" element={<PageName />} />`

### 3. Add Navbar link

In [src/components/Navbar.jsx](../../src/components/Navbar.jsx):

Add a `<Link>` matching the existing pattern:
```jsx
<Link to="/pagename">PageName</Link>
```

### 4. Verify

Run `npm run build` to confirm no import or syntax errors.
