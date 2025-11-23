# Data Fetching & Streaming Demo

**Path**: `/demos/data-fetching`
**Source**: `src/app/demos/data-fetching/page.tsx`

## Concept
Next.js App Router simplifies data fetching by allowing `async/await` directly in Server Components. It also supports **Streaming** to improve perceived performance.

## How it Works

### 1. Server Component (`page.tsx`)
- The page is an `async` function.
- It pauses execution at `await fetch(...)`.
- While paused, Next.js doesn't block the entire page.

### 2. Loading UI (`loading.tsx`)
- While the Server Component is fetching data, Next.js immediately sends the `loading.tsx` component to the browser.
- This ensures the user sees *something* (skeleton UI) instantly, rather than a blank white screen.

### 3. Streaming
- Once the data fetch completes (after 2 seconds in our demo), the server finishes generating the HTML for the page.
- It **streams** this new HTML to the browser.
- The browser automatically swaps the `loading.tsx` skeleton with the real content.

### 4. Hydration (`LikeButton.tsx`)
- The user list contains a `<LikeButton />`, which is a **Client Component**.
- When the HTML arrives, the button is visible but not yet interactive.
- React **hydrates** the button (attaches JavaScript event listeners).
- Now the button responds to clicks.

## Key Takeaways
- **Fetch on Server**: No API routes or `useEffect` needed for simple fetching.
- **Instant Feedback**: Use `loading.tsx` for instant loading states.
- **Interactive Islands**: Embed Client Components (`LikeButton`) inside Server Components for interactivity.
