import React from 'react';

import css from './Review.module.scss';

const Review = ({ review }) => {
  // console.log(review.rating);
  const ratingCount = () => {
    for (let i = 0; i < review.rating; i++) {
      return (
        <img
          className={css.star}
          alt="rating"
          src="https://cdn-icons-png.flaticon.com/128/956/956100.png"
        />
      );
    }
  };

  return (
    <div className={css['review-box']} key={review.id}>
      <div className={css['review-head']}>
        <div>
          <div className={css['title-box']}>
            <div className={css.author}>{review.name.substr(0, 2)}*</div>
            <div className={css.create}>{review.created_at.substr(0, 10)}</div>
          </div>
          <div className={css.rating}>
            {/* {ratingCount()} */}
            <img
              className={css.star}
              alt="rating"
              src="https://cdn-icons-png.flaticon.com/128/956/956100.png"
            />
            <img
              className={css.star}
              alt="rating"
              src="https://cdn-icons-png.flaticon.com/128/956/956100.png"
            />
            <img
              className={css.star}
              alt="rating"
              src="https://cdn-icons-png.flaticon.com/128/956/956100.png"
            />
            <img
              className={css.star}
              alt="rating"
              src="https://cdn-icons-png.flaticon.com/128/956/956100.png"
            />
            <img
              className={css.star}
              alt="rating"
              src="https://cdn-icons-png.flaticon.com/128/956/956100.png"
            />
          </div>
        </div>
      </div>
      <div className={css.content}>{review.content}</div>
    </div>
  );
};

export default Review;
