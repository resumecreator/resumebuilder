import React from "react";

function ButtonAddSection(props) {
  return (
    <button
      className="mui-btn mui-btn--large mui-btn--primary mui-btn--fab"
      type="button"
      onClick={(ev) => {
        props.addSection();
      }}
    >
      +
    </button>
  );
}
export { ButtonAddSection };