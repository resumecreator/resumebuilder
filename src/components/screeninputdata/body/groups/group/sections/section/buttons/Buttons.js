import React from "react";

let classNameDanger = "mui-btn mui-btn--danger mui-btn--raised";
let classNamePrimary = "mui-btn mui-btn--primary mui-btn--raised";

function ButtonDeleteSection(props) {
  if(!props.section.showDeleteButton) return "";
  return (
    <button
      className={classNameDanger}
      type="button"
      onClick={(ev) => {
        props.deleteSection(props.section.id);
      }}
    >
      x
    </button>
  );
}

function ButtonInfo(props) {
  if(!props.section.info) return "";
  return (
    <button
      className={classNamePrimary}
      type="button"
      id="infoSection"
      data-toggle="modal"
      data-target={"#info" + props.groupName + props.section.id}
    >
     <span className="fa fa-info"></span>
    </button>
  );
}

export { ButtonDeleteSection, ButtonInfo};