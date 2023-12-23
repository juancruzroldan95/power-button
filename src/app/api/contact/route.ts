import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body: Contact = await request.json();
  return NextResponse.json(body);
}