import React from 'react';

import css from './Content.Module.scss';

const Content = ({ content }) => {
  return (
    <>
      <div className={css.content}>
        <img className={css.img} src="/image/categoryList/sample.jpg" />
        {/* <img claName={css.img} src={content} /> */}
      </div>
    </>
  );
};

export default Content;
