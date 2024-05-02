import { db } from "@/firebase/config"
import { doc, getDoc } from "firebase/firestore";

export default async function getProductDetail(slug: string) {
  const docSnap = await getDoc(doc(db, "products", slug));
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.log(`Product with slug ${slug} not found.`);
    return undefined;
  }
}
