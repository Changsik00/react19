export default function Loading() {
  return (
    <div className="p-12 max-w-4xl mx-auto">
      <div className="h-10 w-64 bg-gray-200 dark:bg-neutral-800 rounded animate-pulse mb-6"></div>
      
      <div className="h-40 bg-gray-100 dark:bg-neutral-900 rounded-lg animate-pulse mb-8"></div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="h-40 bg-gray-200 dark:bg-neutral-800 rounded-xl animate-pulse"></div>
        ))}
      </div>
    </div>
  );
}
