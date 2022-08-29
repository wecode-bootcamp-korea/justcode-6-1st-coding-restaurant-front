import React from 'react';
import Mypagescss from './Mypage.scss';
import myimg from './img/myimg.png';

const onClickHandler = e => {
  console.log(e.target.classList.contains('bottom'));

  const navTabsList = document.getElementsByClassName('nav-tabs-list');
  console.log(navTabsList);
  // 클릭 이벤트가 발생했을 시 메뉴 리스트들을 가져옴
  // 순환을 하면서 bottom 클래스가 있는지 확인
  for (let i = 0; i < navTabsList.length; i++) {
    console.log(navTabsList[i]);
    if (navTabsList[i].classList.contains('bottom')) {
      navTabsList[i].classList.remove('bottom');
    }
  }

  e.target.classList.add('bottom');

  // 만약에 있다면 그 클래스를 지워야함
  // 그리고 클릭한 타겟 엘레멘트에 bottom 클래스를 넣어줌
};

function Mypage() {
  return (
    <div className="container">
      <div className="mypageContent">
        <header className="headerSection">
          <span className="mypageFont">마이미식</span>
        </header>
        <section className="mypageHeaderBox">
          <div className="box-left">
            <img src={myimg}></img>
          </div>
          <div className="box-body">
            <div className="box-heading">
              <span className="nanum">이은지</span>
            </div>
            <ul className="nav-bar">
              <li className="nav-bar-item">
                먹어본 메뉴
                <span> 0개</span>
              </li>
              <li className="nav-bar-item">
                미식 포인트
                <span> 0원</span>
              </li>
            </ul>
          </div>
        </section>

        <nav className="my-tabs">
          <ul className="nav-tabs">
            <li
              onClick={onClickHandler}
              className="nav-tabs-list nav-hover bottom"
            >
              주문 내역
            </li>
            <li onClick={onClickHandler} className="nav-tabs-list nav-hover">
              미식평
            </li>
            <li onClick={onClickHandler} className="nav-tabs-list nav-hover">
              질문과 답변
            </li>
            <li onClick={onClickHandler} className="nav-tabs-list nav-hover">
              포인트
            </li>
            <li onClick={onClickHandler} className="nav-tabs-list nav-hover">
              내 정보
            </li>
          </ul>
        </nav>

        <div className="section-header">
          <h3 className="section-title">주문 내역</h3>
        </div>
        <div className="row-list">
          <p>조회 가능한 주문 내역이 없습니다.</p>
        </div>
      </div>
    </div>
  );
}

export default Mypage;
