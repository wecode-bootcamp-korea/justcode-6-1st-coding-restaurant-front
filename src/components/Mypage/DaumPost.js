import React, { useState } from 'react';
import DaumPostCode from 'react-daum-postcode';

import css from './DaumPost.module.scss';

const DaumPost = ({ myProfile, setMyProfile }) => {
  const [bgStyle, setbgStyle] = useState('');

  const handleComplete = data => {
    setbgStyle('close');
    console.log(data);

    setMyProfile({
      ...myProfile,
      address: data.address,
      postalCode: data.zonecode,
    });
  };

  return (
    <div
      className={css['post-code-bg']}
      style={{ zIndex: bgStyle == 'close' ? '-1' : '99' }}
    >
      <DaumPostCode
        onComplete={handleComplete}
        className={css['post-code']}
        style={{ width: '440px', height: '465px' }}
      />
    </div>
  );
};
export default DaumPost;
