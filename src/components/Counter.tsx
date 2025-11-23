'use client';

import { useState, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Client Component mounted in browser');
  }, []);

  

  return (
    <div className="p-6 border-2 border-green-500 rounded-lg bg-green-50 dark:bg-green-900/20 relative mt-4">
      <div className="absolute -top-3 left-4 bg-green-500 text-white px-2 py-0.5 text-sm font-bold rounded">
        CLIENT COMPONENT
      </div>
      <p className="mb-4 text-gray-700 dark:text-gray-300">
        I am rendered on the client. Check your <strong>Browser Console</strong> to see my log.
      </p>
      <div className="flex items-center gap-4 justify-center">
        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition shadow-sm"
        >
          -
        </button>
        <span className="text-3xl font-mono font-bold w-12 text-center">{count}</span>
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition shadow-sm"
        >
          +
        </button>
      </div>
    </div>
  );
}
