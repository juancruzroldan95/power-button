import { NextResponse } from "next/server";
import { mockData } from "@/data/products";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const slug = searchParams.get('slug');
  const productData = mockData.find(product => product.slug === slug)
  return NextResponse.json(productData)
}