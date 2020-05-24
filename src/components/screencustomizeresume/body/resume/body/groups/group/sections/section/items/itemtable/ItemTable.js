import React from "react";

function ItemTable(props) {
  var headerClassName = props.item.header ? props.bgColorHeader + props.textColorHeader : "";
  return (
    <tr className={headerClassName}>
      <Key {...props}/>
      <td className="value">{props.item.value}</td>
      <td></td>
    </tr>
  );
}
export default ItemTable;

function Key(props){
  if(!props.item.alternativeKey)
    return (<td className="key">{props.item.key}</td>);
  switch(props.template) {
    case 0:
        return (<td className="key">{props.item.key}</td>);
    case 1:
        return (<td class="key icon material-icons">{props.item.alternativeKey}</td>);
    default:
        return <td className="key"></td>;
  }
}