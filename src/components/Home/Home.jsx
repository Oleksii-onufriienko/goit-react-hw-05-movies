import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getList } from "../Api/Api";

import MoviesList from "components/MoviesList/MoviesList";

function Home() {
    const [moviesList, setMoviesList] = useState([]);
    const location = useLocation();
  
    useEffect(() => {
      getList(setMoviesList);
    }, []);

    if (moviesList.length === 0) return;

    return (
        <>
          <h2>Trending today</h2>
          <MoviesList moviesList={moviesList} location={location} />
        </>
    );
}

export default Home;
