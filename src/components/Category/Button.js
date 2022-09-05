import React, { useState } from 'react';
import css from './Button.module.scss';

function Button(props) {
  const { handleBtn } = props;
  const [check, setCheck] = useState([true, false, false, false, false]);
  const onClick = e => {
    const sortedPage = e.target.value;
    handleBtn(sortedPage);
  };
  return (
    <>
      <div className={css['menu-button']}>
        <button onClick={onClick} value="viewCount">
          조회순
        </button>
      </div>
      <div className={css['menu-button']}>
        <button onClick={onClick} value="orderCount">
          주문순
        </button>
      </div>
      <div className={css['menu-button']}>
        <button onClick={onClick} value="lowPrice">
          낮은 가격순
        </button>
      </div>
      <div className={css['menu-button']}>
        <button onClick={onClick} value="highPrice">
          높은 가격순
        </button>
      </div>
    </>
  );
}
export default Button;
