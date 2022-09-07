import orderlistCss from './Orderlist.module.scss';
import css from '../../pages/Mypage/Mypage.module.scss';
import { useEffect, useState } from 'react';

function Orderlist() {
  const [orderList, setOrderListArray] = useState([]);

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
        console.log(data);
        setOrderListArray(data.data.orderList);
      });
  }, []);

  return (
    <div>
      <div className={css.sectionTitle}>
        <span>주문 내역</span>
      </div>
      {orderList == null ? (
        <div className={css.rowList}>
          <p>조회 가능한 주문 내역이 없습니다.</p>
        </div>
      ) : (
        <table className={orderlistCss.orderList}>
          <thead>
            <tr className={orderlistCss.borderBottom}>
              <th className={orderlistCss.order}>상품정보</th>
              <th className={orderlistCss.order}>주문번호</th>
              <th className={orderlistCss.order}>주문명</th>
              <th className={orderlistCss.order}>결제금액</th>
            </tr>
          </thead>
          <tbody>
            {orderList.map(orderItem => {
              return (
                <tr
                  className={orderlistCss.orderListItem}
                  key={orderItem.orderNumber}
                >
                  <td
                    className={`${orderlistCss.orderListCol} ${orderlistCss.imgBox} ${orderlistCss.borderBottom}`}
                  >
                    <img
                      className={orderlistCss.thumbnail}
                      src={orderItem.imageThumbnail}
                    ></img>
                  </td>
                  <td className={orderlistCss.orderListCol}>
                    <span className={orderlistCss.orderNum}>
                      {orderItem.orderNumber}
                    </span>
                    <div>
                      <span className={orderlistCss.orderDate}>
                        {orderItem.createdAt.substr(0, 10)}
                      </span>
                    </div>
                  </td>
                  <td
                    className={`${orderlistCss.productName} ${orderlistCss.borderBottom}}`}
                  >
                    {orderItem.productName}
                  </td>

                  <td className={orderlistCss.orderListCol}>
                    <span className={orderlistCss.orderPrice}>
                      {orderItem.fixedPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                      원
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Orderlist;
