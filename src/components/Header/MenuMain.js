import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function MenuMain() {
  const navigate = useNavigate();
  const [list, setList] = useState([1, 2, 3, 4, 5, 6]);

  return (
    <div>
      <Link to="/category/1">간편 요리</Link>
      <Link to="/category/2">디저트</Link>
      <Link to="/category/3">전통주</Link>
      <Link to="/category/4">육류</Link>
      <Link to="/category/5">베이커리 / 유제품</Link>
      <Link to="/category/6">커피 / 음료</Link>
    </div>
  );
}

export default MenuMain;
