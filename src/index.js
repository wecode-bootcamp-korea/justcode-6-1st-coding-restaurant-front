import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from './pages/Router';
import './styles/reset.scss';
import './styles/common.scss';
import Login from './pages/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
