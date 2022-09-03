import React, { useEffect } from 'react';

import css from './Home.module.scss';

import MainSlide from '../../components/MainSlide/MainSlide';

function Home() {
  return (
    <div className={css.container}>
      <MainSlide />
    </div>
  );
}

export default Home;
