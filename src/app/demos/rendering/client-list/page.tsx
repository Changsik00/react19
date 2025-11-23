import ClientOnlyList from '@/components/ClientOnlyList';

export default function ClientListDemoPage() {
  return (
    <div className="flex min-h-screen flex-col items-center p-12 gap-8 bg-gray-50 dark:bg-neutral-900">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">Client-Side Rendering Demo</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          This demo proves that <strong>state generated on the client</strong> cannot be rendered by the server.
        </p>
      </div>

      <div className="w-full max-w-2xl">
        <div className="p-4 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 rounded-lg mb-8">
          <strong>Experiment:</strong> Refresh this page and check the <strong>Network Tab</strong> (look for the document request).
          <br />
          You will see the "Server rendered this empty state" message in the HTML, but NOT the list items.
        </div>

        <ClientOnlyList />
      </div>
    </div>
  );
}
