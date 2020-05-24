import React from "react";

import Title from "../../util/title/Title";
import Carousel from "./carousel/Carousel";
function Body(props) {
   return (
        <div className="container-fluid">
          <Title title="Elige la plantilla que más te guste." />          
          <Carousel synchChanges={props.synchChanges}/>
        </div>
    );
}
export default Body;