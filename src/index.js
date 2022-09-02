import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import Router from './pages/Router';

import './styles/reset.scss';
import './styles/common.scss';
import Login from './pages/Login/Login';
import Mypage from './pages/Mypage/Mypage';
import Orderlist from '../src/components/Mypage/Orderlist';
import Orderdetail from '../src/components/Mypage/Orderdetail';
import Point from '../src/components/Mypage/Point';
import Profile from '../src/components/Mypage/Profile';
import Review from '../src/components/Mypage/Review';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
