const { v4: uuidv4 } = require('uuid');

export default async function createNewOrder(values: Order) {
  const orderId = uuidv4();
  const body = { ...values, orderId: orderId }

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/orders/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(res.statusText)
  return res.json();
}
