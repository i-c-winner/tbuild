import React from "react";
import Order from "./Order";
import {Link} from "react-router-dom";

const data={
  id: 1001,
  name: "Send",
  ordersData: '25 февраля 2023',
  value: 250
}
function Orders() {

  return (
    <div className="orders">
      <Link to="/">Home</Link>
      <h3 className="orders__title">Список заказов по определенной позиции</h3>
      <div className="orders__datas">
        <Order data={data}/>
        <Order data={data}/>
        <Order data={data}/>
        <Order data={data}/>
      </div>
    </div>

  )
}

export default Orders
