import React from "react";
import { Link } from "react-router-dom";

function getClassName(props) {
  return props.active
    ? "mui-btn mui-btn--large mui-btn--accent mui-btn--raised buttonHeader"
    : "mui-btn mui-btn--large mui-btn--primary mui-btn--raised buttonHeader";
}

function LinkInputData(props) {
  return (
    <React.Fragment>
      <Link
        className={getClassName(props)}
        to={{
          pathname: "/",
          state: {
            groups: props.groups,
          },
        }}
      >
       I. Ingresa tus datos
      </Link>
    </React.Fragment>
  );
}

function LinkChooseTemplate(props) {
  return (
    <React.Fragment>
      <Link
        className={getClassName(props)}
        to={{
          pathname: "/choosetemplate",
          state: {
            groups: props.groups,
          },
        }}
      >
        II. Elige la plantilla
      </Link>
    </React.Fragment>
  );
}

function LinkCustomizeResume(props) {
  let style = props.disabled ? { pointerEvents: 'none' } : {};
  return (
    <React.Fragment>
      <Link
        className={getClassName(props)}
        style={style}
        to={{
          pathname: "/customizeresume",
          state: {
            groups: props.groups,
            theme: props.theme
          },
        }}
      >
        III. Personaliza tu currículum
      </Link>
    </React.Fragment>
  );
}

export { LinkInputData, LinkChooseTemplate, LinkCustomizeResume };
