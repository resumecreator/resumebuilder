import React from "react";

function Photo(props) {
    let size = props.theme.text.width > 0 ? props.theme.text.width : 6;
    let className = "col-sm-" + size + props.theme.text.bgColor;
    return (
      <div className={className}>
        <img src={props.getValue("Foto", 1)} className={props.theme.image.format} id="profilePic" alt=""/>
      </div>
    );
  }
  export default Photo;