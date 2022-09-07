import React, { useState } from 'react';

import css from './Option.module.scss';

const Option = ({
  option,
  productPrice,
  quantity,
  setQuantity,
  setTotalPrice,
  setProductPrice,
}) => {
  const countMinus = () => {
    quantity >= 2 && setQuantity(quantity - 1);
    quantity >= 2 && setTotalPrice(Number(`${(quantity - 1) * productPrice}`));
  };

  const countPlus = () => {
    setQuantity(quantity + 1);
    setTotalPrice(Number(`${(quantity + 1) * productPrice}`));
  };

  const optionDelete = () => {
    setProductPrice('');
  };

  return (
    <div className={css['quantity-box']}>
      <div className={css['option-box']}>
        <button className={`${css.small} ${css.delete}`} onClick={optionDelete}>
          x
        </button>
        <div className={css.option}>{option}</div>
      </div>

      <div className={css['quantity']}>
        <img
          onClick={countMinus}
          src=" https://cdn-icons-png.flaticon.com/128/992/992683.png"
          className={`${css.button} ${css.minus}`}
        />
        {quantity}
        <img
          onClick={countPlus}
          src="https://cdn-icons-png.flaticon.com/128/3303/3303893.png"
          className={`${css.button} ${css.plus}`}
        />
      </div>
    </div>
  );
};

export default Option;
