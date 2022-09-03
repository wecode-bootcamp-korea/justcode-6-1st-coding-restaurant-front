import React, { useState, useEffect } from 'react';

import css from './MainSlide.module.scss';

function MainSlide() {
  const [imgData, setImgData] = useState([]);
  const [imgLocation, setImgLocation] = useState(0);
  const [slideIdx, setSlideIdx] = useState(0);
  const slideLen = imgData.length; //5

  const rightBtnClick = () => {
    if (slideIdx < slideLen - 1) {
      setImgLocation(imgLocation + 1);
      setSlideIdx(slideIdx + 1);
    } else {
      setImgLocation(slideLen - 1);
      setSlideIdx(slideIdx);
    }
  };

  const leftBtnClick = () => {
    if (slideIdx >= 1) {
      setImgLocation(imgLocation - 1);
      setSlideIdx(slideIdx - 1);
    } else {
      console.log('slideIdx :', slideIdx);
      setImgLocation(0);
      setSlideIdx(0);
    }
  };

  useEffect(() => {
    fetch('/data/main/mainSlide.json')
      .then(res => res.json())
      .then(data => {
        setImgData(data.items);
      });
  }, []);

  return (
    <div className={css.MainSlide}>
      <div className={css['img-slide']}>
        <div
          className={css['img-slide-box']}
          style={{
            transform: `translate3d(${imgLocation * -100 + 'vw'},0px,0px)`,
            transition: '450ms',
          }}
        >
          {imgData.map(item => {
            return (
              <div key={item.id}>
                <img src={item.url} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={css['slide-content']}>
        <div
          className={css['description-box']}
          style={{
            transform: `translate3d(${imgLocation * -100 + 'vw'},0px,0px)`,
            transition: '450ms',
            width: `${slideLen * 100}vw`,
          }}
        >
          {imgData.map(item => {
            return (
              <div className={css.description} key={item.id}>
                <div>{item.name}</div>
                <div className={css.detail}>{item.description}</div>
              </div>
            );
          })}
        </div>
        <button
          onClick={leftBtnClick}
          className={`
            ${css['button']}
          ${css['button-left']}`}
        />
        <button
          onClick={rightBtnClick}
          className={`
            ${css['button']}
          ${css['button-right']}`}
        />
        <div className={css['slide-idx']}>
          {slideIdx + 1} / {slideLen}
        </div>
      </div>
    </div>
  );
}

export default MainSlide;
