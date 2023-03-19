import React from "react";

function Order (props) {
  console.log(props)
  const {
    id,
    name,
    ordersData,
    value
  } = props.data
  return (<div className="orders__data">
    <p>id: {id}</p>
    <p>Наименование: {name}</p>
    <p>Дата заказа: {ordersData}</p>
    <p>Объем заказа: {value}</p>
  </div>)
}

export default Order
