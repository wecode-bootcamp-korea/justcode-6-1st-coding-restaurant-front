import React from 'react';

import css from './Review.module.scss';

const Review = ({ review }) => {
  return (
    <div className={css['review-box']} key={review.id}>
      <div>
        <div>프로필사진</div>
        <div>
          <div className={css.title}>
            <div className={css['review-author']}>{review.name}</div>
            <div>생성날짜</div>
          </div>
          <span className={css['review-rating']}>별점: {review.rating}</span>
        </div>
        <div className={css['review-content']}>{review.content}</div>
      </div>
    </div>
  );
};

export default Review;
