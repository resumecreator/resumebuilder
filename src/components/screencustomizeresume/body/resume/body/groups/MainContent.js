import React from "react";

import Group from "./group/Group";

function MainContent(props) {
  let size = props.theme.sidebar.width > 0 ? 12 - props.theme.sidebar.width : 6;
  let className = "container-fluid col-sm-" + size + props.theme.mainContent.bgColor;
  return (
    <div className={className} id="resumeMainContent">
      <Group sections={props.mainContentData} theme={props.theme.mainContent} template={props.theme.config.template}/>
    </div>
  );
}

export default MainContent;