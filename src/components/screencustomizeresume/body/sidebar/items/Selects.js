import React from "react";

import Item from "./item/Item";
import Select from "./select/Select";

function Selects(props) {
  return props.json.map((select, index) => (
    <Item
      label={select.label}
      size={index === props.json.length - 1 && index % 2 === 0 ? 12 : 6}
      key={index}
      component={
        <Select
          select={select}
          options={props.options}
          changeTheme={props.changeTheme}
        />
      }
    />
  ));
}
export default Selects;