import React from "react";
import {Link} from "react-router-dom";

function Row(props) {
function getPath(id) {
  return `/orders/${id}`
}
  return (
    <tr>
      <React.Fragment>
        {Object.entries(props.row).map(cell => {
          if (cell[0] === 'total_price') {
            console.log(props.row.value)
            return <td key={cell[0]}><Link to={getPath(props.row.id)}>{props.row.value * props.row.init_price}</Link></td>
          } else if (cell[0] === 'price') {
            return <td key={cell[0]}><Link to={getPath(props.row.id)}>{props.row.ordered_value * props.row.init_price}</Link></td>
          } else if (cell[0] === 'last_price') {
            return <td key={cell[0]}><Link to={getPath(props.row.id)}>{props.row.value * props.row.init_price}</Link></td>
          } else {
            return <td key={cell[0]}><Link to={getPath(props.row.id)}>{cell[1]}</Link></td>
          }
        })}
      </React.Fragment>
    </tr>
  )
}

export default Row

