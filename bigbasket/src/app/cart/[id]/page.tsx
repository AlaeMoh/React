"use client"

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface CartItem {
  id: number;
  productName: string;
  productImageUrl: string;
  productPrice: number;
  quantity: number;
}

export default function Page() {
  const { id } = useParams();
  const router = useRouter();
  const [item, setItem] = useState<CartItem | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const res = await fetch(`/api/cart/${id}`);
        const data = await res.json();
        setItem(data);
      } catch (err) {
        console.error("❌ Error fetching cart item:", err);
      }
    };
    fetchItem();
  }, [id]);

  const updateQuantity = async (newQty: number) => {
    if (!item) return;
    try {
      const res = await fetch(`/api/cart/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...item, quantity: newQty }),
      });
      if (res.ok) {
        setItem({ ...item, quantity: newQty });
      }
    } catch (err) {
      console.error("❌ Error updating quantity:", err);
    }
  };

  const removeItem = async () => {
    try {
      await fetch(`/api/cart/${id}`, { method: "DELETE" });
      router.push("/cart"); // back to cart page
    } catch (err) {
      console.error("❌ Error removing item:", err);
    }
  };

  if (!item) return <p className="text-center mt-5">⏳ Loading item...</p>;

  return (
    <div className="container my-5">
      <div className="card p-4 shadow-lg">
        <img
          src={item.productImageUrl}
          alt={item.productName}
          className="img-fluid mb-3"
        />
        <h2>{item.productName}</h2>
        <p>Price: ${item.productPrice}</p>
        <p>Quantity: {item.quantity}</p>

        <div className="d-flex gap-3">
          <button
            className="btn btn-outline-primary"
            onClick={() => updateQuantity(item.quantity + 1)}
          >
            ➕ Increase
          </button>
          <button
            className="btn btn-outline-warning"
            onClick={() => updateQuantity(item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            ➖ Decrease
          </button>
          <button className="btn btn-danger" onClick={removeItem}>
            ❌ Remove
          </button>
        </div>
      </div>
    </div>
  );
}