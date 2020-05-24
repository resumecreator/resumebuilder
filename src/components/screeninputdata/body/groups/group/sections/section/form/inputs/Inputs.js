import React from "react";

import Input from "./input/Input";

function Inputs(props) {
  props.items.sort((itemA, itemB) => (itemA.order > itemB.order ? 1 : -1));
  let lastItem = props.items[props.items.length-1];
  let lastOrder =  lastItem ? lastItem.order : 0;
  let firstOrder = props.items[0] ? props.items[0].order : 0;
  return props.items.map((item) => (
    <Input
      item={item}
      key={item.id}
      lastOrder={lastOrder}
      firstOrder={firstOrder}
      showMoveButtons={props.showMoveButtons}
      synchChanges={props.synchChanges}
      deleteItem={props.deleteItem}
      upItem={props.upItem}
      downItem={props.downItem}
    />
  ));
}
export default Inputs;

