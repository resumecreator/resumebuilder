import React from "react";

function Grid(props) {
  return (
    <div className={props.className + " row"}>
      {props.component}
    </div>
  );
}
export default Grid;