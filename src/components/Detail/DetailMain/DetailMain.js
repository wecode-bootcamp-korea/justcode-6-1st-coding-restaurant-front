import { useState } from 'react';
import Content from './Content';
import ReviewList from './ReviewList';
import Delivery from './Delivery';
import Ask from './Ask';
import css from './DetailMain.module.scss';

const DetailMain = ({ name, description, images, reviews }) => {
  const [component, setComponent] = useState(<Content />);

  const clickTab = e => {
    switch (e.target.value) {
      case '메뉴 소개':
        return setComponent(<Content />);
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
        <h1 className={css.name}>[{name}]</h1>
        <div className={css.description}>{description}</div>
        <div className={css.rating}>
          <img
            className={css.star}
            alt="rating"
            src="https://cdn-icons-png.flaticon.com/128/956/956100.png"
          />
          <img
            className={css.star}
            alt="rating"
            src="https://cdn-icons-png.flaticon.com/128/956/956100.png"
          />
          <img
            className={css.star}
            alt="rating"
            src="https://cdn-icons-png.flaticon.com/128/956/956100.png"
          />
          <img
            className={css.star}
            alt="rating"
            src="https://cdn-icons-png.flaticon.com/128/956/956100.png"
          />
          <img
            className={css.star}
            alt="rating"
            src="https://cdn-icons-png.flaticon.com/128/956/956100.png"
          />
        </div>
      </div>

      <div className={css['img-container']}>
        <img className={css['main-img']} src={images[0].image} />
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
