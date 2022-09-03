import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import css from './Mypage.module.scss';
import myimg from './img/myimg.png';
import Orderlist from './Orderlist';
import Point from './Point';
import Review from './Review';
import { useState } from 'react';
// import Orderdetail from './Orderdetail';
// import Profile from './Profile';

function Mypage() {
  const [navigate, setNavigate] = useState(<Orderlist />);
  const [userInfo, setUserInfo] = useState({
    name: '',
    profileImg: '',
    myOrderCnt: 0,
    point: 0,
  });

  useEffect(() => {
    fetch('/data/mypage.json')
      .then(res => res.json())
      .then(data =>
        setUserInfo({
          ...userInfo,
          name: data.data.name,
          profileImg: data.data.profileImg,
          myOrderCnt: data.data.myOrderCnt,
          point: data.data.point,
        })
      );
  }, []);

  const mypageChangeTab = e => {
    const navTabsList = document.getElementsByClassName(css.navTabsList);
    const tabName = e.target.getAttribute('name');

    for (let i = 0; i < navTabsList.length; i++) {
      if (navTabsList[i].classList.contains(css.bottom)) {
        navTabsList[i].classList.remove(css.bottom);
      }
    }
    e.target.classList.add(css.bottom);

    switch (tabName) {
      case 'orderList':
        return setNavigate(<Orderlist />);
      case 'review':
        return setNavigate(<Review />);
      case 'point':
        return setNavigate(<Point />);
      // case 'profile':
      //  return setNavigate(<Profile/>);
    }
  };

  return (
    <div className={css.mypageBackground}>
      <div className={css.container}>
        <div className={css.mypageContent}>
          <header className={css.headerSection}>
            <span className={css.mypageFont}>마이미식</span>
          </header>
          <section className={css.mypageHeaderBox}>
            <div className={css.boxLeft}>
              <img
                className={css.profileimg}
               
                className={css.profileimg}
                src={userInfo.profileImg !== '' ? userInfo.profileImg : userInfo.profileImg !== '' ? userInfo.profileImg : myimg}
              
              ></img>
            </div>
            <div className={css.boxBody}>
              <div className={css.boxHeading}>
                <span className={css.nanum}>{userInfo.name}</span>
              </div>
              <div>
                <ul className={css.navBar}>
                  <li className={css.navBarItem}>
                    먹어본 메뉴
                    <span> {userInfo.myOrderCnt}개</span>
                  </li>
                  <li className={css.navBarItem}>
                    미식 포인트
                    <span> {userInfo.point}원</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <nav className={css.myTabs}>
            <ul className={css.navTabs}>
              <li
                name="orderList"
                onClick={mypageChangeTab}
                className={`${css.navTabsList} ${css.bottom}`}
              >
                주문 내역
              </li>
              <li
                name="review"
                onClick={mypageChangeTab}
                className={css.navTabsList}
              >
              >
                미식평
              </li>

              <li
                name="point"
                onClick={mypageChangeTab}
                className={css.navTabsList}}
              >
                포인트
              </li>
              <li
                name="profile"
                onClick={mypageChangeTab}
                className={css.navTabsList}
              >
                내 정보
              </li>
            </ul>
          </nav>
          {navigate}
        </div>
      </div>
    </div>
  );
}

export default Mypage;
