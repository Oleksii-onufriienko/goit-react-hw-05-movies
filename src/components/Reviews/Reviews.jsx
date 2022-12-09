import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewList } from 'components/Api/Api';

function Reviews() {
    const { moviesId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
         getReviewList(setReviews, moviesId);
    }, [moviesId]);

    return (
    <>
      {!reviews.length > 0 && <h3>No reviews</h3>}
      {reviews.length > 0 && (
        <ul>
          {reviews.map(review => (
            <li key={review.id} review={review}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default Reviews;