export default async function getProductDetail(slug: string) {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  const res = await fetch(`${BASE_URL}/api/products/detail/${slug}`, { cache: 'no-store' });
  if (!res.ok) throw new Error(res.statusText);

  return res.json();
}
