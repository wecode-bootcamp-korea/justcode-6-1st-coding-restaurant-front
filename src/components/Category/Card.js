import css from './PhotoList.module.scss';

function Card({ props }) {
  return (
    <div className={css.card}>
      <img src={props['image_thumbnail']} alt="card" />
      <div className={css.content}>
        <h2>{props.productor}</h2>
        <span>{props.name}</span>
        <span>{props.fixedPrice}</span>
        <div className={css.review}>
          <span>{props['order_count']}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
