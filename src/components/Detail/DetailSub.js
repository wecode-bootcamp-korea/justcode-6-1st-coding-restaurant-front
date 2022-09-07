import React, { useState } from 'react';

import css from './DetailSub.module.scss';
import Option from '../../components/Detail/Option';

// 메뉴 선택 - 한번 선택하면 다시 선택 못하게
// 수량 변경 - 총합계 변경, 5만원 이상이면 배송비 0원
// 장바구니 담기

const DetailSub = ({ price, bundles }) => {
  const [option, setOption] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [deliveryFee, setDeliveryFee] = useState(3500);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [bundleId, setBundleId] = useState('');
  const deliveryDate = '09월 30일';

  const selectOption = e => {
    setProductPrice(Number(e.target.value));
    setTotalPrice(Number(e.target.value));

    setOption(
      e.target.options[e.target.options.selectedIndex].getAttribute('option')
    );

    setBundleId(
      e.target.options[e.target.options.selectedIndex].getAttribute('bundleid')
    );
  };

  const optionBox = () => {
    return (
      <Option
        option={option}
        quantity={quantity}
        setQuantity={setQuantity}
        setTotalPrice={setTotalPrice}
        productPrice={productPrice}
      />
    );
  };

  const moveToCart = () => {
    //모달창 대신 임시로 alert 기능 넣었습니다 여유되면 모달기능추가
    //장바구니에 담기 버튼 클릭하면 장바구니에 상품 추가하는 api 작성해야함
    fetch('http://localhost:8000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        bundleId: bundleId,
        quantity: quantity,
      }),
    })
      .then(res => res.json())
      .then(data => {
        alert(
          '상품이 장바구니에 담겼습니다:)\n장바구니에서 상품을 확인하세요!'
        );
      });
  };

  return (
    <div className={css['detail-sub']}>
      <div className={css['price-box']}>
        <div className={css.price}>
          <span className={css['sub-title']}>판매가격</span>
          <div>
            <div>
              <div className={css['title-price']}>
                {price.toLocaleString()} 원 ~
              </div>
              <span className={css['sub-title']}>상품 가격의 1% 적립</span>
            </div>
          </div>
        </div>
        <div className={css.delivery}>
          <div className={`${css['price']} ${css['delivery-fee']}`}>
            <span className={css['sub-title']}>
              배송비
              <br />
              (50,000원 이상 무료배송)
            </span>
            <div>
              {totalPrice >= 50000
                ? '무료배송'
                : deliveryFee.toLocaleString() + ' 원'}
            </div>
          </div>
          <div className={`${css['price']} ${css['delivery-fee']}`}>
            <span className={css['sub-title']}>배송 도착일</span>
            <div>{deliveryDate}</div>
          </div>
        </div>

        <div className={`${css['sub-title']} ${css['option-box']} `}>
          <div className={css['select-option']}>
            메뉴 선택하기
            <br />
            (옵션은 한 가지만 선택해주세요)
          </div>
          <select className={css.option} onChange={selectOption}>
            <option value={''}>메뉴 선택하기</option>
            {bundles.map(bundle => {
              return (
                <option
                  key={bundle.id}
                  value={bundle.price}
                  option={bundle.option}
                  bundleid={bundle.id}
                >
                  {bundle.option} - {bundle.price.toLocaleString()}
                </option>
              );
            })}
          </select>
        </div>
        {productPrice != '' && (
          <div className={css['']}>
            <div>
              <div className={css.price}>
                <span className={css['sub-title']}>수량 선택하기</span>
              </div>
            </div>
            {optionBox()}
          </div>
        )}
        <div className={css.price}>
          <div className={css['sub-title']}> 총 결제금액</div>
          <div className={css['title-price']}>
            {totalPrice &&
              (totalPrice >= 50000
                ? totalPrice.toLocaleString()
                : (totalPrice + 3500).toLocaleString())}{' '}
            원
          </div>
        </div>
      </div>
      <div className={css['button-box']}>
        <button className={css['add-to-cart']} onClick={moveToCart}>
          장바구니에 담기
        </button>
        <button className={css['order-now']}>바로 주문하기</button>
        <button className={css['order-naver']}>
          <span className={css.naver}>N </span>
          <span className={css.pay}>Pay</span>
          <span> 로 주문하기</span>
        </button>
      </div>
    </div>
  );
};

export default DetailSub;
