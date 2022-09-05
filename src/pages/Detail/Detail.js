import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailMain from '../../components/Detail/DetailMain';
import DetailSub from '../../components/Detail/DetailSub';

import css from './Detail.module.scss';

const Detail = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const { name, description, content, bundles, reviews, fixedprice, images } =
    data;

  // useEffect(() => {
  //   fetch(`http://localhost:8000/product/${params.id}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(req => {
  //       setData(req.data);
  //     });
  // }, []);

  useEffect(() => {
    fetch('/data/detail/detail.json')
      .then(res => res.json())
      .then(req => {
        setData(req.data);
      });
  }, []);

  return (
    <div className={css.detail}>
      <div className={css.container}>
        <div className={css['main-container']}>
          {data.id && (
            <DetailMain
              name={name}
              description={description}
              content={content}
              slideImgs={images}
              reviews={reviews}
            />
          )}
        </div>
        <div className={css['sub-container']}>
          {data.id && <DetailSub price={fixedprice} bundles={bundles} />}
        </div>
      </div>
    </div>
  );
};

export default Detail;
