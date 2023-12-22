import { storage } from '@/firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default async function createNewProduct(values: Product, file: File) {
  const storageRef = ref(storage, file.name);
  const fileSnap = await uploadBytes(storageRef, file)
  const fileURL = await getDownloadURL(fileSnap.ref)
  const body = { ...values, image: fileURL };

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  if (!res.ok) throw new Error(res.statusText)
  return res.json();
}
