import React, { useState } from 'react';

import css from './DetailSub.module.scss';
import Option from '../../components/Detail/Option';

// 옵션 선택하면 옵션마다 Option component 나오게 하려다가 실패..
// 어차피 장바구니 추가api에서 bundleId 한가지만 보내기 때문에 보류함

const DetailSub = ({ price, bundles }) => {
  const navigate = useNavigate();

  const [option, setOption] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [deliveryFee, setDeliveryFee] = useState(3500);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const deliveryDate = '09월 30일';
  const [quantity, setQuantity] = useState(1);
  let bundleId = 1;

  const selectOption = e => {
    setProductPrice(Number(e.target.value));
    setTotalPrice(Number(e.target.value));

    setOption(
      e.target.options[e.target.options.selectedIndex].getAttribute('option')
    );
  };

  const moveToCart = () => {
    //모달창 대신 임시로 alert 기능 넣었습니다 여유되면 모달기능추가
    //장바구니에 담기 버튼 클릭하면 장바구니에 상품 추가하는 api 작성해야함
    fetch('http://localhost:8000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Auothorization: `Bearer ` + localStorage.getItem('token'),
      },
      body: JSON.stringify({
        bundleId: bundleId,
        quantity: quantity,
      })
        .then(res => res.json())
        .then(data => {
          alert(
            '상품이 장바구니에 담겼습니다:)\n장바구니에서 상품을 확인하세요!'
          );
        }),
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
            <span className={css['sub-title']}>배송비</span>
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
          <div className={css['select-option']}>메뉴 선택하기</div>
          <select className={css.option} onChange={selectOption}>
            <option value={''}>메뉴 선택하기</option>
            {bundles.map(bundle => {
              return (
                <option
                  key={bundle.id}
                  value={bundle.price}
                  option={bundle.option}
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
            {/* {bundles.map(() => {
             return( )
            })} */}
            {
              <Option
                option={option}
                quantity={quantity}
                setQuantity={setQuantity}
                setTotalPrice={setTotalPrice}
                productPrice={productPrice}
              />
            }
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
