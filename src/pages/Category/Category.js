import React, { useState } from 'react';
import css from './Category.module.scss';
import { useParams } from 'react-router-dom';
import PhotoList from '../../components/PhotoList/PhotoList';

function Category() {
  const params = useParams();
  const [id, setId] = useState(params.id);
  console.log(id);
  return (
    <div className={css.container}>
      <header>
        <div>
          <h1>인기 메뉴</h1>
          <span>미래식당의 인기메뉴</span>
        </div>
        <div>
          <span>인기</span>
          <span>신메뉴</span>
          <span>별점순</span>
          <span>추천순</span>
        </div>
      </header>
      <div>
        <PhotoList />
      </div>
    </div>
  );
}
export default Category;
