import React, { useState, useEffect, Children } from 'react';
import { Link } from 'react-router-dom';
import css from './SubSlide.module.scss';
function SubSlide(props, type) {
  console.log(type);
  const [imgData, setImgData] = useState([]);
  const [imgLocation, setImgLocation] = useState(0);

  /////////////목데이터////////////

  useEffect(() => {
    fetch('/data/main/subSlide.json')
      .then(res => res.json())
      .then(res => setImgData(res.data));
  }, []);

  ///////서버통신///////////
  // useEffect(() => {
  //   fetch();
  // });

  const leftBtn = () => {
    if (imgLocation > 0) {
      setImgLocation(imgLocation - 1);
    }
  };

  const rightBtn = () => {
    if (imgLocation < 1) {
      setImgLocation(imgLocation + 1);
    }
  };
  return (
    <div className={css.subSlide}>
      <div className={css.title}>
        <div>{props.children}</div>
        <div className={css.more}>
          <Link to="/products?category=mealKit&orderBy=viewCount&page=1&pageSize=6">
            더보기
          </Link>
          <span>&gt;</span>
        </div>
      </div>
      <div className={css['img-slide']}>
        <div
          className={css.cardlist}
          style={{
            transform: `translate3d(${imgLocation * -80 + 'vw'},0px,0px)`,
            transition: '450ms',
          }}
        >
          {imgData.map(data => {
            return (
              <div key={data.id} className={css.card}>
                <img src={data['image_thumbnail']} />
                <div className={css.content}>
                  <h2>{data.productor}</h2>
                  <span>{data.name}</span>
                  <span>{data.fixedPrice}</span>
                  <div className={css.review}>
                    <span>
                      {`주문수 : ${data['order_count'].toLocaleString()}`}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={css.button}>
        <button onClick={leftBtn}>&lt;</button>
        <button onClick={rightBtn}>&gt;</button>
      </div>
    </div>
  );
}

export default SubSlide;
