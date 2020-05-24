import React from "react";

import Sidebar from "./groups/Sidebar";
import MainContent from "./groups/MainContent";

function Body(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <RightContent {...props} />
        <LeftContent  {...props} />
      </div>
    </div>
  );
}

export default Body;

function RightContent(props) {
  return props.theme.sidebar.positionRight ? 
  (<Sidebar {...props} />) : 
  (<MainContent {...props} />);
}

function LeftContent(props) {
  return props.theme.sidebar.positionRight ? 
  (<MainContent {...props} />) : 
  (<Sidebar {...props} />);
}
