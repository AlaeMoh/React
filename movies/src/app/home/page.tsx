"use client"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselHome from "../(homedislplay)/carouselHome/page"
import Trends from "../(homedislplay)/trendingcarousel/page"
import Popular from "../(homedislplay)/popularcarousel/page"
import Upcoming from "../(homedislplay)/upcomingcarousel/page"
export default function Page() {

   
  return ( 
      <div className="carousel">
   <CarouselHome></CarouselHome>
   <div className="trends pt-5 pb-5">
    <Trends></Trends>
   </div>
   <div className="popular pt-5 pb-5">
    <Popular></Popular>
   </div>
   <div className="popular pt-5 pb-5">
    <Upcoming></Upcoming>
   </div>
      </div>

    

  )
}
