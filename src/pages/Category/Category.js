import React, { useState, useEffect } from 'react';
import css from './Category.module.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import CardList from '../../components/Category/CardList';
import Button from '../../components/Category/Button';
import Title from '../../components/Category/Title';

function Category() {
  const [data, setData] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  useEffect(() => {
    fetch(`http://localhost:8000/products?${location.search}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(res => setData(res.data));
  }, [location.search]);

  const handleBtn = () => {};

  return (
    <div className={css.container}>
      <header>
        <div className={css['title-menu']}>
          <Title />
        </div>
        <div className={css['select-menu']}>
          <Button />
        </div>
      </header>
      <CardList />
    </div>
  );
}
export default Category;
