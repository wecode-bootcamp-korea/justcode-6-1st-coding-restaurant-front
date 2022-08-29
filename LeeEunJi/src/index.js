import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/reset.scss';
import './styles/common.scss';
import Router from './pages/Router';
import Login from './pages/Login/Login';
import Mypage from './pages/Mypage/Mypage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
