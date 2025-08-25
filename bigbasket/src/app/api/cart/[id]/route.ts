import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "db.json");

// 🟢 PUT → update quantity
export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const body = await req.json();
    const file = await fs.readFile(dbPath, "utf-8");
    const data = JSON.parse(file);

    let cart = data.cart || [];
    const itemIndex = cart.findIndex((item: any) => item.productId == id);

    if (itemIndex === -1) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    // update quantity
    cart[itemIndex].quantity = body.quantity;

    data.cart = cart;
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2));

    return NextResponse.json({ success: true, cart });
  } catch (error) {
    return NextResponse.json({ error: "Failed to update item" }, { status: 500 });
  }
}

// 🟢 DELETE → remove item
export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;
    const file = await fs.readFile(dbPath, "utf-8");
    const data = JSON.parse(file);

    let cart = data.cart || [];
    cart = cart.filter((item: any) => item.productId != id);

    data.cart = cart;
    await fs.writeFile(dbPath, JSON.stringify(data, null, 2));

    return NextResponse.json({ success: true, cart });
  } catch (error) {
    return NextResponse.json({ error: "Failed to remove item" }, { status: 500 });
  }
}