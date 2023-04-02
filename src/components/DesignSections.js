import React from "react";
import Rows from "./Rows";
import {Link} from "react-router-dom";

function DesignSections (props) {
  function getPath(type) {
    return `/section/${props.section}`
  }
  return <div className="design_section">
    <Link to={getPath(props.section)}>Раздел проекта - {props.section}</Link>
<Rows section={props.section} />
  </div>
}

export default DesignSections
