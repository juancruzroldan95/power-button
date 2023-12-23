import { NextResponse } from "next/server";
import { collection, doc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore"
import { db } from "@/firebase/config"

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const docRef = doc(db, "products", slug);
  const docSnapshot = await getDoc(docRef);
  if (!docSnapshot.data()) {
    return NextResponse.json(`Product with slug ${slug} not found.`);
  }
  return NextResponse.json(docSnapshot.data());
}

export async function PUT(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  const body: Product = await request.json();
  await updateDoc(doc(db, "products", slug), body);
  const udpatedDoc = await getDoc(doc(db, "products", slug));
  return NextResponse.json(udpatedDoc.data())
}

export async function DELETE(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;
  await deleteDoc(doc(db, "products", slug));
  const querySnapshot = await getDocs(collection(db, "products"));
  const docs = querySnapshot.docs.map(doc => doc.data());
  return NextResponse.json(docs)
}