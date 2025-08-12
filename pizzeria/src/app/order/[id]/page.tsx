"use client"
import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { MenuList } from '../../helpers/MenuList';
import { useRouter } from "next/navigation"
import Image  from "next/image"

export default function Page({params}:{ params: { id: string } }) {
    const pizza = MenuList.find((item) => item.id === parseInt(params.id));

    const [name, setName]= useState("");
    const [phone, setPhone]= useState ("");
    const [address, setAddress]= useState("")

    const userDetails= (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("Name:", name)
        console.log("Name:", phone)
        console.log("Name:", address)
    }

    const router=useRouter()

    const handleRedirect=  (()=>{
        setTimeout(()=>{
            router.push("/")
        },3000);
        
    })
    
  return pizza? (
     <div className="container my-5">
      <div className="row">
        {/* Selected Pizza Details */}
        <div className="col-md-5">
          <div className="card shadow-lg border-0 rounded-4">
            <Image
              src={pizza.image.src}
              alt={pizza.name}
              className="card-img-top rounded-top-4"
              width={10}
              height={320}
            />
            <div className="card-body">
              <h4 className="card-title text-center">{pizza.name}</h4>
              <p className="card-text text-center text-danger fw-bold fs-5">
               {pizza.price} $
              </p>
            </div> 
          </div>
        </div>

        {/* Order Form */}
        <div className="col-md-7">
          <div className="card p-4 shadow-lg border-0 rounded-4">
            <h3 className="mb-4 text-center text-success">Complete Your Order</h3>

            <form onSubmit={userDetails}>
              <div className="mb-3">
                <label className="form-label fw-bold" >Full Name</label>
                <input
                value={name} onChange={(e) => setName(e.target.value)}
                  type="text"
                  className="form-control"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold" >Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter your phone number"
                  value={phone} onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-bold" >Delivery Address</label>
                <textarea
                  className="form-control"
                  placeholder="Enter your address"
                  value={address} onChange={(e) => setAddress(e.target.value)}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-danger w-100 fw-bold" onClick={handleRedirect}>
                Place Order
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  ):  (
    <h2 className="text-center mt-5">Pizza not found</h2>
  );
}
