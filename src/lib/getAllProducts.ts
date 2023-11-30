export default async function getAllProducts() {
  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error(res.statusText)
  }
  return res.json();
};
