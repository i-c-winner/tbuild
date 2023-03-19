import React from "react";
import Rows from "./Rows";


function DesignSection (props) {
  return <div className="design_section">
    <h3>Раздел проекта - {props.section}</h3>
<Rows section={props.section} />
  </div>
}

export default DesignSection
