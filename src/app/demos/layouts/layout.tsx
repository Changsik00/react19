'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function LayoutsDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white dark:bg-neutral-800 border-b border-gray-200 dark:border-neutral-700 p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">Layouts Demo</h1>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800">
              <span className="text-sm text-blue-600 dark:text-blue-300 font-medium">Persistent Layout State:</span>
              <button 
                onClick={() => setCount(c => c + 1)}
                className="bg-blue-500 hover:bg-blue-600 text-white text-xs px-2 py-0.5 rounded transition"
              >
                Count: {count}
              </button>
            </div>

            <nav className="flex gap-4 text-sm">
              <Link 
                href="/demos/layouts" 
                className={`hover:text-blue-500 transition ${pathname === '/demos/layouts' ? 'text-blue-600 font-bold' : 'text-gray-600 dark:text-gray-400'}`}
              >
                Home
              </Link>
              <Link 
                href="/demos/layouts/settings" 
                className={`hover:text-blue-500 transition ${pathname === '/demos/layouts/settings' ? 'text-blue-600 font-bold' : 'text-gray-600 dark:text-gray-400'}`}
              >
                Settings
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full p-8">
        {children}
      </main>

      <footer className="p-4 text-center text-sm text-gray-500 border-t border-gray-200 dark:border-neutral-700">
        This footer is also part of the layout and persists across pages.
      </footer>
    </div>
  );
}
