import { NextResponse } from "next/server";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/app/firebase/config"

export async function GET(request: Request) { // Get all products
  const querySnapshot = await getDocs(collection(db, "products"));
  const docs = querySnapshot.docs.map(doc => doc.data());
  return NextResponse.json(docs)
}