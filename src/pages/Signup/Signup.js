import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import css from './Signup.module.scss';

function Signup() {
  const navigate = useNavigate('/login');

  const [emailSignUp, setEmailSignUp] = useState(false);
  const [gender, setGender] = useState('');

  const emailSignUpClick = e => {
    setEmailSignUp(true);
  };

  const genderClick = e => {
    setGender(e.target.value);
  };

  return (
    <>
      <nav className={css.nav}>nav바</nav>
      <div className={css.container}>
        <div className={css.header}>
          <span className={css.title}>회원 가입하기</span>
          <p>
            국내 최고 음식 브랜드, 다양한 메뉴를 만나보세요! <br />
            미래식당과 함께 풍요로운 미식 생활을 누려보세요
          </p>
        </div>
        <div className={css.divider}></div>
        <div className={css['social-account']}>
          <div className={css['social-account-facebook']}>
            <img alt="facebook" src="./images/facebook.png" width="50px" />
            <span>페이스북 계정으로 가입하기</span>
          </div>
          <div className={css['social-account-naver']}>
            <img alt="naver" src="./images/naver.png" width="50px" />
            <span>네이버 계정으로 가입하기</span>
          </div>
          <div className={css['social-account-kakao']}>
            <img alt="kakao" src="./images/kakao.png" width="50px" />
            <span>카카오 계정으로 가입하기</span>
          </div>
          <div className={css['social-account-apple']}>
            <img alt="apple" src="./images/apple.png" width="50px" />
            <span>Apple로 로그인</span>
          </div>
        </div>
        <div className={css.divideror}>
          <div className={css['divideror-left']}></div>
          <span className={css.text}>또는</span>
          <div className={css['divideror-right']}></div>
        </div>
        <div className={css['account-type-box']}>
          <a className={css.btn} onClick={emailSignUpClick}>
            이메일로 가입하기
          </a>
        </div>
        {emailSignUp && (
          <div className={css['member-by-email']}>
            <form className={css['account-form-body']} method="POST">
              <div className={css['user-email']}>
                <label for="userId" className={css.string}>
                  아이디(이메일)*
                </label>
                <input
                  id="userId"
                  type="email"
                  name="userId"
                  placeholder="이메일을 입력해주세요."
                  required="true"
                  className={css['input-text']}
                />
              </div>
              <div className={css['user-password']}>
                <label for="userPassword" className={css.string}>
                  비밀번호*
                </label>
                <input
                  id="userPassword"
                  type="password"
                  name="userPassword"
                  placeholder="비밀번호를 입력해주세요.(6자리 이상)"
                  required="true"
                  className={css['input-text']}
                />
              </div>
              <div className={css['user-repassword']}>
                <label for="userRePassword" className={css.string}>
                  비밀번호 재입력*
                </label>
                <input
                  id="userRePassword"
                  type="password"
                  name="userRePassword"
                  placeholder="비밀번호를 다시 한 번 입력해주세요."
                  required="true"
                  className={css['input-text']}
                />
              </div>
              <div className={css['user-name']}>
                <label for="userName" className={css.string}>
                  이름*
                </label>
                <input
                  id="userName"
                  type="text"
                  name="name"
                  placeholder="이름을 입력해주세요."
                  required="true"
                  className={css['input-text']}
                />
              </div>
              <div className={css['user-phonenumber']}>
                <label for="userPhone" className={css.string}>
                  휴대폰번호*
                </label>
                <input
                  id="userPhone"
                  type="text"
                  name="phone"
                  placeholder="예 : 01012345678"
                  required="true"
                  className={css['input-text']}
                />
              </div>
              <div className={css['user-birthday']}>
                <label for="userBirthday" className={css.string}>
                  생년월일*
                </label>
                <input
                  id="userBirthday"
                  type="text"
                  name="birthday"
                  placeholder="예 : 19840707"
                  required="true"
                  className={css['input-text']}
                />
              </div>
              <div className={css['user-gender']}>
                <label className={css.string}>성별*</label>
                <div className={css['gender-box']}>
                  <button
                    className={css.female}
                    value="여"
                    onClick={genderClick}
                  >
                    여
                  </button>
                  <button className={css.male} value="남" onClick={genderClick}>
                    남
                  </button>
                </div>
              </div>
              <div className={css['form-actions']}>
                <span className={css['account-form-actions-sidetext']}>
                  <a
                    className={css['text-link']}
                    href="/meesing/tos"
                    target="_blank"
                  >
                    이용약관
                  </a>
                  &nbsp; 및 &nbsp;
                  <a
                    className={css['text-link']}
                    href="/meesing/privacy"
                    target="_blank"
                  >
                    개인정보보호
                  </a>
                  <br />
                  내용을 확인 하였으며, 동의합니다.
                </span>
                <input className={css.btn} type="submit" value="회원가입하기" />
              </div>
            </form>
          </div>
        )}

        <div className={css['account-postbox']}>
          이미 미래식당 회원이신가요?
          <a className={css['text-link']} onClick={navigate}>
            로그인하기
          </a>
        </div>
      </div>
    </>
  );
}

export default Signup;
