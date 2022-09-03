import { useNavigate } from 'react-router-dom';
import css from './PhotoList.module.scss';

function Card({ props }) {
  const navigate = useNavigate(); // 카드를 누르면 상세페이지로 보내주기 위한 navigate
  const onClick = () => {
    navigate(`/product/${props.id}`);
  };
  return (
    <div className={css.card} onClick={onClick}>
      <img src={props['image_thumbnail']} alt="card" />
      <div className={css.content}>
        <h2>{props.productor}</h2>
        <span>{props.name}</span>
        <span>{props.fixedPrice}</span>
        <div className={css.review}>
          <span>{`조회수 ${props['view_count'].toLocaleString()}`}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
