import { Route, Routes } from "react-router-dom";
import { lazy} from "react";

import { Layout } from "./Layout/Layout";

const HomePage = lazy(() => import('../Pages/HomePage'));
const MovieDetailsPage = lazy(() => import('../Pages/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const MoviesPage = lazy(() => import('../Pages/MoviesPage'));

export function App() {

  return (
    <>

      <Routes>       
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path="movies" element={<MoviesPage />}/>
          <Route path="movies/:moviesId" element={<MovieDetailsPage/>} >
            <Route path="cast" element={<Cast/>} />
            <Route path="reviews" element={<Reviews/>} />
          </Route>  
        </Route>
      </Routes>
    </>
  );
};
