import Counter from '@/components/Counter';

export default function ComponentsDemoPage() {
  console.log('Server Component rendered on server');

  return (
    <div className="flex min-h-screen flex-col items-center p-12 gap-8 bg-gray-50 dark:bg-neutral-900">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Rendering Strategies</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Open your <strong>Terminal</strong> to see Server logs, and <strong>Browser Console</strong> to see Client logs.
        </p>
      </div>

      <div className="w-full max-w-3xl p-8 border-2 border-blue-500 rounded-xl bg-white dark:bg-neutral-800 relative shadow-lg">
        <div className="absolute -top-4 left-8 bg-blue-500 text-white px-3 py-1 text-sm font-bold rounded shadow-sm">
          SERVER COMPONENT (PAGE)
        </div>
        
        <div className="mb-8">
          <p className="text-gray-700 dark:text-gray-300 mb-2">
            I was rendered on the server at:
          </p>
          <p className="text-2xl font-mono font-bold text-blue-600 dark:text-blue-400">
            {new Date().toLocaleTimeString()}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            (Try refreshing the page. This time will update, but the counter below will reset because the HTML is regenerated.)
          </p>
        </div>

        {/* Client Component is nested here */}
        <Counter />
      </div>
    </div>
  );
}
