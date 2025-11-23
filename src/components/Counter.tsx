'use client';

import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-neutral-800 shadow-sm">
      <h2 className="text-xl font-bold mb-2">Client Component</h2>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        This component uses <code>useState</code>, so it must be a Client Component.
      </p>
      <div className="flex items-center gap-4">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
        >
          -
        </button>
        <span className="text-2xl font-mono font-bold w-8 text-center">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          +
        </button>
      </div>
    </div>
  );
}
