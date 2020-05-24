import React from "react";

import Inputs from "./inputs/Inputs";
import { ButtonAddItem } from "./buttons/Buttons";

function Form(props) {
  return (
    <form className="mui-form">      
      <Inputs
        {...props}
        showMoveButtons={props.showMoveButtons}
        synchChanges={props.synchChanges}
        deleteItem={props.deleteItem}
        upItem={props.upItem}
        downItem={props.downItem}
      />
      <br/>
      <ButtonAddItem {...props} />
    </form>
  );
}
export default Form;