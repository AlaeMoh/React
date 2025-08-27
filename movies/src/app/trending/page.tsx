"use client"
import React, { useEffect, useRef, useState } from 'react'
import { fetchTrendingMovies, getImageUrl } from '../services/api'
import { Carousel } from 'react-bootstrap'

    type Movies = {
  id: number,
  title: string,
  poster_path: string,
  vote_average: number,
  vote_count: number,
  }
export default function Page() {
    const [trendingMovies, setMovies]= useState<Movies[]>([])
    const [loading, setloading]= useState(true)
 const rowRef = useRef<HTMLDivElement>(null);

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


  return ( <div className="conatiner">
    <h3 className='text-center text-white pb-3'><i className="bi bi-film me-2"></i><i className="bi bi ticket"></i>Trending Movies</h3>
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
        {trendingMovies.map((movie: any) => (
          <div key={movie.id} className="me-3" style={{ minWidth: "160px" }}>
            <img
              src={getImageUrl(movie.poster_path, "w300")}
              alt={movie.title}
              className="img-fluid rounded"
            />
            <p className="text-center small mt-2">{movie.title}</p>
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



