import pointCss from './Point.module.scss';
import css from './Mypage.module.scss';
import { useState, useEffect } from 'react';

function Point() {
  const [point, setpoint] = useState([]);

  useEffect(() => {
    fetch('/data/point.json')
      .then(res => res.json())
      .then(data => setpoint(data));
  }, []);

  return (
    <div>
      <div className={css.sectionTitle}>
        <span>포인트 사용 내역</span>
      </div>
      <table className={pointCss.orderList}>
        <thead>
          <tr className={pointCss.borderBottom}>
            <th className={pointCss.order}>날짜</th>
            <th className={pointCss.order}>내역</th>
            <th className={`${pointCss.order} ${pointCss.thCss}`}>포인트</th>
            <th className={pointCss.order}>남은 포인트</th>
          </tr>
        </thead>
        <tbody className={pointCss.tdBox}>
          {point.map(pointHistory => {
            return (
              <tr key={pointHistory.date}>
                <td className={`${pointCss.borderBottom} ${pointCss.tdFont}`}>
                  <span className={pointCss.orderNum}>{pointHistory.date}</span>
                  <div>
                    <span className={pointCss.orderDate}></span>
                  </div>
                </td>
                <td className={`${pointCss.borderBottom} ${pointCss.tdFont}`}>
                  {pointHistory.history}
                </td>
                <td className={`${pointCss.borderBottom} ${pointCss.tdFont}`}>
                  {pointHistory.point}
                </td>
                <td className={`${pointCss.borderBottom} ${pointCss.tdFont}`}>
                  <span>{pointHistory.remainingPoint}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Point;
