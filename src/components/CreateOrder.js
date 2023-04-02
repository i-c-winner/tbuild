import React from "react";
import {useParams} from "react-router-dom";
import {main} from "../constants/user";

function CreateOrder() {
  const params = useParams()
  const data = getData(params.order)
  const [ordering, setOrdering] = React.useState(0)

  function getData(id) {
    return main.filter(elem => {
      return elem.id === Number(id)
    })[0]
  }

  function changeValue(event) {
    setOrdering(event.target.value)
  }

  function getWarning() {
    if ((Number(data.value) * Number(data.init_price) - (Number(data.ordered_value)) * Number(data.init_price) - ordering * data.init_price)<0){
      return true
    }
    return false
  }

  console.log(data)
  return (<div className="create-order">
      <p className="create-order__title ">Создать заявку</p>
      <p className="create-order__name">{data.name}</p>
      <div className="create-order__card">
        <p className="create-order__total">
          Общее количество :{data.value} {data.init_type}
        </p>
        <p className="create-order__total-price">
          Общее цена :{Number(data.value) * Number(data.init_price)}
        </p>
        <p className="create-order__init-price">
          Заказано:{Number(data.ordered_value)}
        </p>
        <p className="create-order__last-price">
          Остаток бюджета по позиции
          :{Number(data.value) * Number(data.init_price) - Number(data.ordered_value) * Number(data.init_price)}
        </p>
        <p className={`create-order__last-price create-order__last-price_after ${getWarning()? "create-order__last-price_warning": null}`}>
          Остаток бюджета по позиции после заказа

          :{Number(data.value) * Number(data.init_price) - (Number(data.ordered_value)) * Number(data.init_price) - ordering * data.init_price}
        </p>
      </div>
      <div className="create-order__inputs">
        <label htmlFor="name">Заказываемое количество</label>
        <input className="create-order__input create-order__input_order" value={ordering} onChange={changeValue}
               name="order"/>
      </div>
    </div>

  )
}

export default CreateOrder
