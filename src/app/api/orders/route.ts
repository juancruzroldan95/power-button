import { db } from "@/firebase/config"
import { NextRequest, NextResponse } from "next/server";
import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore"

export async function GET() {
  const querySnapshot = await getDocs(collection(db, "orders"));
  const docs = querySnapshot.docs.map(doc => doc.data());
  return NextResponse.json(docs);
}

export async function POST(request: NextRequest) {
  const body: Order = await request.json();
  const { orderId } = body;
  await setDoc(doc(db, "orders", orderId), body);
  const docSnap = await getDoc(doc(db, "orders", orderId));
  return NextResponse.json(docSnap.data());
}