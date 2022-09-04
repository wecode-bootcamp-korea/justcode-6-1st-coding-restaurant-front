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
  const { name, description, content, bundles, reviews, fixedprice, images } =
    data;

  // <<<<<< 임시 api >>>>>>

  // useEffect(
  //   fetch('백앤드서버', {
  //     headers: params.id,
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       setData(data);
  //     }),
  //   []
  // );

  //목데이터 사용해 fetch
  useEffect(() => {
    fetch('/data/detail/detail.json')
      .then(res => res.json())
      .then(data => {
        setData(data);
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
            slideImgs={images}
            reviews={reviews}
          />
        )}
        {data.id && <DetailSub price={fixedprice} bundles={bundles} />}
      </div>
    </div>
  );
};

export default Detail;
