import React from "react";
import Order from "./Order";
import {Link, useParams} from "react-router-dom";

const data={
  id: 1001,
  name: "Send",
  ordersData: '25 февраля 2023',
  value: 250
}
function Orders() {
const {order, project}=useParams()
    console.log(useParams())
    function getPath() {
    return `/create-order/${project}/${order}`
    }
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
        <Link to={getPath()}>Создать заявку</Link>
    </div>

  )
}

export default Orders
