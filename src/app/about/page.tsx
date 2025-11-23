export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">About Page</h1>
      <p className="text-lg text-gray-600">
        This page was created simply by adding a file at <code>src/app/about/page.tsx</code>.
      </p>
      <div className="mt-8 p-4 bg-gray-100 rounded-lg dark:bg-neutral-800">
        <p className="font-mono text-sm">
          No <code>react-router-dom</code> configuration needed!
        </p>
      </div>
    </div>
  );
}
