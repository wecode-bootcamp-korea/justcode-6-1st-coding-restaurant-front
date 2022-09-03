import React from 'react';

import css from './DetailSub.module.scss';

const DetailSub = ({ price, bundles }) => {
  const deliveryFee = 3500;
  const deliveryDate = '09월 30일';

  return (
    <div className={css.sub}>
      <div>가격 : {price.toLocaleString()} 원부터~</div>
      <div>배송비 : {deliveryFee}</div>
      <div className={css['option']}>
        메뉴 선택하기 :{' '}
        <select>
          {bundles.map(bundle => {
            return (
              <option key={bundle.id}>
                {bundle.option} - {bundle.price}
              </option>
            );
          })}
        </select>
      </div>
      <div>배송 도착일: {deliveryDate} </div>
      <div>수량선택하기</div>
      <div>총 결제금액</div>
      <button>장바구니에 담기</button>
      <button>바로 주문하기</button>
    </div>
  );
};

export default DetailSub;
