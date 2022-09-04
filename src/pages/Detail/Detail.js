import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import DetailMain from '../../components/Detail/DetailMain';
import DetailSub from '../../components/Detail/DetailSub';

import css from './Detail.module.scss';

// 1. 상세페이지 불러오기 API : 제목, 부제목, 상세정보, 리뷰,
//   번들, 가격, 배송비, 도착일
// 2. 장바구니 담기 API

const Detail = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const { name, description, content, bundle, review, fixedprice, image } =
    data;

  // <<<<<< 임시 api >>>>>>

  useEffect(
    fetch('http://localhost:8000/product/:id', {
      headers: params.id,
    })
      .then(res => res.json())
      .then(req => {
        setData(req.data[0]);

        console.log(req);
      }),
    []
  );

  //목데이터 사용해 fetch
  // useEffect(() => {
  //   fetch('/data/detail/detail.json')
  //     .then(res => res.json())
  //     .then(req => {
  //       setData(req.data[0]);
  //       console.log(req.data[0]);
  //     });
  // }, []);

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
