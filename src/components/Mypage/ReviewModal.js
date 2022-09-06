import React from 'react';
import { useState } from 'react';
import reviewModalCss from '../Mypage/ReviewModal.module.scss';

function ReviewModal({
  productName,
  productId,
  setModalOpen,
  setAddBtn,
  isWritingHandler,
}) {
  const [reviewContent, setReviewContent] = useState();
  const review = {
    rating: 3,
    review: '',
    reviewId: 3,
    createdAt: '2022-09-06',
    productId: productId,
    productName: productName,
    imageThumbnail:
      'https://cdn.pixabay.com/photo/2017/02/01/16/37/chicken-2030706__340.jpg',
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const reviewContentHandle = e => {
    setReviewContent(e.target.value);
  };

  const addReview = e => {
    review.review = reviewContent;
    setAddBtn(oldArray => [...oldArray, review]);
    isWritingHandler();
    closeModal();
    alert('리뷰 등록 완료!');
  };

  return (
    <div className={reviewModalCss.container}>
      <p className={reviewModalCss.reviewAdd}>리뷰 등록</p>
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
                placeholder="이 메뉴는 어떠셨나요? 후기를 남겨주세요!"
                onChange={reviewContentHandle}
              ></textarea>
            </td>
          </tr>
        </tfoot>
      </table>
      <div className={reviewModalCss.test}>
        <button className={reviewModalCss.reviewAddButton} onClick={addReview}>
          미식평 등록하기
        </button>
      </div>
    </div>
  );
}

export default ReviewModal;
