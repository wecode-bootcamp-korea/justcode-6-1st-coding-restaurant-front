import React, { Children, useEffect } from 'react';

import css from './Home.module.scss';

import MainSlide from '../../components/Main/MainSlide/MainSlide';
import SubSlide from '../../components/Main/SubSlide/SubSlide';

function Home() {
  return (
    <div className={css.container}>
      <MainSlide />
      <SubSlide type={'ff'}>
        <h2>간편 요리</h2>
        <span>전국 맛집 메뉴를 간단히 요리해보세요</span>
      </SubSlide>
      <SubSlide>
        <h2>주문 많은 순</h2>
      </SubSlide>
    </div>
  );
}

export default Home;
