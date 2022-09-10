import pointCss from '../Mypage/Point.module.scss';
import css from '../../pages/Mypage/Mypage.module.scss';
import { useState, useEffect } from 'react';

function Point() {
  const [point, setPoint] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/my', {
      // fetch('/data/myPage/myPage.json', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ` + localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(data => {
        setPoint(data.data.point);
      });
  }, []);

  return (
    <div className={pointCss.container}>
      <div className={css.sectionTitle}>
        <span>포인트 내역</span>
      </div>

      <table className={pointCss.orderList}>
        <thead>
          <tr className={pointCss.borderBottom}>
            <th className={pointCss.order}>날짜</th>
            <th className={pointCss.order}>내역</th>
            <th className={`${pointCss.order} ${pointCss.thCss}`}>포인트</th>
          </tr>
        </thead>
        <tbody className={pointCss.tdBox}>
          {point == null || point.length == 0 ? (
            <tr>
              <td className={`${pointCss.borderBottom} ${pointCss.tdFont}`}>
                <span className={pointCss.orderNum}>2020-09-11</span>
                <div>
                  <span className={pointCss.orderDate}></span>
                </div>
              </td>
              <td className={`${pointCss.borderBottom} ${pointCss.tdFont}`}>
                가입 축하 기념
              </td>
              <td className={`${pointCss.borderBottom} ${pointCss.tdFont}`}>
                5,000P
              </td>
            </tr>
          ) : (
            point.map(pointHistory => {
              return (
                <tr key={pointHistory.pointId}>
                  <td className={`${pointCss.borderBottom} ${pointCss.tdFont}`}>
                    <span className={pointCss.orderNum}>
                      {pointHistory.createdAt.substr(0, 10)}
                    </span>
                    <div>
                      <span className={pointCss.orderDate}></span>
                    </div>
                  </td>
                  <td className={`${pointCss.borderBottom} ${pointCss.tdFont}`}>
                    {pointHistory.history}
                  </td>
                  <td className={`${pointCss.borderBottom} ${pointCss.tdFont}`}>
                    {pointHistory.point.toLocaleString()}P
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Point;
