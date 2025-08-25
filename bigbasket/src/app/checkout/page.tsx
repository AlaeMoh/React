"use client";

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/navigation";

interface CartItem {
  id: number;
  productName: string;
  productPrice: number;
  quantity: number;
  productImageUrl: string;
  categoryName: string;
  productId: number,
  productSku: string,
  productShortName: string,
  productDescription: string,
  createdDate: string,
  deliveryTimeSpan: string,
  categoryId: number,
}

export default function CheckoutPage() {

  const router = useRouter()
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [total, setTotal] = useState(0);
  const [successMsg, setSuccessMsg] = useState("");
  const [form, setForm] = useState({
    name: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });


  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await fetch("http://localhost:3001/cart");
        const data = await res.json();
        setCartItems(data);
        const sum = data.reduce(
          (acc: number, item: CartItem) => acc + item.productPrice * item.quantity,
          0
        );
        setTotal(sum);
      } catch (err) {
        console.error("❌ Error fetching cart:", err);
      }
    };
    fetchCart();
  }, []);



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



 const handleSubmit = async (e: React.FormEvent)=>{
  e.preventDefault();
 const order ={
  customer: form,
  items: cartItems,
  total,
  createdAt: new Date().toISOString(),
 };

 try{
  const res = await fetch("http://localhost:3001/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });
        if (res.ok) {
        setSuccessMsg("🎉 Order placed successfully!");
        setCartItems([]);
        setTotal(0);
       setTimeout(()=>{
        router.push("/")
      },3000)

        await fetch("http://localhost:3001/cart", {
          method: "DELETE",
        }).catch(() => console.warn("⚠️ json-server doesn't support DELETE all by default"));
      }

 } catch(err){
      console.error("❌ Error placing order:", err);

 }
}
  return (
<div className="container my-5">
      <h2 className="mb-4 text-center">🛒 Checkout</h2>

      {successMsg && <div className="alert alert-success">{successMsg}</div>}

      <div className="row">
        {/* Order Summary */}
        <div className="col-md-5">
          <div className="card shadow-lg p-3">
            <h4 className="mb-3">Order Summary</h4>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((item) => (
                <div key={item.productId} className="d-flex mb-3 border-bottom pb-2">
                  <img
                    src={item.productImageUrl}
                    alt={item.productName}
                    className="me-3"
                    style={{ width: "60px", height: "60px", objectFit: "cover" }}
                  />
                  <div>
                    <p className="mb-1 fw-bold">{item.productName}</p>
                    <small>
                      {item.quantity} × ${item.productPrice}
                    </small>
                  </div>
                </div>
              ))
            )}
            <h5 className="mt-3">Total: ${total}</h5>
          </div>
        </div>

        {/* Shipping + Payment */}
        <div className="col-md-7">
          <div className="card shadow-lg p-4">
            <h4 className="mb-3">Shipping Information</h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="123 Main St"
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">City</label>
                  <input
                    type="text"
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Postal Code</label>
                  <input
                    type="text"
                    name="postalCode"
                    value={form.postalCode}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>
              </div>

              <h4 className="mt-4 mb-3">Payment Details</h4>
              <div className="mb-3">
                <label className="form-label">Card Number</label>
                <input
                  type="text"
                  name="cardNumber"
                  value={form.cardNumber}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="**** **** **** 1234"
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Expiry Date</label>
                  <input
                    type="text"
                    name="expiry"
                    value={form.expiry}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">CVV</label>
                  <input
                    type="password"
                    name="cvv"
                    value={form.cvv}
                    onChange={handleChange}
                    className="form-control"
                    placeholder="***"
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-success w-100 mt-3">
                ✅ Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}