export default async function deleteProduct(slug: string) {
  const res = await fetch(`api/products/detail/${slug}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) throw new Error(res.statusText)
  return res.json();
}
