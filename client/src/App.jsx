import React, { useEffect, useState } from 'react';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';

export default function App() {
  const [health, setHealth] = useState('Checking...');

  useEffect(() => {
    fetch(`${apiUrl}/api/health`)
      .then((response) => response.json())
      .then((data) => setHealth(`${data.status} - ${data.app}`))
      .catch(() => setHealth('API unavailable'));
  }, []);

  return (
    <main>
      <h1>Docker CI/CD Practice</h1>
      <p>A simple React and Express app.</p>
      <button onClick={() => window.location.reload()}>Check API again</button>
      <div className="status">API status: {health}</div>
    </main>
  );
}
