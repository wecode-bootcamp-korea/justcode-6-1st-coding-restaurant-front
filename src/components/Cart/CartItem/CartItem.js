import React, { useState } from 'react';

import css from './CartItem.module.scss';

function CartItem({ item, itemState, setItemState, cartCount, setCartCount }) {
  const { brandName, itemName, img, options } = item;
  const [count, setCount] = useState(item.quantity);
  const [price, setPrice] = useState(item.price);
  const [itemTotalPrice, setItemTotalPrice] = useState(
    Number(`${count * price}`)
  );
  const deliveryFee = 3500;
  const deliveryDate = '2022-09-06';
  const freeDelivery =
    itemTotalPrice >= 50000 ? '무료배송' : deliveryFee.toLocaleString() + ' 원';

  const deleteClick = () => {
    fetch('http://localhost:8000/carts', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        cartsId: item.id,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });

    itemState == true && setItemState(false);
    itemState == false && setItemState(true);
    setCartCount(cartCount - 1);
  };

  const countPlus = () => {
    let newPrice = Number(`${(count + 1) * price}`);
    setCount(count + 1);
    setItemTotalPrice(newPrice);
    fetch('http://localhost:8000/carts', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        cartsId: item.id,
        quantity: 1,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
      });
    itemState == true && setItemState(false);
    itemState == false && setItemState(true);
  };

  const countMinus = () => {
    count >= 2 && setCount(count - 1);
    count >= 2 && setItemTotalPrice(Number(`${(count - 1) * price}`));
    count >= 2 &&
      fetch('http://localhost:8000/carts', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          cartsId: item.id,
          quantity: -1,
        }),
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
    itemState == true && setItemState(false);
    itemState == false && setItemState(true);
  };

  return (
    <>
      <div className={css['cart-item']}>
        <div className={css['item-brand']}>
          {brandName} ( 50,000 원 이상 무료 배송 / 현재{' '}
          {itemTotalPrice.toLocaleString()} 원 )
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
                <div className={css['item-option']}>{options}</div>
              </div>

              <div>
                <span className={css.price}>{price.toLocaleString()} 원</span>
                <span className={`${css.small} ${css.count}`}>
                  <img
                    onClick={countMinus}
                    src=" https://cdn-icons-png.flaticon.com/128/992/992683.png"
                    className={`${css.button} ${css.minus}`}
                  />
                  {count}
                  <img
                    onClick={countPlus}
                    src="https://cdn-icons-png.flaticon.com/128/3303/3303893.png"
                    className={`${css.button} ${css.plus}`}
                  />
                </span>

                <span className={css['total-price']}>
                  {itemTotalPrice.toLocaleString()} 원
                </span>
                <span className={css['delivery-fee']}>{freeDelivery}</span>

                <span className={css['delivery-date']}>{deliveryDate}</span>

                <button
                  onClick={deleteClick}
                  className={`${css.small} ${css.delete}`}
                >
                  x
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
