import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../css/FixedBoostrap.css";

import ScreenInputData from "./screeninputdata/ScreenInputData";
import ScreenChooseTemplate from "./screenchoosetemplate/ScreenChooseTemplate";
import ScreenCustomizeResume from "./screencustomizeresume/ScreenCustomizeResume";

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ScreenInputData} />
          <Route exact path="/choosetemplate" component={ScreenChooseTemplate} />
          <Route exact path="/customizeresume" component={ScreenCustomizeResume} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
