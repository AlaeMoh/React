import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "db.json");

function readDB() {
  const data = fs.readFileSync(dbPath, "utf-8");
  return JSON.parse(data);
}

function writeDB(content: any) {
  fs.writeFileSync(dbPath, JSON.stringify(content, null, 2));
}

export async function GET() {
  try {
    const db = readDB();
    return NextResponse.json(db.orders || []);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch orders" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const db = readDB();
    if (!db.orders) db.orders = [];

    const newOrder = {
      id: Date.now(), 
      items: body.items || [],
      customer: body.customer || {},
      total: body.total || 0,
      createdAt: new Date().toISOString(),
    };

    db.orders.push(newOrder);
    writeDB(db);

    return NextResponse.json(newOrder, { status: 201 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to create order" }, { status: 500 });
  }
}