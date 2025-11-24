type Props = {
  params: Promise<{ id: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  // In Next.js 15, params is a Promise that needs to be awaited
  const { id } = await params;

  return (
    <div className="p-12 max-w-4xl mx-auto">
      <div className="mb-8">
        <span className="bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300 px-3 py-1 rounded-full text-sm font-bold">
          ID: {id}
        </span>
      </div>

      <h1 className="text-4xl font-bold mb-6">Reading Post #{id}</h1>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          This content is dynamically generated based on the URL parameter <code>{id}</code>.
        </p>
        
        <div className="p-6 bg-gray-50 dark:bg-neutral-800 rounded-lg border border-gray-200 dark:border-neutral-700">
          <h3 className="text-lg font-bold mb-2">How it works:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>The file path is <code>src/app/demos/dynamic-routing/[id]/page.tsx</code>.</li>
            <li>The <code>[id]</code> part acts as a wildcard.</li>
            <li>Next.js passes the value (e.g., "1", "2", "abc") as <code>params.id</code> to the component.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
