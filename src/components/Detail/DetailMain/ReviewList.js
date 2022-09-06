import React from 'react';

import css from './ReviewList.module.scss';

import Review from './Review';

const ReviewList = ({ reviews }) => {
  return (
    <>
      <div className={css['review-list']}>
        {reviews.map(review => {
          return (
            <div className={css['review-box']} key={review.id}>
              <div className={css['review-author']}>{review.name}</div>
              <div className={css['review-rating']}>별점: {review.rating}</div>
              <div className={css['review-content']}>{review.content}</div>
              {!(review.reviewCommentId == null) && (
                <div>
                  {review.reviewCommentId.map((Id, idx) => {
                    return (
                      <div key={Id}>
                        {' '}
                        <div>
                          {' '}
                          대댓글 Id : {Id} {reviews.id == Id && reviews.id}
                        </div>
                        <div>{reviews.id}</div>
                        {console.log(reviews.id)}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ReviewList;
