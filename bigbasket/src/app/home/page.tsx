"use client"
import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/home.css";
import Carousel from '../carousel/page'
import Toggles from '../toggles/page'
import Link from 'next/link';
import { useRouter } from 'next/navigation';

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

  const router= useRouter();

    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading]= useState(true)


    const fetchProducts= async()=>{
      try {
        const res = await fetch("/api/products");
        const data= await res.json();
        setProducts(data.data);
      }catch (error){
       console.error("Error fetching products:", error);

      }finally{
        setLoading(false)
      }
    }
    useEffect(()=>{
      fetchProducts();

    }, [])


  
     if (loading) {
    return <p className="text-center mt-5">Loading products...</p>;
  }

 

  
  
  return (
     <div className="container my-5">
      <div className="toggles">
         <Toggles></Toggles>
      </div>
       <div className="carousel">
        <Carousel></Carousel>
       </div>
      <h1 className=" head mb-4 text-danger text-center">BigBasket Products</h1>

       <div className="container my-5">
      <h2 className="text-center mb-4 fw-bold">✨ Our Products ✨</h2>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 col-sm-6 mb-4" key={product.productId}>
            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
              {/* Clickable Image */}
              <Link href={`/product/${product.productId}`}>
                <img
                  src={product.productImageUrl}
                  alt={product.productName}
                  className="card-img-top img-fluid"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </Link>

              {/* Card Body */}
              <div className="card-body text-center">
                <h5 className="card-title text-truncate">{product.productName}</h5>
                <p className="card-text text-muted">💲 {product.productPrice}</p>
                <button className="btn btn-success w-100 rounded-pill" onClick={()=>router.push(`http://localhost:3000/product/${product.productId}`)}>
                  check-Product
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
