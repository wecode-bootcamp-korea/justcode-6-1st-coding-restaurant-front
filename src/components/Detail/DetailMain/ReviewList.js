import Review from './Review';
import css from './ReviewList.module.scss';

const ReviewList = ({ reviews }) => {
  return reviews == null ? (
    <div>
      <p>조회 가능한 내역이 없습니다.</p>
    </div>
  ) : (
    <div className={css['review-list']}>
      {reviews.map(review => {
        return <Review key={review.id} review={review} />;
      })}
    </div>
  );
};

export default ReviewList;
