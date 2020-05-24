import React from "react";

import ItemTable from "./itemtable/ItemTable";
import ItemGrid from "./itemgrid/ItemGrid";

function Items(props) {
  return props.section.items.map((item, index) => (
    <Item {...props} item={item} index={index} key={index}/>
  ));
}
export default Items;

function Item(props) {
  if (props.table) {
      return (
        <ItemTable
          item={props.item}
          bgColorHeader={props.theme.bgColorHeader}
          textColorHeader={props.theme.textColorHeader}
          template={props.template}
          key={props.index}
        />
      );
   }
   else{
      return (
        <ItemGrid
          item={props.item}
          bgColorHeader={props.theme.bgColorHeader}
          textColorHeader={props.theme.textColorHeader}
          template={props.template}
          key={props.index}
        />
      );
  }
}