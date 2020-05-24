import React from "react";

function Options(props) {
  return props.options.map((option, index) => (
    <option value={option.value} key={index} className={"bg-" + option.value}>
      {option.key}
    </option>
  ));
}

export default Options;