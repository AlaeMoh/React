"use client"
import { fetchGenres, fetchMoviesByGenre } from '@/app/services/api';
import React, { use, useEffect, useState } from 'react'

type Movies = {
  id: number,
  title: string,
  poster_path: string,
  vote_average: number,
  vote_count: number,
   genre_ids: number,
  }

export default function Page({params}:{params: Promise<{genreId:number}>}) {
    const genreId = use(params)
    const [genreMovies, setMovies] = useState<Movies[]>([])
    const [loading, setloading] = useState(true);
    
     useEffect(()=>{
      const fetchMovieData= async ()=>{
         try{
           const genre= await fetchGenres()
        //    const filteredMovies= genre.filter((movie:Movies)=>{
        //     movie.genre_ids === genre.genreId
        //    })
           setMovies(genre)
             console.log(genre)
            }catch(error){
             console.error("Error fetching products:", error);
           }finally{
           setloading(false)
          }
       }
            
       fetchMovieData()
      },[])
            
       if(loading){
      return <p className="text-center mt-5">Loading products...</p>;}
    
  return (
    <div>P</div>
  )
}
