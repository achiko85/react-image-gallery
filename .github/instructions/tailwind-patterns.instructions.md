---
description: "Use when writing or editing React components with Tailwind CSS. Covers utility class conventions, responsive patterns, and common pitfalls."
applyTo: "src/**/*.jsx"
---
# Tailwind CSS Patterns

## Required
- Use Tailwind utility classes inline — no CSS modules, styled-components, or `@apply`
- Mobile-first responsive: start with base classes, add `md:` / `lg:` breakpoints
- Use Tailwind's spacing scale (`p-4`, `mt-6`) — avoid arbitrary values like `p-[13px]`
- Use semantic color utilities (`bg-gray-800`, `text-white`) from the default palette

## Layout
- Flexbox: `flex gap-4 items-center` for horizontal layouts
- Grid: `grid grid-cols-2 md:grid-cols-5 gap-4` for image/card grids
- Container padding: `p-6` for page-level components

## Interactive States
- Hover effects: `hover:scale-105 transition-transform` for images/cards
- Link styling: match existing Navbar pattern (plain text links in nav)

## Avoid
- Inline `style={{}}` attributes — use Tailwind classes instead
- Creating separate CSS files per component
- `@apply` in CSS — defeats the purpose of utility-first
- Arbitrary values when a Tailwind scale value exists
