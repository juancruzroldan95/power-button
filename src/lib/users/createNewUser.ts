export default async function createNewUser(body: User) {
  if (process.env.BASE_URL) {
    const res = await fetch(`${process.env.BASE_URL}/api/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    if (!res.ok) throw new Error(res.statusText)
    return res.json();
  } else {
    const res = await fetch(`api/users/`, {
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
