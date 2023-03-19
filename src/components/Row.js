import React from "react";
import {Link} from "react-router-dom";

function Row(props) {

  return (
    <tr>
      <React.Fragment>
        {Object.entries(props.row).map(cell => {
          const path=`/orders/${props.row.id}`
          console.log(path)
          if (cell[0] === 'total_price') {
            console.log(props.row.value)
            return <td key={cell[0]}><Link to="path">{props.row.value * props.row.init_price}</Link></td>
          } else if (cell[0] === 'price') {
            return <td key={cell[0]}><Link to="path">{props.row.ordered_value * props.row.init_price}</Link></td>
          } else if (cell[0] === 'last_price') {
            return <td key={cell[0]}><Link to="path">{props.row.value * props.row.init_price}</Link></td>
          } else {
            return <td key={cell[0]}><Link to="path">{cell[1]}</Link></td>
          }
        })}
      </React.Fragment>
    </tr>
  )
}

export default Row

