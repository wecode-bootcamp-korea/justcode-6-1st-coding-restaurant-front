import React from 'react';

import css from './ReviewList.module.scss';

import Review from './Review';

const ReviewList = ({ reviews }) => {
  return (
    <>
      <div className={css['review-list']}>
        {reviews.map(review => {
          return <Review key={review.id} review={review} />;
        })}
      </div>
    </>
  );
};

export default ReviewList;
