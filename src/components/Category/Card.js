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
        <span>{props.name}</span>
        <span>{props.fixedPrice}</span>
        <div className={css.review}>
          <span>{props['order_count'].toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
