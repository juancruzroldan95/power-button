import { db } from "@/firebase/config"
import { NextRequest, NextResponse } from "next/server";
import { collection, getDocs, doc, setDoc, getDoc } from "firebase/firestore"

export async function GET() {
  const querySnapshot = await getDocs(collection(db, "users"));
  const docs = querySnapshot.docs.map(doc => doc.data());
  return NextResponse.json(docs);
}

export async function POST(request: NextRequest) {
  const body: User = await request.json();
  const { email } = body;
  await setDoc(doc(db, "users", email), body);
  const docSnap = await getDoc(doc(db, "users", email));
  return NextResponse.json(docSnap.data());
}