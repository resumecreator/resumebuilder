import React from "react";

function Title(props) {
  return (
    <div>
      <div className="mui-divider container-fluid"></div>
      <br />
      <div className="mui--text-dark-secondary mui--text-display1 title row">
        <div className="col-sm-9">            
           {props.title}
        </div>     
        <div className="col-sm-3">            
           {props.button}
        </div>   
      </div>
      <br />
      <div className="mui-divider"></div>
    </div>
  );
}
export default Title;