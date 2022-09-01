import React, { useState, useEffect } from 'react';
import css from './Category.module.scss';
import { useParams } from 'react-router-dom';
import PhotoList from '../../components/PhotoList/PhotoList';

function Category() {
  const params = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/data/categorylist.json')
      .then(res => res.json())
      .then(res => setData(res));
  }, []);
  console.log(data.data);

  console.log(params.id);
  return (
    <div className={css.container}>
      <header>
        <div className={css['title-menu']}>
          <h1>인기 메뉴</h1>
          <span>미래식당의 인기메뉴</span>
        </div>
        <div className={css['select-menu']}>
          <span>주문순</span>
          <span>조회순</span>
          <span>가격순</span>
        </div>
      </header>
      <PhotoList />
    </div>
  );
}
export default Category;
