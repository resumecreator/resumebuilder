import React from "react";

import { LinkInputData, LinkChooseTemplate, LinkCustomizeResume } from "./links/Links";

function NavBar(props) {
  return (
    <ul className="nav nav-tabs nav-justified">
      <li className="nav-item">
        <LinkInputData {...props} active={props.inputData ? "active" : ""} />
      </li>
      <li className="nav-item">
        <LinkChooseTemplate {...props} active={props.chooseTemplate ? "active" : ""} />
      </li>
      <li className="nav-item">
        <LinkCustomizeResume {...props} active={props.customizeResume ? "active" : ""} disabled={props.inputData}/>
      </li>      
    </ul> 
  );
}
export default NavBar;