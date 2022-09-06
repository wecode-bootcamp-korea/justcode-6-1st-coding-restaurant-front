import React from 'react';

import css from './ReviewComment.module.scss';

const ReviewComment = ({ review, reviews, reviewCommentId }) => {
  return (
    <div className={css['review-comment']}>
      <div className={css['review-box']}>
        <div className={css['review-author']}>
          {/* {reviews.reviewcommentId.name} */}
        </div>
        <div className={css['review-rating']}>
          별점: {reviews.reviewcommentId.name}
        </div>
        <div className={css['review-content']}>
          {reviews.reviewcommentId.name}
        </div>
      </div>
    </div>
  );
};

export default ReviewComment;
