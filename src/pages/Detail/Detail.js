import React from 'react';

import css from './Detail.module.scss';

const Detail = () => {
  return (
    <div className={css.detail}>
      <div className={css['detail-container']}>
        <div className={css.container}>
          <div className={css.main}></div>
          <div className={css.sub}></div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
