import React from 'react';

import css from './ReviewList.module.scss';

import Review from './Review';

const ReviewList = ({ reviews }) => {
  console.log({ reviews });
  return (
    <>
      {reviews == null ? (
        <div>
          <p>조회 가능한 내역이 없습니다.</p>
        </div>
      ) : (
        <div className={css['review-list']}>
          {reviews.map(review => {
            return <Review key={review.id} review={review} />;
          })}
        </div>
      )}
    </>
  );
};

export default ReviewList;
