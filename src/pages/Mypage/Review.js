import orderReviewCss from './Review.module.scss';
import css from './Mypage.module.scss';
import foodImg from './img/cake.png';

function Review() {
  return (
    <div>
      <div className={css.sectionTitle}>
        <span>미식평</span>
      </div>
      <table className={orderReviewCss.reviewList}>
        <tbody>
          <tr>
            <td>
              <img className={orderReviewCss.foodImg} src={foodImg}></img>
            </td>
            <td className={orderReviewCss.tdSize}>
              <span className={orderReviewCss.order}>
                [어디야커피] 달콤살벌 벌꿀 롤 케이크
              </span>
            </td>
            <td className={orderReviewCss.buttonId}>
              <button className={orderReviewCss.button}>등록</button>
              {/* 특정 조건 시 버튼 나타남 */}
              <button className={orderReviewCss.button}>수정</button>
              {/* <button className={orderReviewCss.button}>삭제</button> */}
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
