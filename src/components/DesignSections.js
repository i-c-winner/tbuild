import React from "react";
import Rows from "./Rows";
import {Link} from "react-router-dom";

function DesignSections (props) {
  function getPath(type) {
    return `/section/${props.section}`
  }
  return <div className="design_section">
    <p>Раздел проекта - {props.section}</p>
    <Link  className="button button_designsections" to={getPath(props.section)}>Подробней</Link>
    <button className="button button_designsections">Скачать актуальную версию чертежей</button>
{/*<Rows section={props.section} />*/}
  </div>
}

export default DesignSections
