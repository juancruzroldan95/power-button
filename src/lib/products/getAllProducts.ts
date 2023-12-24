export default async function getAllProducts() {
  if (process.env.BASE_URL) {
    const res = await fetch(`${process.env.BASE_URL}/api/products`, { cache: 'no-store' });
    if (!res.ok) throw new Error(res.statusText)
    return res.json();
  } else {
    const res = await fetch(`api/products`, { cache: 'no-store' });
    if (!res.ok) throw new Error(res.statusText)
    return res.json();
  }
};