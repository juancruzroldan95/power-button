export default async function createNewUser(body: User) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(res.statusText)
  return res.json();
}
