# Dynamic Routing

**Path**: `/demos/dynamic-routing`
**Source**: `src/app/demos/dynamic-routing/[id]/page.tsx`

## Concept
Dynamic Routes allow you to handle dynamic URL segments (like IDs, slugs, or usernames) with a single page component.

## How it Works

### 1. Folder Structure
- To create a dynamic route, wrap a folder name in square brackets: `[folderName]`.
- Example: `src/app/demos/dynamic-routing/[id]/page.tsx`.
- This matches URLs like `/demos/dynamic-routing/1`, `/demos/dynamic-routing/abc`, etc.

### 2. Accessing Parameters (Next.js 15 Update)
In Next.js 15, the `params` prop passed to the page component is a **Promise**. You must `await` it before accessing the properties.

```tsx
// src/app/demos/dynamic-routing/[id]/page.tsx

type Props = {
  params: Promise<{ id: string }>; // params is a Promise!
};

export default async function Page({ params }: Props) {
  const { id } = await params; // Must await in Next.js 15
  
  return <h1>Post ID: {id}</h1>;
}
```

## Key Takeaways
- **Wildcard Segments**: `[id]` acts as a wildcard.
- **Async Params**: Always `await params` in Server Components in Next.js 15.
- **Reusability**: One component handles infinite URL variations.
