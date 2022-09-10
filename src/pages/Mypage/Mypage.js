import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import css from './Mypage.module.scss';
import Orderlist from '../../components/Mypage/Orderlist';
import Point from '../../components/Mypage/Point';
import Review from '../../components/Mypage/Review';
import Profile from '../../components/Mypage/Profile';
import { useState, useEffect } from 'react';

function Mypage() {
  const [navigate, setNavigate] = useState(<Orderlist />);
  const [userInfo, setUserInfo] = useState({
    name: '샘플',
    profileImg: 'https://cdn-icons-png.flaticon.com/128/847/847969.png',
    point: 0,
  });

  const [name, setName] = useState('');

  ////////////마이메이지 마이미식 get api/////////
  useEffect(() => {
    fetch('/data/myPage/myPage.json', {
      // fetch('http://localhost:8000/my', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(req => {
        {
          let pointArr = req.data.point;
          let totalPoint = 0;
          pointArr.forEach(point => {
            totalPoint = totalPoint + point.point;
          });
          setUserInfo({
            ...userInfo,
            name: req.data.name,
            profileImg: req.data.profilePicture,
            point: totalPoint,
          });
        }
      });
  }, []);
  //////////////////

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
      case 'profile':
        return setNavigate(<Profile />);
    }
  };

  return (
    { name } && (
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
                  src={
                    userInfo.profileImg !== ''
                      ? userInfo.profileImg
                      : `${process.env.PUBLIC_URL}/image/myPage/profile.jpg`
                  }
                ></img>
              </div>
              <div className={css.boxBody}>
                <div className={css.boxHeading}>
                  <span className={css.nanum}>{userInfo.name}</span>
                </div>
                <div>
                  <ul className={css.navBar}>
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
                  미식평
                </li>

                <li
                  name="point"
                  onClick={mypageChangeTab}
                  className={css.navTabsList}
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
    )
  );
}

export default Mypage;
