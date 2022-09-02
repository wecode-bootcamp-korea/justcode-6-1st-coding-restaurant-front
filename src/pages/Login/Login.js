import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Login.module.scss';

function Login() {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const onUserEmailHandle = e => {
    const userEmailValue = e.target.value;
    setUserEmail(userEmailValue);
  };

  const onUserPasswordHandle = e => {
    const userPasswordValue = e.target.value;
    setUserPassword(userPasswordValue);
  };

  const loginClick = () => {
    if (
      !userEmail.includes('@') ||
      userEmail.split('.').length - 1 < 1 ||
      userEmail.split('.').length - 1 > 2
    ) {
      alert('사용자 이메일이 맞지 않습니다.');
    } else if (userPassword.length < 10) {
      alert('비밀번호는 10자리이상이어야 합니다.');
    } else {
      fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userEmail,
          password: userPassword,
        }),
      })
        .then(response => response.json())
        .then(result => {
          if (result.token) {
            localStorage.setItem('token', result.token);
            alert('로그인에 성공하였습니다.');
            navigate('/main');
          } else {
            alert('이메일과 비밀번호를 찾을 수 없습니다.');
          }
        });
    }
  };

  return (
    <div className={css.login}>
      <div className={css.container}>
        <div className={css.header}>
          <span className={css.title}>로그인하기</span>
        </div>
        <div className={css.divider}></div>
        <div className={css['account-box']}>
          <form
            className={css['form-postbox']}
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <div className={css['form-postbox-id']}>
              <label for="loginUserEmail" className={css.string}>
                이메일 *
              </label>
              <input
                id="loginUserEmail"
                type="email"
                name="email"
                value={userEmail}
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
              <button className={css.btn} type="submit" onClick={loginClick}>
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
            <img alt="facebook" src="./image/signUpLogin/facebook.png" />
            <span>페이스북 계정으로 로그인하기</span>
          </div>
          <div className={css['social-account-naver']}>
            <img alt="naver" src="./image/signUpLogin/naver.png" />
            <span>네이버 계정으로 로그인하기</span>
          </div>
          <div className={css['social-account-kakao']}>
            <img alt="kakao" src="./image/signUpLogin/kakao.png" />
            <span>카카오 계정으로 로그인하기</span>
          </div>
          <div className={css['social-account-apple']}>
            <img alt="apple" src="./image/signUpLogin/apple.png" />
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
