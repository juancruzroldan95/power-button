export default async function getAllOrders() {
  const res = await fetch(`${process.env.BASE_URL}/api/orders/`, { cache: 'no-store' });
  if (!res.ok) throw new Error(res.statusText)
  return res.json();
};
