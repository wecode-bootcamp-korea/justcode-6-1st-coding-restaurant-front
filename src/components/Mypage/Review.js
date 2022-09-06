import orderReviewCss from '../Mypage/Review.module.scss';
import css from '../../pages/Mypage/Mypage.module.scss';
import { useState, useEffect } from 'react';
import ReviewList from './ReviewList';

function Review() {
  const [myReview, setMyReview] = useState([]);

  useEffect(() => {
    fetch('/data/myPage/review.json')
      .then(res => res.json())
      .then(data => setMyReview(data.data));
  }, []);

  return (
    <div>
      {myReview.length === 0 ? (
        <div className={css.rowList}>
          <p>조회 가능한 미식평이 없습니다.</p>
        </div>
      ) : (
        <>
          <div className={css.sectionTitle}>
            <span>미식평</span>
          </div>
          <div className={orderReviewCss.reviewList}>
            {myReview.map(el => (
              <ReviewList
                key={el.id}
                list={el}
                removeBtn={myReview}
                setRemoveBtn={setMyReview}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Review;
