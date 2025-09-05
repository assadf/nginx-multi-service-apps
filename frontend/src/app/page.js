export const dynamic = 'force-dynamic';
export const revalidate = 0;

async function getData() {
  // Skip during build time to prevent build failures
  if (process.env.NODE_ENV === 'production' && process.env.NEXT_PHASE === 'phase-production-build') {
    return 'Loading...';
  }
  
  try {
    // Use a relative URL that will be proxied through nginx in production
    const res = await fetch('/api/', { 
      cache: 'no-store'
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    return res.text();
  } catch (error) {
    console.error('Error fetching data:', error);
    return 'Error loading data';
  }
}

export default async function Home() {
  const message = await getData();

  return (
    <main>
      <h1>Backend says:</h1>
      <p>{message}</p>
    </main>
  );
}