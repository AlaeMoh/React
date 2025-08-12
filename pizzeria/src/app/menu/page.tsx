"use client"
import React from 'react'
import {MenuList} from '../helpers/MenuList'
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from 'next/link';

export default function Menu() {
  return (
    <div>  <div className="container py-5">
      <h2 className="text-center mb-4 text-dark">Our Menu</h2>
      <div className="row g-4">
        {MenuList.map((item, key) => (
          <div className="col-md-4" key={item.id}>
            <div className="card shadow-sm border-0 h-100">
              
              <img
                src={item.image.src}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="text-success">{item.price} $</h6>
                <p className="card-text">{item.ingredients}</p>
                <Link href={`/order/${item.id}`}><button className="btn btn-dark mt-auto" >Order Now</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div></div>
  )
}
