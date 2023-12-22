export default async function getAllUsers() {
  const res = await fetch(`${process.env.BASE_URL}/api/users/`, { cache: 'no-store' });
  if (!res.ok) throw new Error(res.statusText)
  return res.json();
};
