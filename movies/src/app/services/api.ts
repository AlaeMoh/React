const API_KEY= "0e61bd3ec4561cb538504803a79f71c2" 
const BASE_URL= "https://api.themoviedb.org/3"

export const fetchTrendingMovies= async ()=>{
      try{
        const res = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}&language=en-US`)
        const data = await res.json();
        return data.results;
      }catch(err){
         console.error("Error fetching products:", err);
      }
}

export const fetchPopularMovies= async ()=>{
      try{
        const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
        const data = await res.json();
        return data.results;
      }catch(err){
         console.error("Error fetching products:", err);
      }
}

export const fetchTopRatedMovies= async ()=>{
      try{
        const res = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
        const data = await res.json();
        return data.results;
      }catch(err){
         console.error("Error fetching products:", err);
         return [];
      }
}

// export const fetchMoviesByGenre= async (genreID:number)=>{
//       try{
//         const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreID}&page=1`)
//         // /movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
//         const data = await res.json();
//         return data.results;
//       }catch(err){
//          console.error("Error fetching products:", err);
//          return [];
//       }

      
// }

export const fetchGenres= async ()=>{
      try{
        const res = await fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`)
        const data = await res.json();
        return data.genres;
      }catch(err){
         console.error("Error fetching products:", err);
         return [];
      }

      
}

export const fetchMoviesByGenreName= async (genreName:string)=>{
      try{
        const res = await fetch(`${BASE_URL}/movie?api_key=${API_KEY}include_adult=false&include_video=false&language=en-US&with_genres=${genreName}&page=1&sort_by=popularity.desc`)
        // /movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc'
        const data = await res.json();
        return data.results;
      }catch(err){
         console.error("Error fetching products:", err);
         return [];
      }

      
}
export const fetchMoviesByGenre = async (genreId: number) => {
  try {
    const url = `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`;
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error("Error fetching movies by genre:", err);
    return [];
  }
};

export const fetchMovieDetails= async (movieId:number)=>{
      try{
        const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
        const data = await res.json();
       
        return data;
      }catch(err){
         console.error("Error fetching products:", err);
         return [];
      }

      
}

// export const searchMovies= async (query:string)=>{
//     if (!query) return [];
//       try{
//         const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}&page=1&&include_adult=false&language=en-US&page=1`)
//         // search/movie?include_adult=false&language=en-US&page=1'
//         const data = await res.json();
//         return data.results;
//       }catch(err){
//          console.error("Error fetching products:", err);
//          return [];
//       }

      
// }
export const searchMovies = async (query: string) => {
  if (!query) return []; 

  try {
    const res = await fetch(
      `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${encodeURIComponent(query)}&page=1&include_adult=false`
    );
    const data = await res.json();
    return data.results || [];
  } catch (err) {
    console.error("Error searching movies:", err);
    return [];
  }
};


export const getUpcomingMovies= async ()=>{
  try{
    const res =await fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`)
    const data = await res.json();
    return data.results;

  }catch(err){
         console.error("Error fetching products:", err);
         return [];
  }
}

export const getImageUrl = (path: string | null, size = "original") => {
  if (!path) {
    return "https://via.placeholder.com/400x600?text=No+Image+Available";
  }
  return `https://image.tmdb.org/t/p/${size}${path}`;
};