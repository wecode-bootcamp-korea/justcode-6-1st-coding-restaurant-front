import { useNavigate } from 'react-router-dom';
import css from './CardList.module.scss';

function Card({ props }) {
  const navigate = useNavigate();
  const moveToDetail = () => {
    navigate(`/product/${props.id}`);
  };
  return (
    <div onClick={moveToDetail} className={css.card}>
      <img src={props['image_thumbnail']} alt="card" />
      <div className={css.content}>
        <h2>{props.productor}</h2>
        <h2>{props.name}</h2>
        <span>{`${props.fixedPrice.toLocaleString()} 원`}</span>
        <div className={css.review}>
          <span>{`주문수 : ${props['order_count'].toLocaleString()}`}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
