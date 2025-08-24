"use client"
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
// import Image from "next/image";
import { useRouter } from 'next/navigation';
import { json } from 'stream/consumers';


    interface Product{
       productId: number,
       productSku: string,
       productName: string,
       productPrice: number,
       productShortName: string,
       productDescription: string,
       createdDate: string,
       deliveryTimeSpan: string,
       categoryId: number,
       productImageUrl: string,
       categoryName: string
    }

export default function Page() {
  const params = useParams();
  const router = useRouter()
  const {id} = params;
  const [products , setProducts] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState("");

  

  useEffect(()=> {
    const fetchProduct = async ()=>{
      try{
        const res =await fetch("/api/products", {cache: "no-store"})
        const data = await res.json();
        const product = data.data.find((item:Product)=> item.productId === Number(id))
        setProducts(product || null)
      }catch (error){
        console.error("Error fetching product:", error)
      }finally{
        setLoading(false)
      }
    };
    if(id){
      fetchProduct()
    }
  },[id])


    const handleAddToCart= async()=>{ 
    try{
      const res= await fetch("/api/cart", {
        method:"POST",
        headers: {"Content-Type": "application/json"},
        body:JSON.stringify({
           productId: products?.productId,
        productName: products?.productName,
        productPrice: products?.productPrice,
        productImageUrl: products?.productImageUrl,
        quantity: 1
        })
      })
      const result= await res.json()

      if(result.success){
      setMessage("✅ Added to cart!")
      setTimeout(()=>{
        router.push("/")
      },3000)
    }else{
      setMessage("❌ Failed to add to cart");

    }
      }catch(error){
          console.error("Error adding to cart:", error);
      setMessage("❌ Server error");
      }
      
    }
   if (loading) return <p>Loading...</p>;
  if (!id) return <p>Product not found</p>;

  


  return (
     <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-4 p-4">
        <div className="row g-4 align-items-center">
          <p>{message}</p>
          {/* Product Image */}
          <div className="col-md-5 text-center">
            <img
              src={products?.productImageUrl}
              alt={products?.productName}
              width={400}
              height={400}
              className="rounded-4"
            />
          </div>

          {/* Product Info */}
          <div className="col-md-7">
            <h2 className="fw-bold">{products?.productName}</h2>
            <p className="text-muted">Category: {products?.categoryName}</p>
            <p className="card-text">{products?.productDescription}</p>
            <p className="card-text">{products?.deliveryTimeSpan}</p>
            <h4 className="text-success fw-bold">${products?.productPrice}</h4>
          

            {/* Buttons */}
            <div className="d-flex gap-3 mt-4">
              <button
                className="btn btn-danger rounded-pill px-4"
                onClick={handleAddToCart}
              >
                🛒 Add to Cart
              </button>

              <button
                className="btn btn-outline-success rounded-pill px-4"
                onClick={()=>router.push("/")}
                
              >
                🔍 Check More Items
              </button>

              <button
                className="btn btn-success rounded-pill px-4"
                 onClick={()=>router.push("/checkout")}
              >
                ✅ Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
