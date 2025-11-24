import Link from 'next/link';

const posts = [
  { id: 1, title: 'Next.js 15 is Awesome' },
  { id: 2, title: 'React 19 New Features' },
  { id: 3, title: 'Why TypeScript Matters' },
];

export default function DynamicRoutingPage() {
  return (
    <div className="p-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Dynamic Routing</h1>
      
      <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-indigo-800 dark:text-indigo-300 mb-2">Concept:</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Instead of creating a file for every single page (e.g., <code>/blog/1</code>, <code>/blog/2</code>), 
          we use <strong>Dynamic Segments</strong> like <code>[id]</code> to handle infinite possibilities with one file.
        </p>
      </div>

      <h3 className="text-2xl font-bold mb-4">Blog Posts</h3>
      <div className="grid gap-4">
        {posts.map((post) => (
          <Link 
            key={post.id} 
            href={`/demos/dynamic-routing/${post.id}`}
            className="block p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-gray-200 dark:border-neutral-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition group"
          >
            <h4 className="text-lg font-bold group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
              {post.title}
            </h4>
            <p className="text-sm text-gray-500 mt-1">
              Read post #{post.id} &rarr;
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
