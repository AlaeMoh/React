"use client"
import { fetchGenres } from '@/app/services/api';
import { useEffect, useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import "../../styles/home.css"
import { width } from '@fortawesome/free-solid-svg-icons/fa0';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

type Genre = {
  id: number;
  name: string;
};

export default function Page() {
   const router= useRouter()
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState('1');
  const [genreMovies, setGenre] = useState<Genre[]>([])
  const [loading, setloading] = useState(true);


  useEffect (()=>{
    const getGenres= async ()=>{
        try{
            const genres= await fetchGenres()
            setGenre(genres)
            
        } catch (error) {
        console.error("Error fetching movies:", error);
      } finally {
        setloading (false);
      }
      
    }
    getGenres()
  },[])

   const handleSelect = (genreId: string) => {
    setRadioValue(genreId);
    router.push(`/genre/${genreId}`); 
  };
  
 return ( <div className="conatiner">

     <ButtonGroup className='row toggle text-center'>
        {genreMovies.map((genre) => (
            
          <ToggleButton 
           className='toggle rounded-4  mb-2 '
            key={genre.id}
            id={`genre-${genre.id}`}
            type="radio"
            variant={'outline-secondary'}
            name="radio"
            value={genre.id.toString()}
            checked={radioValue === genre.id.toString()}
             onChange={() => handleSelect(genre.id.toString())}

              >
              {genre.name}
            
          </ToggleButton>
        ))}
      </ButtonGroup>
     
 </div>


  );
}

