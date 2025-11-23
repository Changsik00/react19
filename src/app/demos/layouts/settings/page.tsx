export default function LayoutsSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Settings Page</h2>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        You have navigated to a different page!
      </p>
      
      <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
        <p className="text-blue-800 dark:text-blue-300">
          Look at the header above. The counter value is still the same as it was on the Home page.
        </p>
      </div>
    </div>
  );
}
