import React from 'react';
import { useNavigate } from 'react-router-dom';

import css from './Footer.module.scss';

function Footer() {
  const navigate = useNavigate();

  return (
    <div className={css.container}>
      <div className={css['content-info-box']}>
        <div className={css['contact-info']}>
          <h3 className={css['logo-footer']}>미래식당</h3>
          <p>
            <strong>
              <a target="_blank">문의/상담하기</a>
            </strong>
            &nbsp; | 카카오톡 상담 : &nbsp;
            <strong>
              <a target="_blank">
                @<span className={css['nanum-myeongjo']}>미래식당</span>
              </a>
            </strong>
            <br />
            <small>
              상담 운영 시간 : 오전 10시 ~ 오후 17시 (주말, 공휴일 제외)
            </small>
            <br />
          </p>
        </div>
        <div className={css['link-info']}>
          <div className={css['company-info']}>
            <h4 className={css['link-header']}>미식 소개</h4>
            <ul className={css.menu}>
              <li>
                <a
                  className={`${css.link} ${css.hover}`}
                  onClick={() => {
                    navigate('/aboutUs');
                  }}
                >
                  미래식당 철학
                </a>
              </li>
            </ul>
          </div>
          <div className={css['partner-info']}>
            <h4 className={css['link-header']}>입점 문의</h4>
            <ul className={css.menu}>
              <li>
                <a className={css.link}>파트너가 되면 좋은 점</a>
              </li>
              <li>
                <a className={css.link} target="_blank">
                  입점 신청하기
                </a>
              </li>
            </ul>
          </div>
          <div className={css['sns-link']}>
            <h4 className={css['link-header']}>미식 소식 받아보기</h4>
            <ul className={css.menu}>
              <li>
                <a className={css.link} target="_blank">
                  페이스북
                </a>
              </li>
              <li>
                <a className={css.link} target="_blank">
                  인스타그램
                </a>
              </li>
              <li>
                <a className={css.link} target="_blank">
                  할인 소식 받아보기
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
