import React from "react";

import Options from "./options/Options";

function Select(props) {
  return (
    <select
      className="form-control"
      onChange={(ev) => {
        props.changeTheme(
          ev.target.value,
          props.select.content,
          props.select.group,
          props.select.attribute
        );
      }}
    >
      <Options {...props} />
    </select>
  );
}
export default Select;