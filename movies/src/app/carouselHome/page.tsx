"use client"
import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import  '../styles/carousel.css'
import Carousel from 'react-bootstrap/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "bootstrap-icons/font/bootstrap-icons.css";
import { fetchPopularMovies, fetchTrendingMovies, getImageUrl } from '../services/api';


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

  const [trendingMovies, setMovies]= useState<Movies[]>([])
  const [loading, setloading]= useState(true)

  useEffect(()=>{
    const fetchMovieData= async ()=>{
      try{
        const trending = await fetchTrendingMovies();
         setMovies(trending.slice(0, 3));
        console.log(trending.slice(0, 3))
      
    }catch(error){
     console.error("Error fetching products:", error);
      
    }finally{
      setloading(false)
    }
    }
    fetchMovieData();
  }, [])

  
     if (loading) {
    return <p className="text-center mt-5">Loading products...</p>;
  }
  return ( 
    <Carousel >
    {trendingMovies.map((movie)=>(
    <Carousel.Item key={movie.id}
       
  className="position-relative text-white"
  style={{ height: "90vh" }}>
      <img src={getImageUrl(movie.poster_path, "w500")} alt="" className="w-100 h-70 object-fit-cover position-absolute top-0 start-0"/>
              <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.6), transparent)",
              }}
            ></div>
        <Carousel.Caption>
          <div className="position-relative z-1 container h-100 d-flex flex-column justify-content-center mb-4">
           <div className="d-flex align-items-center mb-3">
                <span className="badge bg-purple me-3 px-3 py-2 fw-bold">
                 FEATURED
              </span>
              <span className="text-warning me-3 fw-semibold">
                <i className="bi bi-star-fill"></i> {movie.vote_average}
              </span>
              <span className="text-light">{movie.genre_ids}</span>
            </div>

            <h1 className="display-4 fw-bold mb-3 ">{movie.title}</h1>

            <p className="text-light mb-4" style={{ maxWidth: "600px" }}>
              {movie.overview}
            </p>

            <div className="d-flex gap-3">
              <button className="bg-purple btn btn-lg px-4 shadow">
                <i className="bi bi-play-fill"></i> Watch Now
              </button>
              <button className="btn btn-lg btn-dark px-4 shadow">
                 <i className="bi bi-plus-lg"></i>Add to Watchlist
              </button>
            </div>
          </div>

       
        </Carousel.Caption>
      </Carousel.Item>
    ))}
  

    </Carousel>

    
  );
}

  







