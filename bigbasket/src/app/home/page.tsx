"use client"
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Image from 'next/image';

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


    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading]= useState(true)
    // useEffect(()=>{
    //     fetch("https://freeapi.miniprojectideas.com/api/BigBasket/GetAllProducts")
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setProducts(data.data);
    //         setLoading(false)
    //     })
    //     .catch((error)=>{
    //         console.error("Error fetching products:", error);
    //         setLoading(false)
    //     })
    // }, [])
     if (loading) {
    return <p className="text-center mt-5">Loading products...</p>;
  }
  return (
     <div className="container my-5">
      <h1 className="mb-4">BigBasket Products</h1>
      {/* <div className="row">
        {products.slice(0, 10).map((product) => (
          <div className="col-md-3 col-sm-6 mb-4" key={product.productId}>
            <div className="card h-100">
                <Image src={product.productImageUrl} width={10} height={10} alt={''}></Image>
              <div className="card-body">
                <h5 className="card-title">{product.productName}</h5>
                <p className="card-text">Price: ₹{product.productPrice}</p>
                <button className="btn btn-success w-100">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  )
}
