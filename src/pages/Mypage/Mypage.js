import React, { Component } from 'react';
import css from './Mypage.module.scss';
import myimg from './img/myimg.png';
import Orderlist from './Orderlist';
// import Orderdetail from './Orderdetail';
// import Point from './Point';
// import Profile from './Profile';
import Review from './Review';

const onClickHandler = e => {
  const navTabsList = document.getElementsByClassName(css.navTabsList);
  // 클릭 이벤트가 발생했을 시 메뉴 리스트들을 가져옴
  // 순환을 하면서 bottom 클래스가 있는지 확인
  for (let i = 0; i < navTabsList.length; i++) {
    if (navTabsList[i].classList.contains(css.bottom)) {
      navTabsList[i].classList.remove(css.bottom);
    }
  }
  e.target.classList.add(css.bottom);
  // 만약에 있다면 그 클래스를 지워야함
  // 그리고 클릭한 타겟 엘레멘트에 bottom 클래스를 넣어줌
};

function Mypage() {
  return (
    <div className={css.container}>
      <div className={css.mypageContent}>
        <header className={css.headerSection}>
          <span className={css.mypageFont}>마이미식</span>
        </header>
        <section className={css.mypageHeaderBox}>
          <div className={css.boxLeft}>
            <img src={myimg}></img>
          </div>
          <div className={css.boxBody}>
            <div className={css.boxHeading}>
              <span className={css.nanum}>이은지</span>
            </div>
            <div>
              <ul className={css.navBar}>
                <li className={css.navBarItem}>
                  먹어본 메뉴
                  <span> 0개</span>
                </li>
                <li className={css.navBarItem}>
                  미식 포인트
                  <span> 0원</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <nav className={css.myTabs}>
          <ul className={css.navTabs}>
            <li
              onClick={onClickHandler}
              className={`${css.navTabsList} ${css.navHover} ${css.bottom}`}
            >
              주문 내역
            </li>
            <li
              onClick={onClickHandler}
              className={`${css.navTabsList} ${css.navHover}`}
            >
              미식평
            </li>

            <li
              onClick={onClickHandler}
              className={`${css.navTabsList} ${css.navHover}`}
            >
              포인트
            </li>
            <li
              onClick={onClickHandler}
              className={`${css.navTabsList} ${css.navHover}`}
            >
              내 정보
            </li>
          </ul>
        </nav>
        <Orderlist />
        {/* <Review /> */}
      </div>
    </div>
  );
}

export default Mypage;
