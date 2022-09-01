import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/reset.scss';
import './styles/common.scss';
import Login from './pages/Login/Login';
import Mypage from './pages/Mypage/Mypage';
import Orderlist from './pages/Mypage/Orderlist';
import Orderdetail from './pages/Mypage/Orderdetail';
import Point from './pages/Mypage/Point';
import Profile from './pages/Mypage/Profile';
import Review from './pages/Mypage/Review';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
