export default async function getProductsByCategory(category: CategoryName) {
  if (process.env.BASE_URL) {
    const res = await fetch(`${process.env.BASE_URL}/api/products/${category}`, { cache: 'no-store' });
    if (!res.ok) throw new Error(res.statusText)
    return res.json();
  } else {
    const res = await fetch(`api/products/${category}`, { cache: 'no-store' });
    if (!res.ok) throw new Error(res.statusText)
    return res.json();
  }
};
