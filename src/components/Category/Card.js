import css from './PhotoList.module.scss';

function Card() {
  return (
    <div className={css.card}>
      <img src="/image/categoryList/sample.jpg" alt="card" />
      <div className={css.content}>
        <h2>brand</h2>
        <span>foodname</span>
        <span>price</span>
        <div className={css.review}>
          <span>0개 리뷰</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
