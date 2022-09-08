import React from 'react';
import { useNavigate } from 'react-router-dom';

import css from './Header.module.scss';
import Search from './Search';
import Cart from './Cart';
import Login from './Login';
import MenuSub from './MenuSub';
import MenuMain from './MenuMain';

function Header({ cartCount }) {
  const navigate = useNavigate();
  return (
    <div className={css.container}>
      <div className={css['header-logo-box']}>
        <Search />
        <div className={css.logo} onClick={() => navigate('/')}>
          <img src="/image/header/logo.png" alt="logo" />
        </div>
        <div className={css['login-cart-box']}>
          <Login />
          <div className={css.line} />
          <Cart cartCount={cartCount} />
        </div>
      </div>

      <div className={css['header-menu-box']}>
        <MenuMain />
        <div className={css.line} />
        <MenuSub />
      </div>
    </div>
  );
}

export default Header;
