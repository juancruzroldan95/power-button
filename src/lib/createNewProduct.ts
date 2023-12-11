export default async function createNewProduct(body: Product) {
  const res = await fetch(`${process.env.BASE_URL}/api/products/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(res.statusText)
  return res.json();
}
