import React from 'react';

import DetailMain from '../../components/Detail/DetailMain';
import DetailSub from '../../components/Detail/DetailSub';

import css from './Detail.module.scss';

// 1. 상세페이지 불러오기 API : 제목, 부제목, 상세정보, 리뷰,
//   번들, 가격, 배송비, 도착일
// 2. 장바구니 담기 API

const Detail = () => {
  return (
    <div className={css.detail}>
      <div className={css.container}>
        <div className={css.main}>
          <DetailMain />
        </div>
        <div className={css.sub}>
          <DetailSub />
        </div>
      </div>
    </div>
  );
};

export default Detail;
