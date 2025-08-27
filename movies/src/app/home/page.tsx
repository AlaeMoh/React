"use client"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselHome from "../carouselHome/page"
import Trends from "../trending/page"
export default function Page() {

   
  return ( 
      <div className="carousel">
   <CarouselHome></CarouselHome>
   <div className="trends pt-5 pb-5">
    <Trends></Trends>
   </div>

      </div>

    

  )
}
