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
  // const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [slideImgs, setSlideImgs] = useState([]);
  const [content, setContent] = useState('');
  const [reviews, setReviews] = useState([]);
  const [price, setPrice] = useState(0);
  const [bundles, setBundles] = useState([]);

  //목데이터 사용해 fetch
  useEffect(() => {
    fetch('/data/detail/detail.json')
      .then(res => res.json())
      .then(data => {
        const {
          name,
          description,
          fixedprice,
          content,
          bundles,
          images,
          reviews,
        } = data;
        setName(name);
        setDescription(description);
        setSlideImgs(images);
        setContent(content);
        setReviews(reviews);
        setPrice(fixedprice);
        setBundles(bundles);
      });
  }, []);

  // <<<<<< 임시 api >>>>>>
  //
  // useEffect(
  //   fetch('백앤드서버', {
  //     headers: params.id,
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       const {
  //         name,
  //         description,
  //         fixedprice,
  //         content,
  //         bundles,
  //         images,
  //         reviews,
  //       } = data;
  //       setName(name);
  //       setDescription(description);
  //       setSlideImgs(images);
  //       setContent(content);
  //       setReviews(reviews);
  //       setFixedPrice(fixedprice);
  //       setBundles(bundles);
  //     console.log(data.id);
  //     }),
  //   []
  // );

  return (
    <div className={css.detail}>
      <div className={css.container}>
        {name && description && slideImgs && content && reviews && (
          <DetailMain
            name={name}
            description={description}
            slideImgs={slideImgs}
            content={content}
            reviews={reviews}
          />
        )}
        {price && bundles && <DetailSub price={price} bundles={bundles} />}
      </div>
    </div>
  );
};

export default Detail;
