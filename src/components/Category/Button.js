import React, { useState } from 'react';
import css from './Button.module.scss';

function Button(props) {
  const { handleBtn } = props;
  const [check, setCheck] = useState([true, false, false, false, false]);
  const onClick = e => {
    const sortedPage = e.target.value;
    handleBtn(sortedPage);
    // let arr = chaeck.map(v => {
    //   v?
    // })
  };
  // console.log(check);
  return (
    <>
      <div>
        <button className={css.on} onClick={onClick} value="viewCount">
          조회순
        </button>
      </div>
      <div>
        <button
          className={check[1] ? css.on : css.off}
          onClick={onClick}
          value="orderCount"
        >
          주문순
        </button>
      </div>
      <div>
        <button
          className={check[2] ? css.on : css.off}
          onClick={onClick}
          value="lowPrice"
        >
          낮은 가격순
        </button>
      </div>
      <div>
        <button
          className={check[3] ? css.on : css.off}
          onClick={onClick}
          value="highPrice"
        >
          높은 가격순
        </button>
      </div>
    </>
  );
}
export default Button;
