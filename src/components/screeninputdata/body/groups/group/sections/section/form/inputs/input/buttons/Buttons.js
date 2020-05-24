import React from "react";

let classNamePrimary = "mui-btn mui-btn--small mui-btn--primary mui-btn--fab";
let classNameDanger = "mui-btn mui-btn--small mui-btn--danger mui-btn--fab";
let classNameAccent = "mui-btn mui-btn--small mui-btn--accent mui-btn--raised";

function ButtonDeleteItem(props) {
  if (!props.item.showDeleteButton) return "";

  return (
    <button
      className={classNameDanger}
      type="button"
      onClick={(ev) => {
        props.deleteItem(props.item);
      }}
    >
      <span className="fas fa-trash" ></span>
    </button>
  );
}

function ButtonInfo(props) {
  if (!props.item.info) {
    return "";
  }
  return (
    <button
      className={classNamePrimary}
      type="button"
      data-toggle="popover"
      data-trigger="focus"
      title={props.item.key}
      data-content={props.item.info}
    >
      <span className="fa fa-info"></span>
    </button>
  );
}

function ButtonUpItem(props) {
  if (!props.showMoveButtons) return "";

  return (
    <button
      className={classNameAccent}
      type="button"
      disabled={props.item.order === props.firstOrder}
      onClick={(ev) => {
        props.upItem(props.item);       
      }}
    >
      <span className="fa fa-arrow-up"></span>
    </button>
  );
}

function ButtonDownItem(props) {
  if (!props.showMoveButtons) return "";

  return (
    <button
      className={classNameAccent}
      type="button"
      disabled={props.item.order === props.lastOrder}
      onClick={(ev) => {
        props.downItem(props.item);
      }}
    >
      <span className="fa fa-arrow-down"></span>
    </button>
  );
}

export { ButtonDeleteItem, ButtonUpItem, ButtonDownItem, ButtonInfo };