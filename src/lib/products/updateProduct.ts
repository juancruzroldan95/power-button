import { storage } from '@/firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export default async function updateProduct(slug: string, values: Product, file?: File) {
  let body = values;

  function isEmptyFile(file?: File): boolean {
    if (!file?.name) {
      return true
    } else {
      return false
    }
  };

  if (!isEmptyFile(file)) {
    const storageRef = ref(storage, file?.name);
    const fileSnap = await uploadBytes(storageRef, file as File);
    const fileURL = await getDownloadURL(fileSnap.ref);
    body = { ...values, image: fileURL };
  }
  const res = await fetch(`api/products/detail/${slug}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error(res.statusText)
  return res.json();
}
