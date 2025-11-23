'use client';

import { useState, useEffect } from 'react';

export default function ClientOnlyList() {
  const [items, setItems] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This runs ONLY in the browser
    setIsClient(true);
    
    // Simulate fetching data or generating list on client
    const timer = setTimeout(() => {
      setItems(['Item 1 (Client)', 'Item 2 (Client)', 'Item 3 (Client)']);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6 border-2 border-purple-500 rounded-lg bg-purple-50 dark:bg-purple-900/20 mt-4">
      <div className="mb-4">
        <span className="bg-purple-500 text-white px-2 py-1 text-sm font-bold rounded">
          CLIENT ONLY LIST
        </span>
      </div>

      <div className="mb-4 text-gray-700 dark:text-gray-300">
        <p>Initial State: <strong>Empty Array []</strong></p>
        <p>Current State: <strong>{items.length} items</strong></p>
      </div>

      {items.length === 0 ? (
        <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded animate-pulse text-center text-gray-500">
          {isClient ? 'Loading items on client...' : 'Server rendered this empty state'}
        </div>
      ) : (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="p-3 bg-white dark:bg-neutral-800 rounded shadow-sm border border-purple-200 dark:border-purple-800">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
