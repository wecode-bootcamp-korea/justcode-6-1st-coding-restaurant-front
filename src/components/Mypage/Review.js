import orderReviewCss from '../Mypage/Review.module.scss';
import css from '../../pages/Mypage/Mypage.module.scss';
import { useState, useEffect } from 'react';
import ReviewList from './ReviewList';

function Review() {
  const [myReview, setMyReview] = useState([]);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/my', {
      // fetch('/data/myPage/myPage.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setOrderList(data.data.orderList);
        setMyReview(data.data.reviews);
      });
  }, []);

  return (
    <div>
      <div className={css.sectionTitle}>
        <span>미식평</span>
      </div>
      {myReview == null ? (
        <div className={css.rowList}>
          <p>조회 가능한 미식평이 없습니다.</p>
        </div>
      ) : (
        <>
          <div className={orderReviewCss.reviewList}>
            {orderList.map(el => (
              <ReviewList
                key={el.productId}
                orderList={el}
                reviewList={myReview}
                removeBtn={orderList}
                setRemoveBtn={setOrderList}
                addBtn={myReview}
                setAddBtn={setMyReview}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Review;
