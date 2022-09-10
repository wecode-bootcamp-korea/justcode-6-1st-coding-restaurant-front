import React, { useEffect } from 'react';

import css from './Home.module.scss';

import MainSlide from '../../components/Main/MainSlide/MainSlide';
import SubSlide from '../../components/Main/SubSlide/SubSlide';
import Header from '../../components/Header/Header';

function Home() {
  return (
    <>
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
        {/* <SubSlide query="orderBy=orderCount">
          <h2>이 메뉴는 어떠세요?</h2>
          <span>회원님들이 가장 많이 주문한 메뉴</span>
        </SubSlide>
        <SubSlide query="orderBy=viewCount">
          <h2>베스트셀러</h2>
          <span>지금 가장 많이 구매되고 있는 메뉴입니다</span>
        </SubSlide>
        <SubSlide query="category=mealKit">
          <h2>간편 요리</h2>
          <span>전국 맛집 메뉴를 간단히 요리해보세요</span>
        </SubSlide> */}
      </div>
    </>
  );
}

export default Home;
