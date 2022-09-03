import React, { useEffect, useState } from 'react';

import DetailMain from '../../components/Detail/DetailMain';
import DetailSub from '../../components/Detail/DetailSub';

import css from './Detail.module.scss';

// 1. 상세페이지 불러오기 API : 제목, 부제목, 상세정보, 리뷰,
//   번들, 가격, 배송비, 도착일
// 2. 장바구니 담기 API

const Detail = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [slideImg, setSlideImg] = useState([]);
  const [contentImg, setContentImg] = useState('');
  const [reviews, setReviews] = useState([]);
  const [price, setPrice] = useState(0);
  const [bundles, setBundles] = useState([]);

  useEffect(() => {
    fetch('/data/detail/detail.json')
      .then(res => res.json())
      .then(data => {
        const {
          name,
          description,
          slideImg,
          contentImg,
          reviews,
          price,
          bundles,
        } = data;
        setName(name);
        setDescription(description);
        setSlideImg(slideImg);
        setContentImg(contentImg);
        setReviews(reviews);
        setPrice(price);
        setBundles(bundles);
      });
  }, []);

  return (
    <div className={css.detail}>
      <div className={css.container}>
        <DetailMain
          name={name}
          description={description}
          slideImg={slideImg}
          contentImg={contentImg}
          reviews={reviews}
        />
        <DetailSub price={price} bundles={bundles} />
      </div>
    </div>
  );
};

export default Detail;
