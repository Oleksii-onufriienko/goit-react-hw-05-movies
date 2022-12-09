import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCasts } from 'components/Api/Api';
import styled from 'styled-components';

export const StyledLi = styled.li`
    list-style-type: none;
`;

export const StyledImg = styled.img`
    width: 120px;
    margin-left:50px;
`;

export const Text = styled.p`
    margin-left: 30px;
    font-size: 14px;
`;

function Cast() {
    const { moviesId } = useParams();
    const [castsList, setCastsList] = useState({});

    useEffect(() => {
        getCasts(setCastsList,moviesId);
    }, [moviesId]);

    if (!castsList.hasOwnProperty('cast')) return;
  
    const { cast } = castsList;
    return (
     <>
       {castsList.length === 0 ? (
         <h3>No casts</h3>
       ) : (
         cast.map(({ profile_path, original_name, character }) => {
          return (
             <StyledLi key={original_name}>
              <StyledImg
                 loading="lazy"
                 src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                 alt="actor"
               />
              ,<Text>{original_name}</Text>
              <Text>Character: {character}</Text>
            </StyledLi>
          );
        })
       )}{' '}
    </>
    );
}
      
export default Cast;