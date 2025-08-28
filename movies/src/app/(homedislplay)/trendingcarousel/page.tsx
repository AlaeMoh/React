"use client"
import React, { useEffect, useRef, useState } from 'react'
import { fetchTrendingMovies, getImageUrl } from '../../services/api'
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

        if(loading){
         return <p className="text-center mt-5">Loading products...</p>;
    }

  return ( <div className="conatiner">
    <h3 className='text-center text-white pb-3'><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="40px" fill="#ffffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/></svg> Trending Movies</h3>
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



