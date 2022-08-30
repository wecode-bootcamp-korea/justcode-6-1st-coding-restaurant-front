import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Mypage from './Mypage/Mypage';
import Signup from './Signup/Signup';
import Orderlist from './Mypage/Orderlist';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/orderlist" element={<Orderlist />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
