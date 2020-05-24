import React from "react";

let classNamePrimary = "mui-btn mui-btn--accent mui-btn--fab";

function ButtonAddItem(props) {
  if (!props.showAddButton) return "";
  return (
    <button
      className={classNamePrimary}
      type="button"
      onClick={(ev) => {
        props.addItem(props.id);
      }}
    >
      <span className="fas fa-plus" ></span>
    </button>
  );
}
export { ButtonAddItem };