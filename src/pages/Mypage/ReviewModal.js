import React from 'react';
import reviewModalCss from './ReviewModal.module.scss';
import orderReviewCss from './Review.module.scss';
// import css from './Mypage.module.scss';
import foodImg from './img/cake.png';

function ReviewModal({ setModalOpen }) {
  //모달 끄기
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={reviewModalCss.container}>
      <p className={reviewModalCss.reviewAdd}>리뷰 등록</p>
      <tbody>
        <tr>
          <td className={reviewModalCss.tdCss}>
            <span className={reviewModalCss.order}>
              [어디야커피] 달콤살벌 벌꿀 롤 케이크
            </span>
          </td>
          <td>
            <button className={reviewModalCss.close} onClick={closeModal}>
              닫기
            </button>
          </td>
        </tr>
      </tbody>
    </div>
  );
}

export default ReviewModal;
