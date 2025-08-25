"use client"
import React, { useEffect, useState } from 'react'
import Link from "next/link";


interface CartItem {
  id: number;
  productName: string;
  productPrice: number;
  productImageUrl: string;
  categoryName: string;
  quantity: number;
  productId: number,
  productSku: string,
  productShortName: string,
  productDescription: string,
  createdDate: string,
  deliveryTimeSpan: string,
  categoryId: number,
}
export default function Page() {
   const [cart, setCart]= useState<CartItem[]>([])
    const [loading, setLoading] = useState(true);



   useEffect(()=>{
       const getCart= async()=>{
    try{
      const res= await fetch("http://localhost:3001/cart")
      const data= await res.json()
      
      setCart(data)
    }catch(error){
        console.error("Error fetching products:", error);
   }finally{
    setLoading(false)
   }
   }
    getCart()
   },[])


  //  const increaseQty = async(item:CartItem)=>{
  //   const res = await fetch(`http://localhost:3001/cart/${item.productId}`, {
  //       method:"PATCH",
  //       headers:{"Content-Type": "application/json"},
  //       body:JSON.stringify({quantity:item.quantity +1}),
  //   });

  //   const updated= await res.json();
  //   setCart(cart.map((c)=>(c.id === item.productId? updated:c)))
  //  }

  //  const decreaseQty= async (item: CartItem)=>{
  //   if(item.quantity === 1) return
  //   const res = await fetch(`http://localhost:3001/cart/${item.productId}`,
  //       { method:"PATCH",
  //       headers:{"Content-Type": "application/json"},
  //       body:JSON.stringify({quantity:item.quantity -1}),
  //      })

  //   const updated= await res.json();
  //   setCart(cart.map((c)=>(c.id === item.productId ? updated: c)))   
  //  }

  //  const removeItem = async (id:number)=>{
  //   await fetch(`http://localhost:3001/cart/${id}`, {method: "DELETE"})
  //   setCart(cart.filter(c=>c.id !== id));
  //  }

   const total= cart.reduce((sum, item)=> sum + item.productPrice * item.quantity, 0)
     if (loading) return <p className="text-center">Loading cart...</p>;

  return (
        <div className="container my-5">
      <h2 className="text-center mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center text-muted">Your cart is empty.</p>
      ) : (
<div className="container my-5">
      <h1 className="mb-4">🛍 Your Cart</h1>
      <div className="row">
        {cart.map((item) => (
          <div className="col-md-4 mb-4" key={item.productId}>
            <div className="card h-100 shadow-sm">
              <img
                src={item.productImageUrl}
                alt={item.productName}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{item.productName}</h5>
                <p className="card-text">Price: ${item.productPrice}</p>
                <p className="card-text">Quantity: {item.quantity}</p>
                <Link href={`cart/${item.productId}`} className="btn btn-primary w-100">
                  Manage Item
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-end mt-4">
        <Link href="/checkout" className="btn btn-success btn-lg">
          Proceed to Checkout ✅
        </Link>
      </div>
    </div>
      )}

      {/* {cart.length > 0 && (
        <div className="card p-4 shadow-lg border-0 rounded-4 mt-4">
          <h4 className="text-end">
            Total: <span className="text-success">${total.toFixed(2)}</span>
          </h4>
          <button className="btn btn-success w-100 mt-3">✅ Checkout</button>
        </div>
      )} */}
    </div>
  )
}
