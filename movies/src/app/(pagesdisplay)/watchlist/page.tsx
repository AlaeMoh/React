/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { getImageUrl } from "@/app/services/api";
import "../../styles/carousel.css"
import Link from "next/link";
interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

export default function Watchlist() {
  const [watchlist, setWatchlist] = useState<Movie[]>([]);
  
  useEffect(() => {
    const stored = localStorage.getItem("watchlist");
    if (stored) {
      setWatchlist(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(watchlist));
  }, [watchlist]);


  const removeFromWatchlist = (id: number) => {
    setWatchlist((prev) => prev.filter((movie) => movie.id !== id));
  };

  return (
    <div className="container pt-5">
      <h2 className="text-3xl font-bold text-center pt-5">🎬 My Watchlist</h2>

      {watchlist.length === 0 ? (
        <p className="text-gray-400">No movies in your watchlist yet.</p>
      ) : (
        <div className="row pt-5 pb-5">
        
          {watchlist.map((movie) => (
            <div
              key={movie.id}
              className="col-3 position-relative"
            >
              <Link href={`/moviedetails/${movie.id}`} className="">
                 <img
                 src={getImageUrl(movie.poster_path, "w300")}
                 alt={movie.title}
                 className="img-fluid rounded "
               />
               </Link>
                             <button
                onClick={() => removeFromWatchlist(movie.id)}
                className="bg-purple btn btn position-absolute bottom-0 end-0"
              >
                <Trash2 className="w-5 h-5" />
              </button>      



            </div>
          ))}
        </div>
        

      )}
    </div>
  );
}