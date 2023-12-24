const { v4: uuidv4 } = require('uuid');

export default async function createNewOrder(values: Order) {
  const orderId = uuidv4();
  const body = { ...values, orderId: orderId }

  if (process.env.BASE_URL) {
    const res = await fetch(`${process.env.BASE_URL}/api/orders/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (!res.ok) throw new Error(res.statusText)
    return res.json();
  } else {
    const res = await fetch(`api/orders/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (!res.ok) throw new Error(res.statusText)
    return res.json();
  }
}
