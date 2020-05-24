import React from "react";

function ItemGrid(props) {
  var headerClassName = props.item.header ? props.bgColorHeader + props.textColorHeader : "";
  let size = (props.item.fullWidthItem) ? " col-sm-12 itemGrid" : " col-sm itemGrid";
  return (
    <div className={headerClassName + size}>
      {(props.item.fullWidthItem) && <div className="mui-divider dividerGrid"></div>}
      <Key {...props} />
      <div> {props.item.value} </div>
      <br/>
    </div>
  );
}
export default ItemGrid;

function Key(props){
  if(!props.item.alternativeKey)
    return (<p className="key">{props.item.key}</p>);
  switch(props.template) {
    case 0:
        return (<p className="key">{props.item.key}</p>);
    case 1:
        return (<div class="key icon material-icons">{props.item.alternativeKey} </div>);
    default:
        return null;
  }
}