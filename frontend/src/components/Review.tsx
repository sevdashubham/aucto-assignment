import React, { memo, useCallback, useState } from 'react';
import axios from '../services/axios';
import Rating from './Rating';
import styled from 'styled-components';
import { IReviewProps } from '../interfaces/books';
import AddReview from './AddReview';

interface IReviewComp {
  bookId: string;
  fetchBooks: () => void;
}

const Review = ({ bookId, fetchBooks }: IReviewComp) => {
  const [reviews, setReviews] = useState([]);
  const [isAdd, setAdd] = useState(false);

  const fetchReviews = useCallback(async (isHardRefresh) => {
    const { data: reviewsResult } = await axios.get(`/reviews/${bookId}`);
    setReviews(reviewsResult);
    if (isHardRefresh) {
      fetchBooks();
    }
  }, [bookId]);

  const renderReviews = () => {
    return reviews.map((review: IReviewProps) => (
      <ReviewRow>
        <ReviewText><q>{review.reviewText}</q></ReviewText>
        <Rating rating={review.rating} isSelect={false} />
      </ReviewRow>
    ));
  };

  return <ReviewContainer>
    <StyledReadMore onClick={() => fetchReviews(false)}>
      Read all reviews
    </StyledReadMore>
    <StyledReadMore onClick={() => setAdd(!isAdd)}>
      Write a review
    </StyledReadMore>
    {isAdd && <AddReview bookId={bookId} fetchReviews={fetchReviews} setAdd={setAdd}/>}
    {renderReviews()}
  </ReviewContainer>;
};

export default memo(Review);

const ReviewContainer = styled.div`
  padding-left: 65px;
  flex-direction: row;
  @media only screen and (max-width: 728px) {
    padding-left: 20px;
  }
`;

const ReviewRow = styled.div`
  display: flex;
  padding: 10px 0;
  flex-direction: column;
  justify-content: space-between;
`;

const ReviewText = styled.p`
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  padding-right: 0;
`;

const StyledReadMore = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  color: rgba(255, 255, 255, 0.7);
  margin-right: 1em;
  padding: 0.25em 1em;
  cursor: pointer;
  &:hover {
    background-color: #b23850
  }
`
