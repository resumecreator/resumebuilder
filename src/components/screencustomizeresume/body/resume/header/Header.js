import React from "react";

import PersonalData from "./PersonalData";
import Photo from "./Photo";

function Header(props) {
  function getKey(key, index) {
    return props.headerData[index ? index : 0].items.find((item) => item.key === key);
  }

  function getValue(key, index) {
    return getKey(key, index) ? getKey(key, index).value : "";
  }

  function RightContent() {
    return props.theme.text.positionRight
      ? <PersonalData {...props} getValue={getValue}/>
      : <Photo {...props} getValue={getValue}/>;
  }

  function LeftContent() {
    return props.theme.text.positionRight
      ? <Photo {...props} getValue={getValue} />
      : <PersonalData {...props} getValue={getValue}/>;
  }

    return (
      <div className={"container-fluid" + props.theme.text.textColor}>
        <div className="row">
          <LeftContent />
          <RightContent />
        </div>    
      </div>
    );
}
export default Header;