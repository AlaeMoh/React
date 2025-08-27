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
        const res = await fetch(`${BASE_URL}/movie/popular/api_key=${API_KEY}&language=en-US&page=1`)
        const data = await res.json();
        return data.results;
      }catch(err){
         console.error("Error fetching products:", err);
      }
}

export const fetchTopRatedMovies= async ()=>{
      try{
        const res = await fetch(`${BASE_URL}/movie/toprated/api_key=${API_KEY}&language=en-US&page=1`)
        const data = await res.json();
        return data.results;
      }catch(err){
         console.error("Error fetching products:", err);
         return [];
      }
}

export const fetchMoviesByGenre= async (genreID:any)=>{
      try{
        const res = await fetch(`${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=${genreID}&page=1`)
        const data = await res.json();
        return data.results;
      }catch(err){
         console.error("Error fetching products:", err);
         return [];
      }

      
}

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


export const fetchMovieDetails= async (movieId:any)=>{
      try{
        const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
        const data = await res.json();
        return data;
      }catch(err){
         console.error("Error fetching products:", err);
         return [];
      }

      
}

export const searchMovies= async (query:any)=>{
      try{
        const res = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&icludeadult=false`)
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