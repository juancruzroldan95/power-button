import { NextResponse } from "next/server";
import { collection, doc, getDoc, getDocs, updateDoc, deleteDoc } from "firebase/firestore"
import { db } from "@/firebase/config"

export async function GET(request: Request, { params }: { params: { email: string } }) {
  const { email } = params;
  const docRef = doc(db, "users", email);
  const docSnapshot = await getDoc(docRef);
  if (!docSnapshot.data()) {
    return NextResponse.json(`User with email ${email} not found.`);
  }
  return NextResponse.json(docSnapshot.data());
}