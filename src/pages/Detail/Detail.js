import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailMain from '../../components/Detail/DetailMain/DetailMain';
import DetailSub from '../../components/Detail/DetailSub';

import css from './Detail.module.scss';

const Detail = ({ cartCount, setCartCount }) => {
  const params = useParams();
  const [data, setData] = useState({});
  const { name, description, content, bundles, reviews, fixedprice, images } =
    data;

  useEffect(() => {
    // fetch(`http://localhost:8000/product/${params.id}`, {
    fetch('/data/detail/detail.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(req => {
        setData(req.data);
      });
  }, []);

  return (
    <>
      <div className={css.detail}>
        <div className={css.container}>
          <div className={css['main-container']}>
            {data.id && (
              <DetailMain
                name={name}
                description={description}
                content={content}
                images={images}
                reviews={reviews}
              />
            )}
          </div>
          <div className={css['sub-container']}>
            {data.id && (
              <DetailSub
                price={fixedprice}
                bundles={bundles}
                setCartCount={setCartCount}
                cartCount={cartCount}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
