import React from "react";

function PersonalData(props) {
  let size = props.theme.text.width > 0 ? props.theme.text.width : 6;
  let className = "col-sm-" + (12 - size) + props.theme.aboutMe.bgColor;
  return (
    <div className={className} id="personalData">   
    
      <h1 className={props.theme.text.color} id="name">
        {props.getValue("Nombre") + " " + props.getValue("Apellido")}
      </h1>    
      <h2 className={props.theme.textColor} id="name">{props.getValue("Puesto")}</h2>
    </div>
  );
}
export default PersonalData;