import axios from 'axios';

export const getList = async (setMoviesList) => {
    const QUERY_LIST_MOVIES = 'https://api.themoviedb.org/3/movie/top_rated?api_key=de0dccb949912c01edc752d65802c189&language=en-US&page=1';
    await axios
      .get(QUERY_LIST_MOVIES)
        .then(res => {
         if (res.data.results.length === 0) return;
         setMoviesList([...res.data.results]);
        })
        .catch(e => {
        console("Not list !");
        return;
      });
}

export const getMovieDetails = async (setMovieDetails, moviesId) => {
      const QUERY_MOVIES_DETAILS = `https://api.themoviedb.org/3/movie/${moviesId}?api_key=de0dccb949912c01edc752d65802c189&language=en-US`;
          return await axios.get(QUERY_MOVIES_DETAILS).then(res => { 
              setMovieDetails(res.data);
          }).catch(e => {
          setMovieDetails({});
        return
      }); 
}


export const getReviewList = async (setReviewList, moviesId) => {
    const QUERY_REVIEW = `https://api.themoviedb.org/3/movie/${moviesId}/reviews?api_key=de0dccb949912c01edc752d65802c189&language=en-US&page=1`;
          return await axios.get(QUERY_REVIEW).then(res => { 
              setReviewList(res.data.results);
          }).catch(e => {
          setReviewList([]);
        return
      }); 
}

export const getCasts = async (setCastsList, moviesId) => {
    const QUERY_CAST = `https://api.themoviedb.org/3/movie/${moviesId}/credits?api_key=de0dccb949912c01edc752d65802c189&language=en-US`;
          return await axios.get(QUERY_CAST).then(res => { 
              setCastsList(res.data);
          }).catch(e => {
          setCastsList({});
        return
      }); 
}

export const getMoviesByWord = async (setMoviesList,search) => {
    const QUERY_MOVIES_BY_WORD = `https://api.themoviedb.org/3/search/movie?api_key=de0dccb949912c01edc752d65802c189&query=${search}&page=1&language=en-US`;
          return await axios.get(QUERY_MOVIES_BY_WORD).then(res => { 
            setMoviesList(res.data.results);
          }).catch(e => {
          setMoviesList([]);
        return
      }); 
}
