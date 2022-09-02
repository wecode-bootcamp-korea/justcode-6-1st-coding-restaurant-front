import React from 'react';
import reviewModalCss from '../Mypage/ReviewModal.module.scss';

function ReviewModal({ setModalOpen }) {
  const closeModal = () => {
    setModalOpen(false);
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
              <span className={reviewModalCss.order}>
                [어디야커피] 달콤살벌 벌꿀 롤 케이크
              </span>
            </td>
            <td>
              <span className={reviewModalCss.order}>미식 만족도</span>
              <span className={reviewModalCss.order}>★★★☆☆</span>
            </td>
            <tfoot>
              <textarea
                className={reviewModalCss.reviewInput}
                placeholder="이 메뉴는 어떠셨나요? 후기를 남겨주세요!"
              ></textarea>
            </tfoot>
          </tr>
        </tbody>
      </table>
      <div className={reviewModalCss.test}>
        <button className={reviewModalCss.reviewAddButton}>
          미식평 등록하기
        </button>
      </div>
    </div>
  );
}

export default ReviewModal;
