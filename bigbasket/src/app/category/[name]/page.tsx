"use client"
import React, { use, useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Toggles from '../../toggles/page'
import "../../styles/category.css"

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

export default function Page({params}:{params:Promise< {name:string}>}) {
     const { name } = use(params);
    const [products, setProducts]= useState<Product[]>([])
    const [loading, setLoading]= useState(true)

    useEffect(() => {
  const fetchProduct = async () => {
    try {

const res = await fetch("/api/products", { cache: "no-store" });
const data = await res.json();
console.log("API data:", data);
const productList = data.data;

const filteredData = productList.filter(
  (product: Product) =>
    product.categoryName.toLowerCase() === name.toLowerCase()
);

setProducts(filteredData);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  fetchProduct();
}, [name]);

    if (loading) return <p>Loading {name}...</p>;
  return (
        <div className="container my-5">
          <div className="toggle pb-5">
            <Toggles></Toggles>
          </div>
      <h1 className="title mb-4 text-capitalize text-center pb-3" >{name} that might intrest you</h1>
      <div className="row">
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map((product) => (
            <div key={product.productId} className="col-md-3 mb-4">
              <div className="card h-100 shadow-sm">
                <img 
                  src={product.productImageUrl}
                  className="imagsource"
                  alt={product.productName}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">Price: ₹{product.productPrice}</p>
                  <button className='btn btn-success'> Check product</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
