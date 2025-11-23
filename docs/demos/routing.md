# File-system Routing Demo

**Path**: `/demos/routing`
**Source**: `src/app/demos/routing/page.tsx`

## Concept
In Next.js, the file system is the main API.
- **Folders** define routes.
- **Files** (like `page.tsx`) define the UI for a route.

## Implementation
We created a folder structure `src/app/demos/routing` and added a `page.tsx`.
This automatically made the route accessible at `/demos/routing` without any additional configuration in a router file.

## Key Takeaways
- No `react-router-dom` setup required.
- Nested folders create nested routes.
