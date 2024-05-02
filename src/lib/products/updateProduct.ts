import { db, storage } from '@/firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, updateDoc, getDoc } from "firebase/firestore";


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

  await updateDoc(doc(db, "products", slug), body);
  const updatedDocSnap = await getDoc(doc(db, "products", slug));
  return updatedDocSnap.data();
}
