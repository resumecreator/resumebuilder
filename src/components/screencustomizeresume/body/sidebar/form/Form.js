import React from "react";

function Form(props) {
  return (
    <form className="container-fluid">
      <div id={props.id} className="row collapse">
        {props.component}
      </div>
    </form>
  );
}

export default Form;