import orderlistCss from './Orderlist.module.scss';
import css from './Mypage.module.scss';
import { useEffect, useState } from 'react';

function Orderlist() {
  const [orderList, setOrderListArray] = useState([]);

  useEffect(() => {
    fetch('/data/OrderlistData.json')
      .then(res => res.json())
      .then(data => setOrderListArray(data));
  }, []);

  return (
    <div>
      <div className={css.sectionTitle}>
        <span>주문 내역</span>
      </div>
      <table className={orderlistCss.orderList}>
        <thead>
          <tr className={orderlistCss.borderBottom}>
            <th className={orderlistCss.order}>주문번호</th>
            <th className={orderlistCss.order}>주문명</th>
            <th className={orderlistCss.order}>상품상태</th>
            <th className={orderlistCss.order}>결제금액</th>
          </tr>
        </thead>
        <tbody>
          {orderList.map(orderItem => {
            return (
              <tr
                className={orderlistCss.orderListItem}
                key={orderItem.orderNum}
              >
                <td
                  className={`${orderlistCss.orderListCol} ${orderlistCss.borderBottom} `}
                >
                  <span className={orderlistCss.orderNum}>
                    {orderItem.orderNum}
                  </span>
                  <div>
                    <span className={orderlistCss.orderDate}>
                      {orderItem.orderDate}
                    </span>
                  </div>
                </td>
                <td
                  className={`${orderlistCss.borderBottom} ${orderlistCss.nameColor}`}
                >
                  {orderItem.orderName}
                </td>
                <td
                  className={`${orderlistCss.orderListCol} ${orderlistCss.borderBottom}`}
                >
                  {orderItem.orderDelivery}
                </td>
                <td
                  className={`${orderlistCss.orderListCol} ${orderlistCss.borderBottom}`}
                >
                  <span className={orderlistCss.orderPrice}>
                    {orderItem.orderPrice}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={css.rowList}>
        <p>조회 가능한 주문 내역이 없습니다.</p>
      </div>
    </div>
  );
}

export default Orderlist;
