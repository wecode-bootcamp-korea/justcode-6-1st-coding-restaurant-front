import React, { useEffect, useState } from 'react';

import css from './Cart.module.scss';
import CartItem from '../../components/Cart/CartItem/CartItem';

function Cart({ cartCount, setCartCount }) {
  const [userName, setUserName] = useState('비회원');
  const [cartList, setCartList] = useState([]);
  const [itemState, setItemState] = useState(false);
  const [itemTotal, setItemTotal] = useState(0); //전체아이템 총 합계
  const [totalDelivery, setTotalDelivery] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0); //배달료 포함 총 금액

  // 장바구니 조회 api
  useEffect(() => {
    // fetch('/data/cart/cartList.json', {
    fetch('http://localhost:8000/carts', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    })
      .then(res => res.json())
      .then(req => {
        setUserName(req.data.name);
        setCartList(req.data.cartList);
        setItemTotal(req.data.totalPrice);
        setTotalDelivery(req.data.deliveryFee);
        setTotalPrice(req.data.orderPrice);
      });
  }, [itemState]);

  return (
    <>
      {cartList && (
        <div className={css.cart}>
          <div className={css.container}>
            <div className={css['content-header']}>
              <h1>{userName} 님의 장바구니</h1>
              <small>주문 예정인 상품을 확인할 수 있습니다.</small>
            </div>
            <ul className={css['order-process']}>
              <li className={css.step}>
                <div
                  className={`
                ${css['step-number']} ${css.active}
              `}
                >
                  1
                </div>
                <span className={css.title}>장바구니</span>
                <img
                  className={css['next-step']}
                  alt="화살표"
                  src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                />
              </li>
              <li className={css.step}>
                <div className={css['step-number']}>2</div>
                <span className={css.title}>주문서 작성</span>
                <img
                  className={css['next-step']}
                  alt="화살표"
                  src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
                />
              </li>
              <li className={css.step}>
                <div className={css['step-number']}>3</div>
                <span className={css.title}>주문 완료</span>
              </li>
            </ul>
            <div className={css['cart-list']}>
              <h3 className={css['item-to-order']}>주문 예정인 상품</h3>
              <div className={css['cart-caption-list']}>
                <div className={css['caption-item']}>상품</div>
                <div className={css['caption-option']}>가격</div>
                <div className={css['caption-option']}>수량</div>
                <div className={css['caption-option']}>합계</div>
                <div className={css['caption-option']}>배송비</div>
                <div className={css['caption-option']}>도착예정일</div>
                <div className={css['caption-delete']}>삭제</div>
              </div>

              {cartList.map(item => {
                return (
                  <CartItem
                    key={item.id}
                    item={item}
                    cartList={cartList}
                    // setCartList={setCartList}
                    itemState={itemState}
                    setItemState={setItemState}
                    cartCount={cartCount}
                    setCartCount={setCartCount}
                  />
                );
              })}
            </div>
            <div className={css['price-zone']}>
              <div className={css['price-sum']}>
                <div>상품 합계 </div>
                <div>{itemTotal.toLocaleString()} 원</div>
                <div>+ </div>
                <div>배송비 </div>
                <div>{totalDelivery.toLocaleString()} 원 </div>
              </div>

              <div>총합계 </div>
              <div className={css['final-price']}>
                {totalPrice.toLocaleString()} 원
              </div>
            </div>
            <div className={css['button-zone']}>
              <button className={css['button-select']}>선택 메뉴 주문</button>
              <button className={css['button-total']}>전체 메뉴 주문</button>
            </div>

            <div className={css['order-more-zone']}>
              <div className={css['order-more']}>
                다른 메뉴를 더 주문하시겠어요?
              </div>
              <div>
                같은 식당의 다른 메뉴는 추가 배송비 없이 주문할 수 있습니다.
              </div>
              <button>다른 메뉴 더 보기</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
