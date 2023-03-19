import React from "react";

function Row(props) {
  console.log(Object.entries(props.row))
  return  <div className="row">
    {Object.entries(props.row).map(cell => {
      console.log(cell)
      return cell[1]
    })}
    </div>
}

export default Row
