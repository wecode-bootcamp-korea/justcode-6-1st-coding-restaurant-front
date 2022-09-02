import orderReviewCss from '../Mypage/Review.module.scss';
import css from '../../pages/Mypage/Mypage.module.scss';
import { useState, useEffect } from 'react';
import ReviewModal from './ReviewModal';
import ReviewModalRevise from './ReviewModalRevise';

function Review() {
  const [modalOpen, setModalOpen] = useState(false);
  const [ReviewModalReviseOpen, setReviewModalReviseOpen] = useState(false);
  const [myReview, setMyReview] = useState([]);

  useEffect(() => {
    fetch('/data/review.json')
      .then(res => res.json())
      .then(data => setMyReview(data.data));
  }, []);

  const showModal = () => {
    setModalOpen(true);
  };

  const reviseModal = () => {
    setReviewModalReviseOpen(true);
  };
  return (
    <div>
      <div className={css.sectionTitle}>
        <span>미식평</span>
      </div>
      <table className={orderReviewCss.reviewList}>
        <tbody>
          {myReview.map(myReviewItem => {
            return (
              <tr key={myReviewItem.id}>
                <td>
                  <img
                    className={orderReviewCss.foodImg}
                    src={myReviewItem.image_thumbnail}
                  ></img>
                </td>
                <td className={orderReviewCss.tdSize}>
                  <span className={orderReviewCss.order}>
                    {myReviewItem.name}
                  </span>
                </td>
                <td className={orderReviewCss.buttonId}>
                  <div>
                    <input
                      type="hidden"
                      value={myReviewItem.product_id}
                    ></input>
                    {myReviewItem.isWriting ? (
                      <>
                        <button
                          className={orderReviewCss.button}
                          onClick={reviseModal}
                        >
                          수정
                        </button>
                        <button className={orderReviewCss.button}>삭제</button>
                      </>
                    ) : (
                      <button
                        className={orderReviewCss.button}
                        onClick={showModal}
                      >
                        등록
                      </button>
                    )}
                    {modalOpen && <ReviewModal setModalOpen={setModalOpen} />}
                    {ReviewModalReviseOpen && (
                      <ReviewModalRevise
                        setReviewModalReviseOpen={setReviewModalReviseOpen}
                      />
                    )}
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className={css.rowList}>
        <p>조회 가능한 미식평이 없습니다.</p>
      </div>
    </div>
  );
}

export default Review;
