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
    title: 'Client-Side List (Dynamic)',
    description: 'Proving SSR limits with dynamic state',
    path: '/demos/rendering/client-list',
    status: 'Complete',
  },
  {
    title: 'Layouts & Navigation',
    description: 'Shared UI and persistent state',
    path: '/demos/layouts',
    status: 'Complete',
  },
  {
    title: 'Data Fetching',
    description: 'Async/await in Server Components',
    path: '/demos/data-fetching',
    status: 'Complete',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen p-8 md:p-12 bg-gray-50 dark:bg-neutral-900 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-12 text-center md:text-left">
          <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Next.js 15 & React 19
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Exploration Dashboard
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {demos.map((demo) => (
            <Link
              key={demo.path}
              href={demo.path}
              className="group block p-6 bg-white dark:bg-neutral-800 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-neutral-700 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-3">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {demo.title}
                </h2>
                <span
                  className={`px-2.5 py-0.5 text-xs font-medium rounded-full ${
                    demo.status === 'Complete'
                      ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
                  }`}
                >
                  {demo.status}
                </span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {demo.description}
              </p>
            </Link>
          ))}
        </div>

        <footer className="mt-16 text-center text-sm text-gray-500 dark:text-gray-500">
          <p>Project initialized with Next.js 15, React 19, TypeScript, and Tailwind CSS.</p>
        </footer>
      </div>
    </div>
  );
}
