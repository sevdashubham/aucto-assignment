import React, { useCallback, useState } from 'react';
import axios from '../services/axios';
import Rating from './Rating';
import styled from 'styled-components';

interface IAddReviewComp {
  bookId: string;
  fetchReviews: (isHardRefresh: boolean) => void;
  setAdd: (isAdd: boolean) => void;
}

const AddReview = ({ bookId, fetchReviews, setAdd }: IAddReviewComp) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [isSuccess, setSuccess] = useState(false);

  const resetValues = useCallback(() => {
    setRating(0);
    setReviewText('');
    setSuccess(false);
    setAdd(false);
  }, []);

  const addReview = async () => {
    const request = {
      bookId,
      reviewText: reviewText.trim(),
      rating,
    };
    const { data: reviewsResult } = await axios.post('/reviews', request);
    if (reviewsResult) {
      fetchReviews(true);
      setSuccess(true);
      setTimeout(() => {
        resetValues();
      }, 2000);
    }
  };

  const handleReviewInput = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (event.target.value) {
      setReviewText(event.target.value);
    }
  }, []);

  const isValidInput = useCallback(() => {
    if (rating > 0 && reviewText !== '') {
      addReview();
    }
  }, [rating, reviewText]);

  return <ReviewContainer>
    <ReviewInput rows={3} onChange={handleReviewInput} />
    <Rating rating={rating} isSelect onRating={setRating} />
    {isSuccess ? <ReviewText>{'Review submitted successfully'}</ReviewText> :
      <StyledReadMore onClick={isValidInput}>
        Submit
      </StyledReadMore>}
  </ReviewContainer>;
};

export default AddReview;

const ReviewContainer = styled.div`
  padding: 10px 0;
  flex-direction: column;
  border-bottom: 1px solid rgba(255, 255, 255, 0.7);
`;

const ReviewInput = styled.textarea`
  font-weight: 500;
  padding: 10px 5px;
  margin: 10px 0;
  font-size: 14px;
  background: papayawhip;
  border: none;
  color: palevioletred;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

const ReviewText = styled.p`
  font-weight: 500;
  color: #ffffff;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const StyledReadMore = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid rgba(255, 255, 255, 0.7);
  color: rgba(255, 255, 255, 0.7);
  margin-top: 0.7em;
  margin-bottom: 0.5em;
  padding: 0.5em 1em;
  cursor: pointer;

  &:hover {
    background-color: #b23850
  }
`;
