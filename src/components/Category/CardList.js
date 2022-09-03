import React from 'react';
import css from './PhotoList.module.scss';
import Card from './Card';
function CardList() {
  return (
    <div className={css.container}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}
export default CardList;
