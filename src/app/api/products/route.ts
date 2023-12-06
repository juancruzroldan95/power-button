import { NextRequest, NextResponse } from "next/server";
import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore"
import { db } from "@/app/firebase/config"

export async function GET() { // Get all products
  const querySnapshot = await getDocs(collection(db, "products"));
  const docs = querySnapshot.docs.map(doc => doc.data());
  return NextResponse.json(docs)
}

export async function POST(request: NextRequest) {
  const body: Product = await request.json();
  const { slug } = body;
  await setDoc(doc(db, "products", slug), body)
  const docSnap = await getDoc(doc(db, "products", slug))
  return NextResponse.json(docSnap.data());
}