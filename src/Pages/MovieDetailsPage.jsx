import { useState,useEffect, Suspense} from "react";
import { useParams, NavLink, useLocation, Outlet} from "react-router-dom";
import styled from 'styled-components';
import { getMovieDetails } from "components/Api/Api";


const StyledImg = styled.img`
    width: 250px;
`;

const FilmBox = styled.div`
    display: grid;
    margin-bottom: 10px;
    grid-template-columns: 310px 1fr;
`;

const StyledSection = styled.section`
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
`;

const BackButton = styled(NavLink)`
  display: flex;
  justify-content: center;
  padding: 5px;
  align-items: center;
  width: 60px;
  height: 20px;
  margin-top: 5px;
  margin-bottom: 5px;
  border: 1px solid black;
  text-decoration: none;
`;

function MovieDetailsPage() {
    const detailList = ['cast', 'reviews'];
    const location = useLocation();
    const linkBack = location?.state?.from || '/';
    const [movieDetail, setMovieDetail] = useState({});

    const { moviesId } = useParams();

    useEffect(() => { 
        getMovieDetails(setMovieDetail, moviesId)
    }, [moviesId]);

    if (!movieDetail.hasOwnProperty('title')) return;

    const {title, overview, genres, release_date, vote_average, poster_path } = movieDetail;
    
    return (
                <>
                    <BackButton type="button" to={linkBack}>{'Go back'}</BackButton>
                    <FilmBox>
                        <StyledImg src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" />
                        <div>
                            <h3>{`${title} (${release_date})`}</h3>
                            <p>User Score: {vote_average}%</p>
                            <h4>Overview</h4>
                            <p>{overview}</p>
                            <h5>Genres</h5>
                            <p>{genres ? genres.map(gen => gen.name).join(', ') : ''}</p>
                        </div>
                    </FilmBox>
                    <StyledSection>
                        <p>Additional iformation</p>
                        <ul>
                            {detailList.map(e => {
                                return (
                                    <li key={e}>
                                        <NavLink to={`${e}`} state={{ from: location?.state?.from }}>{e}</NavLink>
                                    </li>
                                )
                            })}
                        </ul>
                    </StyledSection>
                    <Suspense fallback={null}>
                      <Outlet />
                    </Suspense>
                </>
    );
}

export default MovieDetailsPage;