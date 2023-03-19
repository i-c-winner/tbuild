import React from "react";
import {main} from "../constants/user";
import filter from "../utils/filter";
import Row from "./Row";

function Rows(props) {
  const rows = filter('design_section', props.section)
  return (<div className="rows">
    <table>
      <thead>
      <tr>
        {Object.keys(rows[0]).map(key=>{
        return <td >{key}</td>})
        }
      </tr>
      <tbody>
      {rows.map(row=>{
        return <tr><Row row={row} key={row.id} /></tr>
      })}
      </tbody>
      </thead>
    </table>
  </div>)
}


export default Rows
