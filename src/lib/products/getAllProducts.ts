export default async function getAllProducts() {
  const res = await fetch(`/api/products/`, { cache: 'no-store' });
  if (!res.ok) throw new Error(res.statusText)
  return res.json();
};