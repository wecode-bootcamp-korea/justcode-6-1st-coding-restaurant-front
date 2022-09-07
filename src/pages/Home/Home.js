import React, { useEffect } from 'react';

import css from './Home.module.scss';

import MainSlide from '../../components/Main/MainSlide/MainSlide';
import SubSlide from '../../components/Main/SubSlide/SubSlide';

function Home() {
  return (
    <div className={css.container}>
      <MainSlide />

      {/* //////////목데이터////////// */}
      <SubSlide query="subSlide">
        <h2>간편 요리</h2>
        <span>전국 맛집 메뉴를 간단히 요리해보세요</span>
      </SubSlide>
      <SubSlide query="subSlide">
        <h2>주문 많은 순</h2>
      </SubSlide>

      {/* /////////////통신 사용//////////// */}
      {/* <SubSlide query="category=mealKit">
        <h2>간편 요리</h2>
        <span>전국 맛집 메뉴를 간단히 요리해보세요</span>
      </SubSlide>
      <SubSlide query="orderBy=orderCount">
        <h2>주문 많은 순</h2>
      </SubSlide>
      <SubSlide query="orderBy=viewCount">
        <h2>조회 많은 순</h2>
      </SubSlide> */}
    </div>
  );
}

export default Home;
