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
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [slideImgs, setSlideImgs] = useState([]);
  const [contentImg, setContentImg] = useState('');
  const [reviews, setReviews] = useState([]);
  const [price, setPrice] = useState(0);
  const [bundles, setBundles] = useState([]);

  // useEffect(() => {
  //   fetch('/data/detail/detail.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       const {
  //         id,
  //         name,
  //         description,
  //         images,
  //         contentImg,
  //         reviews,
  //         fixedprice,
  //         bundles,
  //       } = data.data[0];
  //       setId(id);
  //       setName(name);
  //       setDescription(description);
  //       setSlideImgs(images);
  //       setContentImg(contentImg);
  //       setReviews(reviews);
  //       setPrice(fixedprice);
  //       setBundles(bundles);
  //     });
  // }, []);

  useEffect('/data/detail/detail.json', {
    headers: params.id,
  })
    .then(res => res.json())
    .then(data => console.log(data));

  return (
    <div className={css.detail}>
      <div className={css.container}>
        <DetailMain
          name={name}
          description={description}
          slideImgs={slideImgs}
          contentImg={contentImg}
          reviews={reviews}
        />
        <DetailSub price={price} bundles={bundles} />
      </div>
    </div>
  );
};

export default Detail;
