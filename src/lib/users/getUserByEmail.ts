export default async function getUserByUid(email: string) {
  const res = await fetch(`${process.env.BASE_URL}/api/users/${email}`, { cache: 'no-store' })
  if (!res.ok) throw new Error(res.statusText)
  return res.json();
}
