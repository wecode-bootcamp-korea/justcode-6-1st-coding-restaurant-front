import React from 'react';

import css from './Ask.module.scss';

const Ask = () => {
  return (
    <>
      <div className={css.ask}>
        <div className={css.content}>
          등록된 질문이 없습니다 <br />
        </div>
      </div>
    </>
  );
};

export default Ask;
