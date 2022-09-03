import { useNavigate } from 'react-router-dom';
import css from './PhotoList.module.scss';

function Card(props) {
  const navigate = useNavigate(); // 카드를 누르면 상세페이지로 보내주기 위한 navigate
  const onClick = () => {
    navigate(`/product/${props.id}`);
  };
  return (
    <div className={css.card} onClick={onClick}>
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
