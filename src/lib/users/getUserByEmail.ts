export default async function getUserByUid(email: string) {
  if (process.env.BASE_URL) {
    const res = await fetch(`${process.env.BASE_URL}/api/users/${email}`, { cache: 'no-store' })
    if (!res.ok) throw new Error(res.statusText)
    return res.json();
  } else {
    const res = await fetch(`api/users/${email}`, { cache: 'no-store' })
    if (!res.ok) throw new Error(res.statusText)
    return res.json();
  }
}
