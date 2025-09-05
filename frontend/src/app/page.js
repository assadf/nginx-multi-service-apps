async function getData() {
  const res = await fetch('http://localhost:3001/');

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.text();
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