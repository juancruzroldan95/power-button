import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/firebase/config"

export async function GET(request: Request, { params }: { params: { category: CategoryName } }) { // Get products by category
  const { category } = params;
  const querySnapshot = await getDocs(query(collection(db, "products"), where("category", "==", category)));
  const docs = querySnapshot.docs.map(doc => doc.data());
  return NextResponse.json(docs)
}