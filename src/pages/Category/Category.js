import React, { useState, useEffect } from 'react';
import css from './Category.module.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CardList from '../../components/Category/CardList';
import Button from '../../components/Category/Button';
import Title from '../../components/Category/Title';

function Category() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  /////////////////////목데이터 사용//////////////////////////
  useEffect(() => {
    fetch(`http://localhost:8000/products?${location.search}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => {
        setData(res.data);
      });
  }, []);

  //////////////////////통신 사용////////////////////////

  // useEffect(() => {
  //   fetch(`http://localhost:8000/products?${location.search}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => setData(res.data));
  // }, [location.search]);

  const handleBtn = page => {
    const query = `category=${data.category}&orderBy=${page}&page=1&pageSize=6`;
    // page=1 << 무한스크롤 적용 후 쿼리 변수로 받도록 수정
    navigate(`/products/?${query}`);
  };
  return (
    <div className={css.container}>
      <header>
        <div className={css['title-menu']}>
          <Title />
        </div>
        <div className={css['select-menu']}>
          <Button handleBtn={handleBtn} />
        </div>
      </header>
      <CardList props={data} />
    </div>
  );
}
export default Category;
