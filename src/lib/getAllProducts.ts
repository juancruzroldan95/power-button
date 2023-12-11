export default async function getAllProducts() {
  const res = await fetch(`${process.env.BASE_URL}/api/products/`, { cache: 'no-store', next: { revalidate: 60 } });
  if (!res.ok) throw new Error(res.statusText)
  return res.json();
};
