import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Cart.module.scss';

function Cart() {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  // useEffect(() => {
  //   fetch('http://localhost:8000/carts', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       Authorization: `Bearer ${localStorage.getItem('token')}`,
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setCartCount(data.data.cartList.length);
  //     });
  // }, []);

  return (
    <div className={css['cart-box']} onClick={() => navigate('/cart')}>
      <img src="/image/header/cart.png" alt="cart" />
      <span>장바구니</span>
      <div>
        <span>{cartCount}</span>
      </div>
    </div>
  );
}

export default Cart;
