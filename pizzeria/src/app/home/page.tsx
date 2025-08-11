"use client"
import React from 'react'
import "../styles/Home.css";
import Link from 'next/link';
export default function Home() {



  return (
     <div className="home" >
      <div className="headerContainer ps-5 pt-5">
        <h1 className='pt-5 ps-3'> Pedro&apos;s Pizzeria </h1>
        <p className='ps-4'> PIZZA TO FIT ANY TASTE</p>
        <Link href={"/menu"}>
        <button className='btn btn-dark ms-5'> ORDER NOW </button>
        </Link>
          
        
      </div>
    </div>
  )
}
