export default async function getProductDetail(slug: string) {
  const res = await fetch(`${process.env.BASE_URL}/api/products/detail/${slug}`, { cache: 'no-store' })
  if (!res.ok) throw new Error(res.statusText)
  return res.json();
}