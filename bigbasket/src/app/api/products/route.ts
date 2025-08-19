import db from "../../../../db.json";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");

  let result = db.products; 

  if (category) {
    result = result.filter((p) => p.categoryName === category);
  }

  return NextResponse.json({ data: result });
}
