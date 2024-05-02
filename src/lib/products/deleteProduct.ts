import { db } from '@/firebase/config';
import { collection, doc, deleteDoc, getDocs } from "firebase/firestore";

export default async function deleteProduct(slug: string) {
  await deleteDoc(doc(db, "products", slug));
  const querySnapshot = await getDocs(collection(db, "products"));
  const remainingProducts = querySnapshot.docs.map(doc => doc.data());
  return remainingProducts;
}
