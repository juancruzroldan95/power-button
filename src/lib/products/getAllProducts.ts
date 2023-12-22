export default async function getAllProducts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/`, { cache: 'no-store' });
  if (!res.ok) throw new Error(res.statusText)
  return res.json();
};
