// import { NextResponse } from "next/server";

// const CART_URL = "http://localhost:3001/cart";

// export async function POST(req: Request) {
//   try {
//     const body = await req.json();
//     const { id, productName, productPrice, productImageUrl, categoryName } = body;

//     const res = await fetch(`${CART_URL}?id=${id}`);
//     const existing = await res.json();

//     if (existing.length > 0) {
//       const cartItem = existing[0];
//       const updateRes = await fetch(`${CART_URL}/${cartItem.id}`, {
//         method: "PATCH",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ quantity: cartItem.quantity + 1 }),
//       });
//       const updated = await updateRes.json();
//       return NextResponse.json({ success: true, cartItem: updated });
//     }

//     const createRes = await fetch(CART_URL, {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         id,
//         productName,
//         productPrice,
//         productImageUrl,
//         categoryName,
//         quantity: 1,
//       }),
//     });

//     const newItem = await createRes.json();
//     return NextResponse.json({ success: true, cartItem: newItem });

//   } catch (err) {
//     console.error("❌ Error in /api/cart POST:", err);
//     return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
//   }
// }

// app/api/cart/route.ts
// import { NextResponse } from "next/server";
// import fs from "fs";
// import path from "path";

// const dbPath = path.join(process.cwd(), "db.json");

// // POST: Add new item
// export async function POST(request: Request) {
//   try {
//     const newItem = await request.json();
//     const file = fs.readFileSync(dbPath, "utf-8");
//     const db = JSON.parse(file);

//     // If cart doesn't exist, initialize
//     if (!db.cart) db.cart = [];

//     // Check if product already in cart
//     const existing = db.cart.find((c: any) => c.productId === newItem.productId);
//     if (existing) {
//       existing.quantity += newItem.quantity;
//     } else {
//       db.cart.push(newItem);
//     }

//     // Save back to db.json
//     fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));

//     return NextResponse.json({ success: true, cart: db.cart });
//   } catch (err: any) {
//     console.error("❌ POST /api/cart error:", err.message);
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }

import { NextResponse } from "next/server";

// pretend in-memory cart (replace with db.json logic if needed)
let cart: any[] = [];

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const body = await req.json();

  // find the product in the cart
  const itemIndex = cart.findIndex((item) => String(item.id) === id);
  if (itemIndex === -1) {
    return NextResponse.json({ success: false, message: "Item not found" }, { status: 404 });
  }

  // update quantity
  cart[itemIndex].quantity = body.quantity;
  return NextResponse.json({ success: true, data: cart[itemIndex] });
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  cart = cart.filter((item) => String(item.id) !== id);

  return NextResponse.json({ success: true, message: "Item removed" });
}