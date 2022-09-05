import React, { useEffect, useState } from 'react';

import css from './DetailMain.module.scss';

const DetailMain = ({ name, description, slideImgs, content, reviews }) => {
  return (
    <div className={css['detail-main']}>
      <div>{name}</div>
      <div>{description}</div>
      <div>
        이미지 슬라이드
        <img src={slideImgs[0].img} />
      </div>
      <div>
        <div className={css['content-tab']}>
          <div>제품 상세</div>
          <div> /미식평</div>
          <div> /배송정보</div>
        </div>
        <div className={css['content-box']}>
          <div>
            <img src={content} />
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
                  {!(review.reviewCommentId == null) && (
                    <div>
                      {review.reviewCommentId.map(reviewComment => {
                        return (
                          <div key={reviewComment}>
                            대댓 id : {reviewComment}
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div>배송정보이미지</div>
        </div>
      </div>
    </div>
  );
};

export default DetailMain;
