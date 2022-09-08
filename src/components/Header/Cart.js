import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Cart.module.scss';

function Cart({ cartCount }) {
  const navigate = useNavigate();

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
