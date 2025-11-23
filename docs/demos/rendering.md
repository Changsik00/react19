# Server vs Client Components Demo

**Path**: `/demos/rendering`
**Source**: `src/app/demos/rendering/page.tsx`

## Concept
Next.js 13+ (App Router) introduces a new mental model for rendering.

### Server Components (Default)
- Render on the server.
- Send static HTML to the client.
- **Pros**: Smaller bundle size, better SEO, direct backend access.
- **Cons**: No interactivity (hooks like `useState`, `useEffect` are not allowed).

### Client Components
- Render on the client (and server during hydration).
- Opt-in with `"use client"` directive at the top of the file.
- **Pros**: Full interactivity, access to browser APIs.
- **Cons**: Increases bundle size.

## Implementation
1.  **Page (`page.tsx`)**: A Server Component that renders static content.
2.  **Counter (`Counter.tsx`)**: A Client Component that manages state (`useState`).
3.  **Composition**: The Server Component imports and renders the Client Component.

## Key Takeaways
- Use Server Components by default.
- Move interactive logic to the leaves of your component tree (Client Components).
