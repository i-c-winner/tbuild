import React from "react";
import {Link, useParams} from "react-router-dom";
import filter from "../utils/filter";
import Rows from "./Rows";
function DesignSection (props) {
  const {section}=useParams()
  console.log(section)
  const rows=filter('design_section', section)
  console.log(rows)
  return (
    <div className="section">
      <Link to="/">Home</Link>
      <h3>Список позаций по определенному разделу {section}</h3>
      <Rows section={section} />
      <button className="section__order-button">Создать заявку</button>
    </div>

  )
}

export default DesignSection
