import React, { useState } from 'react';

import css from './DetailSub.module.scss';

const DetailSub = ({ price, bundles }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const deliveryFee = 3500;
  const deliveryDate = '09월 30일';

  return (
    <div className={css['detail-sub']}>
      <div className={css['price-box']}>
        <div className={css.price}>
          <span>판매가격</span>
          <div>
            <div>
              {' '}
              <div>{price.toLocaleString()} 원 ~</div>
              <div>상품 가격의 1% 적립</div>
            </div>
          </div>
        </div>
        <div className={css.delivery}>
          <div className={`${css['price']} ${css['delivery-fee']}`}>
            <span>배송비</span>
            <div> {deliveryFee} 원 ~</div>
          </div>
          <div className={`${css['price']} ${css['delivery-fee']}`}>
            <span>배송 도착일</span>
            <div>{deliveryDate}</div>
          </div>
        </div>

        <div className={`${css['price']} ${css['option-box']}`}>
          메뉴 선택하기 :{' '}
          <select>
            {bundles.map(bundle => {
              return (
                <option className={css.option} key={bundle.id}>
                  {bundle.option} - {bundle.price}
                </option>
              );
            })}
          </select>
        </div>
        <div className={css.price}>
          <div> 총 결제금액</div>
          <div>{totalPrice} 원</div>
        </div>
      </div>
      <div className={css['button-box']}>
        {' '}
        <button>장바구니에 담기</button>
        <button>바로 주문하기</button>
        <button>네이버로 주문하기</button>
      </div>
    </div>
  );
};

export default DetailSub;
