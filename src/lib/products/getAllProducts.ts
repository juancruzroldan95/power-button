import { db } from "@/firebase/config"
import { collection, getDocs } from "firebase/firestore"

export default async function getAllProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const allProducts = querySnapshot.docs.map(doc => doc.data());
  return allProducts;
};