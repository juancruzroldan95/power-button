import { NextResponse } from "next/server";
import { mockData } from "@/data/products";

export async function GET() {
  return NextResponse.json(mockData)
}