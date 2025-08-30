"use client"
import { searchMovies } from '@/app/services/api';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import "../styles/home.css"

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


     if (loading) return <p className="text-center mt-5">Loading...</p>;
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center text-white">
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

                <div className="card-body p-2 bg-dark rounded-4 rounded-top-0 pb-3">
                  <h6 className="card-title text-center text-truncate text-white">
                    {movie.title}
                  </h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
