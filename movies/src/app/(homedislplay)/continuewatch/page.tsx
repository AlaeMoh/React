/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useRef, useState } from 'react'
import { fetchPopularMovies, getImageUrl } from '../../services/api'
import Link from 'next/link'
import "../../styles/home.css"
import { useRouter } from 'next/navigation'

type Movies = {
  id: number,
  title: string,
  poster_path: string,
  adult: boolean,
 backdrop_path: string,
 genre_ids: number,
media_type: string,
original_language:string,
original_title: string, 
overview:string,
popularity: number,
release_date: string,
video:boolean,
vote_average: number,
vote_count: number,
  }

export default function Page() {
    const [watched, setWatched] = useState<Movies[]>([])
    const [loading, setloading] = useState(true);
    const router= useRouter()

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
                const watching= await fetchPopularMovies()
                setWatched(watching)
            }catch(error){
                console.error("Error fetching products:", error);
            }finally{
                setloading(false)
            }
        }

        fetchMovieData()
    },[])

   const handleSelect = (movieId: string) => {
    router.push(`/moviedetails/${movieId}`); 
  };

    if(loading){
         return <p className="text-center mt-5">Loading products...</p>;
    }
  return (
   <div className="conatiner">
       <h3 className='text-center  pb-3'><svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#9c0099ff"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"/></svg>Continue Watching</h3>
       <div className="position-relative">
     
 
   
         {/* Movie Row */}
         <div
           ref={rowRef}
           className="d-flex overflow-hidden"
           style={{ scrollBehavior: "smooth" }}
         >
           {watched.slice(0,5).map((movie: Movies) => (

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
              <div className="overlay-details d-flex flex-column justify-content-center align-items-center text-center  p-2">
            <h6 className="mb-1">{movie.title}</h6>
            <small className="text-muted">{movie.release_date}</small>
            <button className='dbuttn btn' onClick={()=>handleSelect(movie.id.toString())}>continue watching</button>
                </div>
              </div>

            
         </div>

           ))}
         </div>
   

       </div>
     </div>
   
  )
}
