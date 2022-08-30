import React, { useState } from 'react';

import css from './CartItem.module.scss';

function CartItem() {
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <>
      <div className={css['cart-item']}>
        <div className={css['item-brand']}>
          브랜드 이름 (도착일이 같다면 50,000 원 이상 무료 배송 / 현재{' '}
          {totalPrice}원)
        </div>
        <div className={css['item-body']}>
          <img
            className={css['item-img']}
            alt="쉬림프파스타"
            src="https://cdn.pixabay.com/photo/2015/03/05/18/30/spaghetti-660748__340.jpg"
          />
          <div className={css['item-detail']}>
            <div className={css['item-name']}>
              <a>[부산족발] 냉채족발</a>
            </div>
            <div className={css['item-detail-list']}>
              <div className={css['item-select']}>
                <input type="checkbox"></input>
                <div className={css['item-option']}>3인분</div>
              </div>

              <div>
                <span className={css.price}>10,000 원</span>
                <span className={`${css.small} ${css.count}`}>
                  <button className={`${css.button} ${css.minus}`}>-</button>3
                  <button className={`${css.button} ${css.plus}`}>+</button>
                </span>
                <span className={css['total-price']}>30,000 원</span>
                <span className={css['delivery-fee']}>3,500 원</span>
                <span className={css['delivery-date']}>09월 03일</span>

                <button className={`${css.small} ${css.delete}`}>x</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
