'use client';

import { useState } from 'react';

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className={`mt-2 px-3 py-1 text-sm rounded-full transition border ${
        liked
          ? 'bg-red-50 border-red-200 text-red-600 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400'
          : 'bg-gray-50 border-gray-200 text-gray-500 hover:bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 dark:text-gray-400'
      }`}
    >
      {liked ? '❤️ Liked' : '🤍 Like'}
    </button>
  );
}
