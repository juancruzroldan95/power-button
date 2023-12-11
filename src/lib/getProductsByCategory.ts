export default async function getProductsByCategory(category: CategoryName) {
  const res = await fetch(`${process.env.BASE_URL}/api/products/${category}`, { cache: 'no-store' });
  if (!res.ok) throw new Error(res.statusText)
  return res.json();
};
