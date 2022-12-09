import { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

import SearchBar from 'components/SearchBar/SearchBar';
import MoviesList from 'components/MoviesList/MoviesList';

import { getMoviesByWord } from 'components/Api/Api';

const MoviesPage = () => {
  
    const [moviesList, setMoviesList] = useState([]);
    const [searchParams] = useSearchParams();
    const search = searchParams.get('query') ?? '';
    const location = useLocation();

    useEffect(() => {
       if (!search) return;
        getMoviesByWord(setMoviesList, search);
    }, [search]);

  return (
      <>
      <SearchBar />
        {moviesList.length > 0 &&
              <MoviesList moviesList={moviesList} location={location}/>
        } 
    </>
  );
};

export default MoviesPage;