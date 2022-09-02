import orderReviewCss from '../Mypage/Review.module.scss';
import css from '../../pages/Mypage/Mypage.module.scss';
import { useState } from 'react';
import ReviewModal from './ReviewModal';
import ReviewModalRevise from './ReviewModalRevise';

function Review() {
  const [modalOpen, setModalOpen] = useState(false);
  const [ReviewModalReviseOpen, setReviewModalReviseOpen] = useState(false);

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
          <tr>
            <td>
              <img
                className={orderReviewCss.foodImg}
                src={`${process.env.PUBLIC_URL}/image/mypage/cake.png`}
              ></img>
            </td>
            <td className={orderReviewCss.tdSize}>
              <span className={orderReviewCss.order}>
                [어디야커피] 달콤살벌 벌꿀 롤 케이크
              </span>
            </td>
            <td className={orderReviewCss.buttonId}>
              <div>
                <button className={orderReviewCss.button} onClick={showModal}>
                  등록
                </button>
                {modalOpen && <ReviewModal setModalOpen={setModalOpen} />}
                {/* <button className={orderReviewCss.button} onClick={reviseModal}>
                  수정
                </button>
                {ReviewModalReviseOpen && (
                  <ReviewModalRevise
                    setReviewModalReviseOpen={setReviewModalReviseOpen}
                  />
                )} */}
                {/* 특정 조건 시 버튼 나타남 */}
                {/* <button className={orderReviewCss.button}>삭제</button> */}
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <img
                className={orderReviewCss.foodImg}
                src={`${process.env.PUBLIC_URL}/image/mypage/cake.png`}
              ></img>
            </td>
            <td className={orderReviewCss.tdSize}>
              <span className={orderReviewCss.order}>
                [어디야커피] 달콤살벌 벌꿀 케이크
              </span>
            </td>
            <td className={orderReviewCss.buttonId}>
              <div>
                <button className={orderReviewCss.button} onClick={showModal}>
                  등록
                </button>
                {modalOpen && <ReviewModal setModalOpen={setModalOpen} />}
                {/* <button className={orderReviewCss.button} onClick={reviseModal}>
                  수정
                </button>
                {ReviewModalReviseOpen && (
                  <ReviewModalRevise
                    setReviewModalReviseOpen={setReviewModalReviseOpen}
                  />
                )} */}
                {/* 특정 조건 시 버튼 나타남 */}
                {/* <button className={orderReviewCss.button}>삭제</button> */}
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <div className={css.rowList}>
        <p>조회 가능한 미식평이 없습니다.</p>
      </div>
    </div>
  );
}

export default Review;
