export default async function getAllOrders() {
  if (process.env.BASE_URL) {
    const res = await fetch(`${process.env.BASE_URL}/api/orders/`, { cache: 'no-store' });
    if (!res.ok) throw new Error(res.statusText)
    return res.json();
  } else {
    const res = await fetch(`api/orders/`, { cache: 'no-store' });
    if (!res.ok) throw new Error(res.statusText)
    return res.json();
  }
};
