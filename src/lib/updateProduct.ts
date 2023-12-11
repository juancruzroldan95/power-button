export default async function updateProduct(slug: string, body: Product) {
  const res = await fetch(`${process.env.BASE_URL}/api/products/detail/${slug}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(res.statusText)
  return res.json();
}
