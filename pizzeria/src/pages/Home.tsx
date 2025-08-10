"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import "../app/styles/Home.css";
import Link from 'next/link';
export default function Home() {

  const router=useRouter()
  const goMenu= ()=>{
    router.push("/menu")
  }

  return (
     <div className="home" >
      <div className="headerContainer ps-5 pt-5">
        <h1 className='pt-5 ps-3'> Pedro&apos;s Pizzeria </h1>
        <p className='ps-4'> PIZZA TO FIT ANY TASTE</p>
        <Link href={"/Menu"}>
        <button className='btn btn-dark ms-5'> ORDER NOW </button>
        </Link>
          
        
      </div>
    </div>
  )
}
