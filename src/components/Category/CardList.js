import React from 'react';
import css from './CardList.module.scss';
import Card from './Card';
function CardList({ props }) {
  return (
    <div className={css.container}>
      {props.map(card => (
        <Card key={card.id} props={card} />
      ))}
    </div>
  );
}
export default CardList;
