import React, { useState } from 'react';

import css from './DetailMain.module.scss';

import Content from './Content';
import ReviewList from './ReviewList';
import Delivery from './Delivery';
import Ask from './Ask';

const DetailMain = ({ name, description, slideImgs, content, reviews }) => {
  const [component, setComponent] = useState(<Content />);

  const clickTab = e => {
    switch (e.target.value) {
      case '메뉴 소개':
        console.log('e.target :', e.target.style);
        return setComponent(<Content content={content} />);

      case '미식평':
        return setComponent(<ReviewList reviews={reviews} />);

      case '배송 정보':
        return setComponent(<Delivery />);

      case '질문과 답변':
        return setComponent(<Ask />);
    }
  };

  return (
    <div className={css['detail-main']}>
      <div className={css.title}>
        <h1 className={css.name}>{name}</h1>
        <div className={css.description}>{description}</div>
      </div>

      <div className={css['img-container']}>
        <img className={css['main-img']} src={slideImgs[0].img} />
      </div>
      <div>
        <div className={css['content-tab']}>
          <button
            className={css['button']}
            onClick={clickTab}
            value={'메뉴 소개'}
          >
            메뉴 소개
          </button>
          <button className={css['button']} onClick={clickTab} value={'미식평'}>
            미식평
          </button>
          <button
            className={css['button']}
            onClick={clickTab}
            value={'배송 정보'}
          >
            배송 정보
          </button>
          <button
            className={css['button']}
            onClick={clickTab}
            value={'질문과 답변'}
          >
            질문과 답변
          </button>
        </div>

        <div className={css['content-box']}>{component}</div>
      </div>
    </div>
  );
};

export default DetailMain;
