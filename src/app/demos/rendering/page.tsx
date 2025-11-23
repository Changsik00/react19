import Counter from '@/components/Counter';

export default function ComponentsDemoPage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-24 gap-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Server vs Client Components</h1>
        <p className="text-lg text-gray-600 max-w-2xl">
          This page is a <strong>Server Component</strong> by default. It renders on the server and sends HTML to the browser.
          Below, we import a <strong>Client Component</strong> that handles interactivity.
        </p>
      </div>

      <div className="grid gap-8 w-full max-w-2xl">
        {/* Server Component Part */}
        <div className="p-6 border border-blue-200 rounded-lg bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
          <h2 className="text-xl font-bold mb-2 text-blue-700 dark:text-blue-300">Server Component (This Page)</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Renders on the server</li>
            <li>No <code>useState</code> or <code>useEffect</code></li>
            <li>Can fetch data directly (async/await)</li>
            <li>Reduces bundle size sent to client</li>
          </ul>
        </div>

        {/* Client Component Part */}
        <Counter />
      </div>
    </div>
  );
}
