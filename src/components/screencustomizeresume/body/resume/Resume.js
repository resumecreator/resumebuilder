import React from "react";

import Header from "./header/Header";
import Body from "./body/Body";

function Resume(props) {
  return (
    <div className="border border-dark" id="resume">
      <Header theme={props.theme.header} headerData={props.headerData} />
      <Body theme={props.theme.body} sidebarData={props.sidebarData} mainContentData={props.mainContentData} />
    </div>
  );
}
export default Resume;