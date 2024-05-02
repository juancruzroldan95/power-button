import { db, storage } from '@/firebase/config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, setDoc, getDoc } from "firebase/firestore";

export default async function createNewProduct(values: Product, file: File) {
  const storageRef = ref(storage, file.name);
  const fileSnap = await uploadBytes(storageRef, file)
  const fileURL = await getDownloadURL(fileSnap.ref)
  const body = { ...values, image: fileURL };
  await setDoc(doc(db, "products", body.slug), body);
  const docSnap = await getDoc(doc(db, "products", body.slug))
  const newProduct = docSnap.data();
  return newProduct;
}
