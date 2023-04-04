import React from "react";
import filter from "../utils/filter";
import Row from "./Row";
import getTitle from "../utils/getTitle";

function Rows(props) {
  const rows = filter('design_section', props.section)
  return (<div className="rows">
    <table>
      <thead>
      <tr>
        {Object.keys(rows[0]).map(key=>{
        return <td key={key}>{getTitle(key)}</td>})
        }
      </tr>

      </thead>
      <tbody>
      {rows.map(row=>{
        return <Row row={row} key={row.id} />
      })}
      </tbody>
    </table>
  </div>)
}


export default Rows
