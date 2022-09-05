import React, { useState } from 'react';
import orderReviewCss from '../Mypage/Review.module.scss';
import ReviewModal from './ReviewModal';
import ReviewModalRevise from './ReviewModalRevise';

function ReviewList({ list, removeBtn, setRemoveBtn }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [ReviewModalReviseOpen, setReviewModalReviseOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  const reviseModal = () => {
    setReviewModalReviseOpen(true);
  };
  const deleteBtn = () => {
    const newList = removeBtn.filter(el => list.id != el.id);
    setRemoveBtn(newList);
  };

  return (
    <div className={orderReviewCss['review-box']}>
      <div>
        <img
          className={orderReviewCss.foodImg}
          src={list.image_thumbnail}
        ></img>
      </div>
      <div className={orderReviewCss.tdSize}>
        <span className={orderReviewCss.order}>{list.name}</span>
      </div>
      <div className={orderReviewCss.buttonId}>
        <div>
          <input type="hidden"></input>
          {list.isWriting ? (
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
          {modalOpen && <ReviewModal setModalOpen={setModalOpen} />}
          {ReviewModalReviseOpen && (
            <ReviewModalRevise
              setReviewModalReviseOpen={setReviewModalReviseOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ReviewList;
