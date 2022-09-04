import React from 'react';
import css from './PhotoList.module.scss';
import Card from './Card';
function PhotoList() {
  return (
    <div className={css.container}>
      {props.map(card => (
        <Card key={card.id} props={card} />
      ))}
    </div>
  );
}
export default CardList;
