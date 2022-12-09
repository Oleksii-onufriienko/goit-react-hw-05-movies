import React from "react"
import styled from 'styled-components';
import { NavLink} from "react-router-dom";


const StyledLi = styled.li`
    padding: 10px;
    cursor: pointer;
`;

const MoviesList = ({ moviesList, location}) => {
    if (moviesList.length === 0) return;
    return (
    <>
            <ul>
                {moviesList.map(e => { return (
                    <StyledLi key={e.id}>
                        <NavLink to={`/movies/${e.id}`} state={{ from: location }}>{e.title}</NavLink>
                    </StyledLi>
                )})}
          </ul>
    </>
    );
}

export default MoviesList;