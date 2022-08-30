import React from 'react';
import { useNavigate } from 'react-router-dom';

function MenuMain() {
  const navigate = useNavigate();

  return (
    <div>
      <span onClick={() => navigate('/category/1')}>간편 요리</span>
      <span>디저트</span>
      <span>전통주</span>
      <span>육류</span>
      <span>베이커리 / 유제품</span>
      <span>커피 / 음료</span>
    </div>
  );
}

export default MenuMain;
