"use client";

import { useSearchParams } from "next/navigation";
import { MenuList } from "../helpers/MenuList";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image  from "next/image"
export default function Page() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";
  
  const [name, setName]= useState("");
  const [phone, setPhone]= useState ("");
  const [address, setAddress]= useState("")

      const userDetails= (e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        console.log("Name:", name)
        console.log("Name:", phone)
        console.log("Name:", address)
    }
  const router= useRouter()

  const filteredPizzas = MenuList.filter((pizza) =>
    pizza.name.toLowerCase().includes(query)
  );

  
      
     const handleRedirect=  (()=>{
        setTimeout(()=>{
            router.push("/")
        },3000);
        
    })
  return (
    <div className="container my-5">
      <h2 className="mb-4">Search Results for &quot;{query}&quot;</h2>

      {filteredPizzas.length > 0 ? (
        <div className="row">
          {filteredPizzas.map((pizza) => (
            <div className="col-md-5" key={pizza.id}>
              <div className="card shadow-lg border-0 rounded-4">
                <Image
                  src={pizza.image.src}
                  alt={pizza.name}
                  className="card-img-top rounded-top-4"
                />
                <div className="card-body text-center">
                  <h5 className="card-title">{pizza.name}</h5>
                  <p className="text-danger fw-bold">${pizza.price}</p>
                </div>
              </div>


            </div>
            
          ))}
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
      ) : (
        <p className="text-muted">No pizzas found.</p>
      )}
    </div>
  );
}