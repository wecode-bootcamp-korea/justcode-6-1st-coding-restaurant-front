import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './Login.module.scss';
import LogoBox from './LogoBox';

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
            window.location.replace('/');
            // navigate('/') 46line 새로고침 오류 발생시 원상복귀
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
              <label htmlFor="loginUserEmail" className={css.string}>
                이메일 *
              </label>
              <input
                id="loginUserEmail"
                type="email"
                name="email"
                value={userEmail}
                placeholder="이메일을 입력해주세요."
                required={true}
                className={css['input-text']}
                onChange={onUserEmailHandle}
              />
            </div>
            <div className={css['form-postbox-password']}>
              <label htmlFor="loginUserPassword" className={css.string}>
                비밀번호 *
              </label>
              <input
                id="loginUserPassword"
                type="password"
                name="password"
                value={userPassword}
                placeholder="비밀번호를 입력해주세요."
                required={true}
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
          <LogoBox />
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
