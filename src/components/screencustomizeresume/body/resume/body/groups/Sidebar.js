import React from "react";

import Group from "./group/Group";

function Sidebar(props) {
  let size = props.theme.sidebar.width > 0 ? props.theme.sidebar.width : 6;
  let className = "container-fluid col-sm-" + size + props.theme.sidebar.bgColor;
  return (
    <div className={className} id="resumeSidebar">
      <Group sections={props.sidebarData} theme={props.theme.sidebar} template={props.theme.config.template}/>
    </div>
  );
}

export default Sidebar;