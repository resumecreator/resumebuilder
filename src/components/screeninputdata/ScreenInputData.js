import React, { Component } from "react";
import "../../css/InputData.css";

import Header from "../util/header/Header";
import NavBar from "../util/navbar/NavBar";
import Body from "./body/Body";
import Footer from "../util/footer/Footer";

import groupsResponse from "../../json/groupsResponse.json";

class ScreenInputData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: groupsResponse,
    };
  }

  synchChanges(state) {
    this.setState(state);
  }

  render() {
    return (
      <div id="screen">
        <Header />
        <NavBar groups={this.state.groups} inputData={true} />
        <Body
          groups={this.state.groups}
          synchChanges={this.synchChanges.bind(this)}
        />
        <Footer />
      </div>
    );
  }
}

export default ScreenInputData;