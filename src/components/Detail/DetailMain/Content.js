import React from 'react';

import css from './Content.module.scss';

const Content = ({ content }) => {
  return (
    <>
      <div className={css.content}>
        <div className={css['content-box']}>
          안녕하세요 미래식당입니다 :D <br />
          <br />
          소중한 사람에게 선물하셔서 기분좋은 추석 보내세요!
          <br />
          <br />
          배송문의는 justMiRea@coding_restaurant.com / 카카오톡 채널 @justMiRea
        </div>
      </div>
    </>
  );
};

export default Content;
