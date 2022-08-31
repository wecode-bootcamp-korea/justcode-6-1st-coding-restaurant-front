import React, { useState, useEffect } from 'react';

import css from './CartItem.module.scss';

function CartItem({ item, setCartList }) {
  const { id, brandName, itemName, img, option, deliveryFee, deliveryDate } =
    item;
  const [count, setCount] = useState(item.quantity);
  const [price, setPrice] = useState(item.price);
  const [itemTotalPrice, setItemTotalPrice] = useState(
    Number(`${count * price}`)
  );
  const [finalPrice, setFinalPrice] = useState(0);

  return (
    <>
      <div className={css['cart-item']}>
        <div className={css['item-brand']}>
          {brandName} (도착일이 같다면 50,000 원 이상 무료 배송 / 현재{' '}
          {itemTotalPrice}원)
        </div>
        <div className={css['item-body']}>
          <img className={css['item-img']} alt={itemName} src={img} />
          <div className={css['item-detail']}>
            <div className={css['item-name']}>
              <a>{itemName}</a>
            </div>
            <div className={css['item-detail-list']}>
              <div className={css['item-select']}>
                <input type="checkbox"></input>
                <div className={css['item-option']}>{option}</div>
              </div>

              <div>
                <span className={css.price}>{price.toLocaleString()} 원</span>
                <span className={`${css.small} ${css.count}`}>
                  <img
                    src=" https://cdn-icons-png.flaticon.com/128/992/992683.png"
                    className={`${css.button} ${css.minus}`}
                  />
                  {count}
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3303/3303893.png"
                    className={`${css.button} ${css.plus}`}
                  />
                </span>

                <span className={css['total-price']}>
                  {itemTotalPrice.toLocaleString()} 원
                </span>
                <span className={css['delivery-fee']}>
                  {deliveryFee.toLocaleString()} 원
                </span>

                <span className={css['delivery-date']}>{deliveryDate}</span>

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