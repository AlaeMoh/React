"use client"
import React, { useEffect, useRef, useState } from 'react'
import { fetchPopularMovies, getImageUrl } from '../../services/api'

type Movies = {
  id: number,
  title: string,
  poster_path: string,
  vote_average: number,
  vote_count: number,
  }

export default function Page() {
    const [popularMovies, setMovies] = useState<Movies[]>([])
    const [loading, setloading] = useState(true);


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
                const popular= await fetchPopularMovies()
                setMovies(popular)
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
  return (
   <div className="conatiner">
       <h3 className='text-center text-white pb-3'><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#FFFFFF"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>Popular Movies</h3>
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
           {popularMovies.map((movie: any) => (
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
   
  )
}
