import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import css from './SubSlide.module.scss';
function SubSlide(props) {
  const [imgData, setImgData] = useState([]);
  const [imgLocation, setImgLocation] = useState(0);
  const navigate = useNavigate();
  /////////////목데이터////////////

  useEffect(() => {
    fetch(`/data/main/${props.query}.json`)
      .then(res => res.json())
      .then(res => setImgData(res.data));
  }, []);

  ///////서버통신///////////
  // useEffect(() => {
  //   fetch(`http://localhost:8000/products?${props.query}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(res => {
  //       setImgData(res.data);
  //       // console.log('민우님 호출');
  //     });
  // }, []);

  const leftBtn = () => {
    if (imgLocation > 0) {
      setImgLocation(imgLocation - 2);
    }
  };

  const rightBtn = () => {
    if (imgLocation < 1) {
      setImgLocation(imgLocation + 2);
    }
  };
  return (
    <div className={css.subSlide}>
      <div className={css.title}>
        <div>{props.children}</div>
        <div className={css.more}>
          {props.query === 'category=mealKit' && (
            <Link to="/products?category=mealKit&orderBy=viewCount&page=1&pageSize=6">
              더보기
              <span>&gt;</span>
            </Link>
          )}
        </div>
      </div>
      <div className={css['img-slide']}>
        <div
          className={css.cardlist}
          style={{
            transform: `translate3d(${imgLocation * -50 + '%'},0px,0px)`,
            transition: '450ms',
          }}
        >
          {imgData.map(data => {
            return (
              <div
                key={data.id}
                className={css.card}
                onClick={() => navigate(`/product/${data.id}`)}
              >
                <img src={data['image_thumbnail']} />
                <div className={css.content}>
                  <h2>{data.productor}</h2>
                  <span>{data.name}</span>
                  <span>{`${data.fixedPrice.toLocaleString()} 원`}</span>
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
