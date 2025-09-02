/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useRef, useState } from 'react'
import { fetchTrendingMovies, getImageUrl } from '../../services/api'
import Link from 'next/link'
import "../../styles/home.css"
import { useRouter } from 'next/navigation'

    type Movies = {
  id: number,
  title: string,
  poster_path: string,
  vote_average: number,
  vote_count: number,
    release_date: string,

  }
export default function Page() {
    const [trendingMovies, setMovies]= useState<Movies[]>([])
    const [loading, setloading]= useState(true)
    const rowRef = useRef<HTMLDivElement>(null);
    const router= useRouter()

  const scroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const { clientWidth } = rowRef.current;
      rowRef.current.scrollBy({
        left: direction === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };



    useEffect(()=>{
        const fetchMovieData= async ()=>{
        try{
            const trending = await fetchTrendingMovies()
            setMovies(trending)
        }catch(error){
            console.error("Error fetching products:", error);
        }finally{
            setloading(false)
        }
        }
        fetchMovieData()
    },[])

        if(loading){
         return <p className="text-center mt-5">Loading products...</p>;
    }
     const handleSelect = (movieId: string) => {
    router.push(`/moviedetails/${movieId}`); 
  };

  return (
    
    <div className="conatiner">
    <h3 className='text-center pb-3'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="40px" fill="#9c0099ff"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/></svg> Trending Movies</h3>
    <div className="position-relative">
  
      {/* Left Button */}
      <button
        className="btn btn-dark position-absolute top-50 start-0 translate-middle-y z-3"
        style={{ opacity: 0.7 }}
        onClick={() => scroll("left")}
      >
        ‹
      </button>

      {/* Movie Row */}
      <div
        ref={rowRef}
        className="d-flex overflow-hidden"
        style={{ scrollBehavior: "smooth" }}
      >
        {trendingMovies.map((movie: Movies) => (
            <div key={movie.id} className="me-3" style={{ minWidth: "160px" }}>
          <div className="pictures position-relative overflow-hidden rounded">
             <Link href={`/moviedetails/${movie.id}`}>
              <img
              src={getImageUrl(movie.poster_path, "w300")}
                alt={movie.title}
              className="img-fluid rounded w-100"
         />
          </Link>

                 {/* Hover Overlay */}
              <div className="overlay-details d-flex flex-column justify-content-center align-items-center text-center p-2 text-white">
            <h6 className="mb-1">{movie.title}</h6>
          <p className="mb-0">⭐ {movie.vote_average.toFixed(1)}</p>
            <small className="text-muted">{movie.release_date}</small>
            <button className='dbuttn btn' onClick={()=>handleSelect(movie.id.toString())}>View Details</button>
                </div>
              </div>

            
         </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        className="btn btn-dark position-absolute top-50 end-0 translate-middle-y z-3"
        style={{ opacity: 0.7 }}
        onClick={() => scroll("right")}
      >
        ›
      </button>
    </div>
  </div>



  );
}



