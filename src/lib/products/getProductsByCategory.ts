import { db } from "@/firebase/config"
import { collection, query, where, getDocs } from "firebase/firestore";

export default async function getProductsByCategory(category: CategoryName) {
  const querySnapshot = await getDocs(query(collection(db, "products"), where("category", "==", category)));
  const products = querySnapshot.docs.map(doc => doc.data());
  return products;
};
