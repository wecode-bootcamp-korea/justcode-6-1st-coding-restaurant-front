import React, { useState } from 'react';
import orderReviewCss from '../Mypage/Review.module.scss';
import ReviewModal from './ReviewModal';
import ReviewModalRevise from './ReviewModalRevise';

function ReviewList({
  orderList,
  reviewList,
  removeBtn,
  setRemoveBtn,
  addBtn,
  setAddBtn,
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const [ReviewModalReviseOpen, setReviewModalReviseOpen] = useState(false);
  const [isWriting, setIsWriting] = useState(false);
  let reviewItem = [];
  let reviewCheck = false;

  const isWritingHandler = () => {
    setIsWriting(true);
  };

  const showModal = () => {
    setModalOpen(true);
  };

  const reviseModal = () => {
    setReviewModalReviseOpen(true);
  };
  const deleteBtn = () => {
    const newList = removeBtn.filter(el => orderList.productId != el.productId);
    setRemoveBtn(newList);
  };

  for (let i = 0; i < reviewList.length; i++) {
    if (orderList.productId == reviewList[i].productId) {
      reviewCheck = true;
    }
  }
  reviewItem = reviewList.filter(el => orderList.productId == el.productId)[0];

  return (
    <div className={orderReviewCss['review-box']}>
      <div className={orderReviewCss.case}>
        <img
          className={orderReviewCss.foodImg}
          src={orderList.imageThumbnail}
        ></img>
      </div>
      <div className={orderReviewCss.tdSize}>
        <span className={orderReviewCss.order}>{orderList.productName}</span>
      </div>
      <div className={orderReviewCss.buttonId}>
        <div>
          {isWriting || reviewCheck ? (
            <>
              <button className={orderReviewCss.button} onClick={reviseModal}>
                수정
              </button>
              <button onClick={deleteBtn} className={orderReviewCss.button}>
                삭제
              </button>
            </>
          ) : (
            <button className={orderReviewCss.button} onClick={showModal}>
              등록
            </button>
          )}
          {modalOpen && (
            <ReviewModal
              productName={orderList.productName}
              productId={orderList.productId}
              setModalOpen={setModalOpen}
              setAddBtn={setAddBtn}
              isWritingHandler={isWritingHandler}
            />
          )}
          {ReviewModalReviseOpen && (
            <ReviewModalRevise
              productName={orderList.productName}
              productId={orderList.productId}
              reviewId={reviewItem.reviewId}
              reviewContent={reviewItem.review}
              setReviewModalReviseOpen={setReviewModalReviseOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewList;
