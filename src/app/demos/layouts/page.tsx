export default function LayoutsHome() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Layouts Home</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        This is the main content area.
      </p>
      
      <div className="p-6 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
        <h3 className="text-lg font-bold text-green-800 dark:text-green-300 mb-2">Try This:</h3>
        <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Click the <strong>Count</strong> button in the top header. Increase the number.</li>
          <li>Click <strong>Settings</strong> in the navigation menu.</li>
          <li>Notice that the <strong>Count</strong> in the header <strong>did NOT reset</strong>.</li>
        </ol>
      </div>
      
      <p className="text-gray-600 dark:text-gray-400">
        This happens because the <code>layout.tsx</code> component is not unmounted when navigating between pages that share the same layout. Only the page content (children) is replaced.
      </p>
    </div>
  );
}
