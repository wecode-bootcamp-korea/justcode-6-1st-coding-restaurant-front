import React from 'react';

import css from './Review.module.scss';

import ReviewComment from './ReviewComment';

const Review = ({ reviews, review }) => {
  return (
    <div className={css.review}>
      <div className={css['review-box']} key={review.id}>
        <div className={css['review-author']}>{review.name}</div>
        <div className={css['review-rating']}>별점: {review.rating}</div>
        <div className={css['review-content']}>{review.content}</div>
        {!(review.reviewCommentId == null) && (
          <div>
            {review.reviewCommentId.map(reviewCommentId => {
              return (
                <ReviewComment
                  review={review}
                  key={reviewCommentId}
                  reviewCommentId={reviewCommentId}
                  reviews={reviews}
                />
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Review;
