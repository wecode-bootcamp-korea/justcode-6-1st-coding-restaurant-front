import React from 'react';
import Header from '../../components/Header/Header';

import css from './Home.module.scss';

function Home() {
  return (
    <div className={css.container}>
      <Header />
    </div>
  );
}

export default Home;
