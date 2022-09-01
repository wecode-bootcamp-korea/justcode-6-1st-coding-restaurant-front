import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Mypage from './Mypage/Mypage';
import Signup from './Signup/Signup';

import Cart from './Cart/Cart';
import Orderlist from './Mypage/Orderlist';
import Review from './Mypage/Review';
import Category from './Category/Category';
import Shop from './Category/Shop';
import AboutUs from './Category/AboutUs';
import Header from '../components/Header/Header';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/orderlist" element={<Orderlist />} />
        <Route path="/review" element={<Review />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/products/:id" element={<Category />} />
        <Route path="/shops" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
