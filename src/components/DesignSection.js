import React from "react";
import {Link, useParams} from "react-router-dom";
import Rows from "./Rows";
function DesignSection (props) {
  const {section}=useParams()
  return (
    <div className="section">
      <Link to="/">Home</Link>
      <h3>Список позаций по определенному разделу {section}</h3>
      <Rows section={section} />
    </div>

  )
}

export default DesignSection
