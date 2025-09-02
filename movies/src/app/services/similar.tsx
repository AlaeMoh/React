/* eslint-disable @next/next/no-img-element */
"use client"
import { getImageUrl, getSimilarMovies } from '@/app/services/api';
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/home.css"
import { faVideo } from '@fortawesome/free-solid-svg-icons';

type Movies = {
  id: number,
  title: string,
  poster_path: string,
  adult: boolean,
  genres:Genre[],
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

type Genre = {
  id: number;
  name: string;
};
export default function Page({ movieId }: { movieId: number }) {

      const [similarMovies , setMovie]= useState<Movies[]>([])
      const [loading , setloading]= useState(true)
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
    const fetchData = async ()=>{
        try{
            const movies = await getSimilarMovies(movieId)
            setMovie(movies)
            console.log(movies)
        }catch (error) {
        console.error("Error fetching movie or trailer:", error);
      } finally {
        setloading(false);
      }
    }
    fetchData()
 },[movieId])
 


   const handleSelect = (movieId: string) => {
    router.push(`/moviedetails/${movieId}`); 
  };

  if(loading){
         return <p className="text-center mt-5">Loading products...</p>;
    }

  return (
    <div className="conatiner pt-5">
    <h3 className='text-center pb-3'><FontAwesomeIcon icon={faVideo} className="text-white" /> Similar Movies</h3>
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
        {similarMovies?.map((movie: Movies) => (
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
  )
}
