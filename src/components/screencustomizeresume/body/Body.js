import React from "react";

import Sidebar from "./sidebar/Sidebar";
import Resume from "./resume/Resume";
import Title from "../../util/title/Title";

function Body(props) {
   return (
        <div className="container-fluid">
          <Title title="Personaliza y descarga tu currículum." />
          <div className="row bodyCustomize">
            <div className="col-sm-8">
              <Resume {...props} />
            </div>
            <div className="col-sm-4">
              <Sidebar theme={props.theme} themeTemplate={props.themeTemplate} synchChanges={props.synchChanges} />
            </div>
          </div>
        </div>
    );
}
export default Body;