import React from 'react';
import css from './Header.module.scss';

import Search from './Search';
import Cart from './Cart';
import Login from './Login';
import MenuSub from './MenuSub';
import MenuMain from './MenuMain';

function Header() {
  return (
    <div className={css.container}>
      <div className={css['header-logo-box']}>
        <Search />
        <div className={css.logo}>
          <img src="image/logo.png" alt="logo" />
        </div>
        <div className={css['login-cart-box']}>
          <Login />
          <div className={css.line} />
          <Cart />
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
