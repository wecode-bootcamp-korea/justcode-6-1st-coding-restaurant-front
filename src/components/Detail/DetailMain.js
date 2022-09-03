import React, { useEffect, useState } from 'react';

import css from './DetailMain.module.scss';

const DetailMain = ({ name, description, slideImg, contentImg, reviews }) => {
  return (
    <div className={css.main}>
      <div>{name}</div>
      <div>{description}</div>
      <div>이미지 슬라이드</div>
      <div>
        <div className={css['content-tab']}>
          <div>
            <img src="/image/sample/bibimbap.jpg" />
          </div>
          <div>
            {reviews.map(review => {
              return (
                <div className={css['review-box']} key={review.id}>
                  <div className={css['review-author']}>{review.name}</div>
                  <div className={css['review-rating']}>
                    별점: {review.rating}
                  </div>
                  <div className={css['review-content']}>{review.content}</div>
                  {review.reviewCommentId.length != 0 && (
                    <div>
                      {review.reviewCommentId.map(reviewComment => {
                        return <div key={reviewComment}>{reviewComment}</div>;
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div>배송정보</div>
          <div>질문과답변(임시)</div>
        </div>
      </div>
    </div>
  );
};

export default DetailMain;
