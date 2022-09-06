import React from 'react';
import reviewModalCss from '../Mypage/ReviewModal.module.scss';

function ReviewModalRevise({
  productName,
  productId,
  reviewId,
  reviewContent,
  setReviewModalReviseOpen,
}) {
  const closeModal = () => {
    setReviewModalReviseOpen(false);
  };

  return (
    <div className={reviewModalCss.container}>
      <p className={reviewModalCss.reviewAdd}>리뷰수정</p>
      <button className={reviewModalCss.close} onClick={closeModal}>
        닫기
      </button>
      <table>
        <tbody>
          <tr className={reviewModalCss.tdCss}>
            <td className={reviewModalCss.orderTdSize}>
              <span className={reviewModalCss.order}>{productName}</span>
            </td>
            <td>
              <span className={reviewModalCss.order}>미식 만족도</span>
              <span className={reviewModalCss.order}>★★★☆☆</span>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <textarea
                className={reviewModalCss.reviewInput}
                placeholder="수정할 내용을 적어주세요!"
                defaultValue={reviewContent}
              ></textarea>
            </td>
          </tr>
        </tfoot>
      </table>
      <div className={reviewModalCss.test}>
        <button className={reviewModalCss.reviewAddButton}>
          미식평 수정하기
        </button>
      </div>
    </div>
  );
}

export default ReviewModalRevise;
