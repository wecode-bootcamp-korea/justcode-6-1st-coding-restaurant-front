import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailMain from '../../components/Detail/DetailMain';
import DetailSub from '../../components/Detail/DetailSub';

import css from './Detail.module.scss';

const Detail = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const { name, description, content, bundle, review, fixedprice, image } =
    data;

  useEffect(() => {
    fetch(`http://localhost:8000/product/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(res => res.json())
      .then(req => {
        setData(req.data[0]);
      });
  }, []);

  return (
    <div className={css.detail}>
      <div className={css.container}>
        {data.id && (
          <DetailMain
            name={name}
            description={description}
            content={content}
            slideImgs={image}
            reviews={review}
          />
        )}
        {data.id && <DetailSub price={fixedprice} bundles={bundle} />}
      </div>
    </div>
  );
};

export default Detail;
