import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/app/firebase/config"

export async function GET(request: Request, { params }: { params: { category: CategoryName } }) { // Get products by category
  const { category } = params;
  const productsRef = collection(db, "products");
  const q = category === "all" ? productsRef : query(productsRef, where("category", "==", category));
  const querySnapshot = await getDocs(q);
  const docs = querySnapshot.docs.map(doc => doc.data());
  return NextResponse.json(docs)
}