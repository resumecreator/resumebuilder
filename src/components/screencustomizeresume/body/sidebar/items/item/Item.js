import React from "react";

function Item(props) {
  return (
    <div className={"col-sm-" + props.size + " bg-light mui-panel"}>
      <label>{props.label}</label>
      {props.component}
    </div>
  );
}

export default Item;
