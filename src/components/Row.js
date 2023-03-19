import React from "react";

function Row(props) {
  return (
    <tr>
      <React.Fragment>
        {Object.entries(props.row).map(cell => {
          if (cell[0] === 'total_price') {
            console.log(props.row.value)
            return <td key={cell[0]}>{props.row.value * props.row.init_price}</td>
          } else if (cell[0] === 'price') {
            return <td key={cell[0]}>{props.row.ordered_value * props.row.init_price}</td>
          } else if (cell[0] === 'last_price') {
            return <td key={cell[0]}>{props.row.value * props.row.init_price}</td>
          } else {
            return <td key={cell[0]}>{cell[1]}</td>
          }
        })}
      </React.Fragment>
    </tr>
  )
}

export default Row

