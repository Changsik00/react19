import LikeButton from '@/components/LikeButton';

async function getData() {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 2000));
  
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  
  return res.json();
}

export default async function DataFetchingPage() {
  const users = await getData();

  return (
    <div className="p-12 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Data Fetching (Server)</h1>
      
      <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 p-6 rounded-lg mb-8">
        <h2 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-2">Streaming & Hydration:</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
          <li><strong>Loading...</strong>: Shows <code>loading.tsx</code> immediately (Server).</li>
          <li><strong>Data Ready</strong>: Server finishes fetching and streams HTML (Server).</li>
          <li><strong>Interactive</strong>: The <code>LikeButton</code> becomes clickable (Client Hydration).</li>
        </ul>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {users.map((user: any) => (
          <div key={user.id} className="p-6 bg-white dark:bg-neutral-800 rounded-xl shadow-sm border border-gray-200 dark:border-neutral-700 hover:shadow-md transition">
            <h3 className="font-bold text-lg mb-1">{user.name}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">@{user.username}</p>
            <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
              <p>📧 {user.email}</p>
              <p>🌐 {user.website}</p>
            </div>
            <LikeButton />
          </div>
        ))}
      </div>
    </div>
  );
}
