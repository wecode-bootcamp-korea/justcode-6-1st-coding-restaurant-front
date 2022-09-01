import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Login.module.scss';

function Login() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const onUserEmailHandle = e => {
    setUserId(e.target.value);
  };

  const onUserPasswordHandle = e => {
    setUserPassword(e.target.value);
  };

  return (
    <div className={css.login}>
      <div className={css.container}>
        <div className={css.header}>
          <span className={css.title}>로그인하기</span>
        </div>
        <div className={css.divider}></div>
        <div className={css['account-box']}>
          <form className={css['form-postbox']}>
            <div className={css['form-postbox-id']}>
              <label for="loginUserEmail" className={css.string}>
                이메일 *
              </label>
              <input
                id="loginUserEmail"
                type="email"
                name="username"
                value={userId}
                placeholder="이메일을 입력해주세요."
                required="true"
                className={css['input-text']}
                onChange={onUserEmailHandle}
              />
            </div>
            <div className={css['form-postbox-password']}>
              <label for="loginUserPassword" className={css.string}>
                비밀번호 *
              </label>
              <input
                id="loginUserPassword"
                type="password"
                name="password"
                value={userPassword}
                placeholder="비밀번호를 입력해주세요."
                required="true"
                className={css['input-text']}
                onChange={onUserPasswordHandle}
              />
            </div>
            <div className={css['login-btn']}>
              <button className={css.btn} type="submit">
                로그인하기
              </button>
            </div>
          </form>
        </div>
        <div className={css.divideror}>
          <div className={css['divideror-line']}></div>
          <span className={css.text}>또는</span>
          <div className={css['divideror-line']}></div>
        </div>
        <div className={css['social-account']}>
          <div className={css['social-account-facebook']}>
            <img alt="facebook" src="./images/facebook.png" width="50px" />
            <span>페이스북 계정으로 로그인하기</span>
          </div>
          <div className={css['social-account-naver']}>
            <img alt="naver" src="./images/naver.png" width="50px" />
            <span>네이버 계정으로 로그인하기</span>
          </div>
          <div className={css['social-account-kakao']}>
            <img alt="kakao" src="./images/kakao.png" width="50px" />
            <span>카카오 계정으로 로그인하기</span>
          </div>
          <div className={css['social-account-apple']}>
            <img alt="apple" src="./images/apple.png" width="50px" />
            <span>Apple로 로그인</span>
          </div>
        </div>
        <div className={css['account-smallbox']}>
          아직 미래식당 회원이 아니세요?
          <a
            className={css['text-link']}
            onClick={() => {
              navigate('/signup');
            }}
          >
            회원가입하기
          </a>
        </div>
      </div>
    </div>
  );
}

export default Login;
