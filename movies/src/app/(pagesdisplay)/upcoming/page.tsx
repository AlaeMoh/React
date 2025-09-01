"use client"
import {  fetchTrendingMovies, getImageUrl, getUpcomingMovies } from '@/app/services/api';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
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
const [upComingMovies, setMovies] = useState<Movies[]>([])
const [loading, setloading] = useState(true);
 const router= useRouter()
    
useEffect(()=>{
 const fetchMovieData= async ()=>{
  try{
   const upcoming= await getUpcomingMovies()
    setMovies(upcoming)
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
     <div className="container my-5 pt-5">
      {/* Heading */}
      <h2 className="mb-4 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 0 24 24" width="40px" fill="#9c0099ff"><path d="M0 0h24v24H0z" fill="none"/><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/></svg> 
          Upcoming Movies
      </h2>

      {/* Movies Grid */}
      <div className="row g-4">
        {upComingMovies.map((movie) => (
          <div key={movie.id} className="col-6 col-md-4 col-lg-2">
            <div className="pictures card h-100 shadow-sm border-0 rounded-4">
              {/* Poster */}
              <Link href={`/moviedetails/${movie.id}`}>
                 <img
                 src={getImageUrl(movie.poster_path, "w300")}
                 alt={movie.title}
                 className="img-fluid rounded"
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
    </div>
  )
}
