"use client"
import { fetchMovieDetails, fetchMovieTrailor, getImageUrl } from '@/app/services/api';
import React, { use, useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../styles/carousel.css"
import Trailor from '@/app/services/trailor';
import { faPlay } from '@fortawesome/free-solid-svg-icons/faPlay';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Similar from "../../../services/similar"

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
      const [trailerUrl, setTrailerUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [movieDetails, trailerVideo] = await Promise.all([
          fetchMovieDetails(movieId),
          fetchMovieTrailor(movieId),
        ]);

        setMovie(movieDetails);
        setTrailerUrl(trailerVideo);
      } catch (error) {
        console.error("Error fetching movie or trailer:", error);
      } finally {
        setloading(false);
      }
    };

    fetchData();
  }, [movieId]);

const addToWatchList = (movie: {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}) => {

  const stored = localStorage.getItem("watchlist");
  const watchlist = stored ? JSON.parse(stored) : [];

  
  const exists = watchlist.some((m: Movies) => m.id === movie.id);
  if (!exists) {
    watchlist.push(movie);
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }
};


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
        <div className="col-md-8 ">
          <h2>{movie.title}</h2>
          <p><strong>Release Date:</strong> {movie.release_date}</p>
          <p><strong>Original language:</strong> {movie.original_language}</p>
          <p><strong>Popularity:</strong> {movie.popularity}</p>
          <p><strong>Rating:</strong> ⭐ {movie.vote_average}</p>
          <p>{movie.overview}</p>

          {/* Buttons */}
          <div className="d-flex gap-3">
            <button className="bg-purple btn btn-lg px-4 shadow">
                  <FontAwesomeIcon icon={faPlay} className="text-dark" />
               Watch Now
            </button>
            <button className="btn btn-lg btn-dark px-4 shadow" 
              onClick={() =>
           addToWatchList({
             id: movie.id,
              title: movie.title,
           poster_path: movie.poster_path,
             release_date: movie.release_date,
                })
              }>
              <FontAwesomeIcon icon={faPlus} className="text-white" /> Add to Watchlist
            </button>

            {/* Trailer Popup */}
            {trailerUrl && <Trailor trailerKey={trailerUrl} />}
          </div>
        </div>
      </div>
       <Similar movieId={movieId} />
      
    </div>
  );
  
}
