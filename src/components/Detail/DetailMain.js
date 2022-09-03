import React, { useEffect, useState } from 'react';

import css from './DetailMain.module.scss';

const DetailMain = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [slideImg, setSlideImg] = useState([]);
  const [contentImg, setContentImg] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('/data/detail/detail.json')
      .then(res => res.json())
      .then(data => {
        const { name, description, slideImg, contentImg, review } = data;
        setName(name);
        setDescription(description);
        setSlideImg(slideImg);
        setContentImg(contentImg);
        setReviews(review);
      });
  }, []);

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
