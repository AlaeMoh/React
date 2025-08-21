import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "db.json");

export async function GET() {
  const file = fs.readFileSync(filePath, "utf-8");
  const db = JSON.parse(file);
  return NextResponse.json({ data: db.users || [] });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const file = fs.readFileSync(filePath, "utf-8");
    const db = JSON.parse(file);

    const newUser = {
      id: db.users.length + 1,
      ...body,
    };

    db.users.push(newUser);
    fs.writeFileSync(filePath, JSON.stringify(db, null, 2));

    return NextResponse.json({ success: true, user: newUser });
  } catch (err) {
    return NextResponse.json({ success: false, error: "Failed to save user" }, { status: 500 });
  }
}