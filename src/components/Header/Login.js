import React, { useState } from 'react';
import css from './Login.module.scss';
import { Link, useNavigate } from 'react-router-dom';
function Login({ setCartCount }) {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.length);
  console.log();
  const logout = ({ setCartCount }) => {
    localStorage.removeItem('token');
    token ? setToken(false) : setToken(true);
    navigate('/');
    window.location.replace('/');
    alert('로그아웃 되었습니다.');
    setCartCount(0);
  };

  return (
    <div className={css['login-box']}>
      <span>고객센터</span>
      {localStorage.getItem('token') !== null ? (
        <>
          <Link to="/mypage">마이페이지</Link>
          <span onClick={logout}>로그아웃</span>
        </>
      ) : (
        <>
          <Link to="/login">로그인</Link>
          <Link to="/signup">회원가입</Link>
        </>
      )}
    </div>
  );
}
export default Login;
