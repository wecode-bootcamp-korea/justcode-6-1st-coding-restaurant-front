import orderReviewCss from './Review.module.scss';
import css from './Mypage.module.scss';
import foodImg from './img/cake.png';

function Review() {
  return (
    <div className={orderReviewCss.reviewContainer}>
      <div className={css.sectionTitle}>
        <span>미식평</span>
      </div>
      <div>
        <div className={orderReviewCss.reviewContentBox}>
          <img className={orderReviewCss.foodImg} src={foodImg}></img>
          <div className={orderReviewCss.reviewContent}>
            <input></input>
          </div>
          <span className={orderReviewCss.order}>달콤상큼 롤케이크</span>
        </div>
      </div>
      <div className={css.rowList}>
        <p>조회 가능한 미식평이 없습니다.</p>
      </div>
    </div>
  );
}

export default Review;
