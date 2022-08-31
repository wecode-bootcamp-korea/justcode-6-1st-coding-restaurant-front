import css from './Cart.module.scss';

function Cart() {
  return (
    <div className={css['cart-box']}>
      <img src="image/cart.png" alt="cart" />
      <span>장바구니</span>
      <div>
        <span>0</span>
      </div>
    </div>
  );
}

export default Cart;
