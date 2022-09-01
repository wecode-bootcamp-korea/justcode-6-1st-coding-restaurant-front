import React, { useState, useEffect } from 'react';

import css from './MainSlide.module.scss';

// 1. 슬라이드 이미지 넣기ㅇ
// 2. 버튼 구현ㅇ
// 3. 버튼 누르면 오른쪽 왼쪽 이미지 위치 바뀜
// 4. 이미지 부드럽게 바뀌기
// 5. 이미지 바뀌면 우측아래 숫자 바뀌게

function MainSlide() {
  const [imgData, setImgData] = useState([]);

  useEffect(() => {
    fetch('/data/mainSlide.json')
      .then(res => res.json())
      .then(data => {
        setImgData(data.items);
      });
  }, []);

  return (
    <div className={css.MainSlide}>
      <div className={css['img-slide']}>
        {imgData.map(item => {
          return (
            <div key={item.id}>
              <img src={item.url} />
            </div>
          );
        })}
      </div>
      <div className={css['slide-content']}>
        <button
          className={`
            ${css['button']}
          ${css['button-left']}`}
        />
        <div className={css.description}>
          상품이름 <br />
          설명
        </div>
        <button className={css['button']} />
      </div>
    </div>
  );
}

export default MainSlide;
