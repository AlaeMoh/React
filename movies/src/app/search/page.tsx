"use client"
import { searchMovies } from '@/app/services/api';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import "../styles/home.css"
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
   
    const searchParams = useSearchParams();
   const query= searchParams.get("query")?.toLowerCase() || "";

    const [movies, setMovies]= useState<Movies[]>([]);
    const [loading, setloading]= useState(true)
    const router= useRouter()

    useEffect(()=>{
        const fetchMovies= async ()=>{
          try{
              const searchedMovies= await searchMovies(query)
            console.log(searchedMovies)
            setMovies(searchedMovies)
        }catch(error){
           console.error("Error fetching products:", error);
        }finally{
          setloading(false)
        }
          }
        fetchMovies();
    },[query])

  const handleSelect = (movieId: string) => {
    router.push(`/moviedetails/${movieId}`); 
  };


     if (loading) return <p className="text-center mt-5">Loading...</p>;
  return (
    <div className="container my-5 pt-5">
      <h2 className="mb-4 text-center ">
        Search results for: <span className="text-primary">{query}</span>
      </h2>

      {movies.length === 0 ? (
        <p className="text-center text-muted">No movies found.</p>
      ) : (
        <div className="row g-4">
          {movies.map((movie) => (
            <div key={movie.id} className="col-6 col-md-4 col-lg-2">
              <div className="pictures card h-100 shadow-sm border-0 rounded-4">
                <Link href={`/moviedetails/${movie.id}`}>
              <img
                  src={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                      : "https://via.placeholder.com/400x600?text=No+Image"
                  }
                  alt={movie.title}
                  className="card-img-top rounded-top-4"
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
      )}
    </div>
  )
}
