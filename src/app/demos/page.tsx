import Link from 'next/link';

const demos = [
  {
    title: 'File-system Routing',
    description: 'How folders become routes in Next.js',
    path: '/demos/routing',
    status: 'Complete',
  },
  {
    title: 'Server vs Client Components',
    description: 'Understanding rendering strategies',
    path: '/demos/rendering',
    status: 'Complete',
  },
  {
    title: 'Layouts & Navigation',
    description: 'Shared UI and persistent state',
    path: '/demos/layouts',
    status: 'Planned',
  },
  {
    title: 'Data Fetching',
    description: 'Async/await in Server Components',
    path: '/demos/data-fetching',
    status: 'Planned',
  },
];

export default function DemosPage() {
  return (
    <div className="min-h-screen p-12 bg-gray-50 dark:bg-neutral-900">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">Next.js Exploration</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {demos.map((demo) => (
            <Link
              key={demo.path}
              href={demo.path}
              className="block p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm hover:shadow-md transition border border-gray-200 dark:border-neutral-700"
            >
              <div className="flex justify-between items-start mb-2">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{demo.title}</h2>
                <span
                  className={`px-2 py-1 text-xs rounded-full ${
                    demo.status === 'Complete'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                  }`}
                >
                  {demo.status}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{demo.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
