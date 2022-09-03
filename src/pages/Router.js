import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Detail from './Detail/Detail';
import Mypage from './Mypage/Mypage';
import Orderlist from '../components/Mypage/Orderlist';
import Review from '../components/Mypage/Review';
import ReviewModal from '../components/Mypage/ReviewModal';
import ReviewModalRevise from '../components/Mypage/ReviewModalRevise';
import Point from '../components/Mypage/Point';
import Profile from '../components/Mypage/Profile';

import Cart from './Cart/Cart';
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
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/orderlist" element={<Orderlist />} />
        <Route path="/review" element={<Review />} />
        <Route path="/reviewmodal" element={<ReviewModal />} />
        <Route path="/reviewModalRevise" element={<ReviewModalRevise />} />
        <Route path="/point" element={<Point />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products" element={<Category />} />
        <Route path="/shops" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
