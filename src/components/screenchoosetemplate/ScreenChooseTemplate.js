import React, { Component } from "react";
import "../../css/ChooseTemplate.css";

import Header from "../util/header/Header";
import NavBar from "../util/navbar/NavBar";
import Body from "./body/Body";
import Footer from "../util/footer/Footer";

import templates from "../../json/templatesResponse.json";

class ScreenChooseTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
       theme: templates[0]
    };
  }

  synchChanges(index){
    let state = this.state;
    state.theme = templates[index];
    this.setState(state);
  }

  render() {
    return (
      <div id="screen">
        <Header />
        <NavBar groups={this.props.location.state.groups} theme={this.state.theme} chooseTemplate={true}/>
        <Body synchChanges={this.synchChanges.bind(this)}/>
        <Footer />
      </div>
    );
  }
}
export default ScreenChooseTemplate;
