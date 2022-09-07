import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function MenuMain() {
  // const navigate = useNavigate();

  return (
    <div>
      {/* 카드갯수 나누는 페이지네이션 안 하기로 했기 때문에 한 번에 이미지 들어오는 거 확인하면 page 쿼리 지울 것 */}
      <Link to="/products?category=mealKit&orderBy=viewCount&page=1&pageSize=6">
        간편 요리
      </Link>
      <Link to="/products?category=dessert&orderBy=viewCount&page=1&pageSize=6">
        디저트
      </Link>
      <Link to="/products?category=liquor&orderBy=viewCount&page=1&pageSize=6">
        전통주
      </Link>
      <Link to="/products?category=meat&orderBy=viewCount&page=1&pageSize=6">
        육류
      </Link>
      <Link to="/products?category=bakery&orderBy=viewCount&page=1&pageSize=6">
        베이커리 / 유제품
      </Link>
      <Link to="/products?category=beverage&orderBy=viewCount&page=1&pageSize=6">
        커피 / 음료
      </Link>
    </div>
  );
}

export default MenuMain;
