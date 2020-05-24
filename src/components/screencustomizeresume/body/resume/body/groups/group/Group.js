import React from "react";

import Sections from "./sections/Sections";

function Group(props) {
  return (
    <div className="row resumeGroup">
      <Sections {...props} />
    </div>
  );
}
export default Group;