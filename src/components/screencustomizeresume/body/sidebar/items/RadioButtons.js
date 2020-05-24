import React from "react";

import Item from "./item/Item";
import RadioButton from "./radiobutton/RadioButton";

function RadioButtons(props) {
  return props.json.map((radioButton, index) => (
    <Item
      label={radioButton.label}
      size={index === props.json.length - 1 && index % 2 === 0 ? 12 : 6}
      key={index}
      component={
        <RadioButton
          key={index}
          radioButton={radioButton}
          options={props.options}
          changeTheme={props.changeTheme}
        />
      }
    />
  ));
}

export default RadioButtons;