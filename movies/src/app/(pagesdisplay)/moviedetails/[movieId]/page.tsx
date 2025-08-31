"use client"
import { fetchMovieDetails, getImageUrl } from '@/app/services/api';
import React, { use, useEffect, useState } from 'react'
import "../../../styles/carousel.css"
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

export default function Page({params}:{params: Promise<{movieId:number}>}) {
     const { movieId } = use(params);
    const [movie , setMovie]= useState<Movies>()
    const [loading , setloading]= useState(true)

    useEffect(()=> {
        const fetchData = async ()=>{
       try{
          const movieDetails = await fetchMovieDetails(movieId)
            setMovie( movieDetails)
            console.log(movieDetails.genres)
         }catch(error){
        console.error("Error fetching products:", error);
       }finally{
        setloading(false)
       }
    }
       fetchData()
    },[movieId])

    if (loading) return <p>Loading...</p>;
     if (!movie) return <p>Movie not found.</p>;
  return (
        <div className="container my-5 pt-5">
      <div className="row">
        {/* Poster */}
        <div className="col-md-4">
          <img
            src={getImageUrl(movie.poster_path, "w300")}
            alt={movie.title}
            className="img-fluid rounded"
          />
        </div>

        {/* Details */}
        <div className="col-md-8 text-white">
          <h2>{movie.title}</h2>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Original language:</strong> {movie.original_language}</p>
          <p><strong>Popularity:</strong> {movie.popularity}</p>
          <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
          <p>{movie.overview}</p>
                 {/* Buttons */}
         <div className=" d-flex gap-3">
      <button className="bg-purple btn btn-lg px-4 shadow">
      <i className="bi bi-play-fill"></i> Watch Now
       </button>
      <button className="btn btn-lg btn-dark px-4 shadow">
        <i className="bi bi-plus-lg"></i>Add to Watchlist
      </button>
        </div>
        </div>

 


      </div>
    </div>
  )
}
