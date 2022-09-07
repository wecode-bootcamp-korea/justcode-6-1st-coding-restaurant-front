import React from 'react';

import css from './Delivery.module.scss';

const Delivery = () => {
  return (
    <div className={css.delivery}>
      <div className={css.content}>
        <br />
        식품 특성상 배송예정일보다 1~2일 지연될 수 있는 부분 양해부탁드립니다.
        <br />
        <br />
        배송문의는 justMiRea@coding_restaurant.com / 카카오톡 채널 @justMiRea
      </div>
    </div>
  );
};

export default Delivery;
