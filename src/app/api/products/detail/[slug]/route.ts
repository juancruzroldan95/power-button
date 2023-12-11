import { NextResponse } from "next/server";
import { doc, getDoc, updateDoc } from "firebase/firestore"
import { db } from "@/firebase/config"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const docRef = doc(db, "products", slug);
  const docSnapshot = await getDoc(docRef);
  return NextResponse.json(docSnapshot.data());
}

export async function PUT(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const body: Product = await request.json();
  await updateDoc(doc(db, "products", slug), body);
  const udpatedDoc = await getDoc(doc(db, "products", slug));
  return NextResponse.json(udpatedDoc.data())
}