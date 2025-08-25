"use client"
import React, { useEffect, useState } from 'react'
interface Order {

      customer: {
          name: string,
          address: string,
          city: string,
         postalCode: string,

      },
      items: 
        {
          map(arg0: (item: any, index: any) => React.JSX.Element): React.ReactNode;
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
      ,
      total: number,
      createdAt: string,
      id: number
    
}

export default function Page() {

  const [order, setOrder]= useState<Order[]>([])
  useEffect(()=>{
    const fetchOrders= async ()=>{
      try{
        const res = await fetch("/api/orders")
        const data= await res.json()
        console.log(data[0])
         if (Array.isArray(data)) {
        setOrder(data);
      } else if (Array.isArray(data.data)) {
        setOrder(data.data);
      } else {
        setOrder([]); 
      }
      }catch(error){
        console.error("error")
      }
    }
    fetchOrders()
  },[]) 
  return (
     <div className="container my-5">
      <h2 className="mb-4 text-center">📦 Your Orders</h2>

      {order.map((order) => (
        <div key={order.id} className="card mb-4 shadow-sm p-3">
          <h5>Order #{order.id}</h5>
          <p>
            <strong>Customer:</strong> {order.customer.name} <br />
            <strong>Address:</strong> {order.customer.address}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(order.createdAt).toLocaleString()}
          </p>

  <ul className="list-group mb-3">
            {order.items.map((item, index) => (
              <li
                key={`${order.id}-${item.productId}-${index}`}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div>
                  {item.productName} (x{item.quantity})
                </div>
                <span>${item.productPrice * item.quantity}</span>
              </li>
            ))}
          </ul>

          <h5 className="text-end">💰 Total: ${order.total}</h5>
        </div>
      ))}
    </div>
  )
}
