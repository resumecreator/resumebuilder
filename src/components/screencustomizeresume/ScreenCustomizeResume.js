import React, { Component } from "react";
import "../../css/Resume.css";

import Header from "../util/header/Header";
import NavBar from "../util/navbar/NavBar";
import Body from "./body/Body";
import Footer from "../util/footer/Footer";

import themeJSON from "../../json/themeResponse";
import themeJSONTemplate from "../../json/themeTemplate_2";

class ScreenCustomizeResume extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerData: this.props.location.state.groups[0],
      sidebarData: this.props.location.state.groups[1],
      mainContentData: this.props.location.state.groups[2],
      theme: this.props.location.state.theme,
      themeTemplate: JSON.parse(JSON.stringify(themeJSONTemplate)),
    };
  }

  synchChanges(theme) {
    this.setState(theme);
  }

  render() {
    console.log(JSON.stringify(this.state.theme, null, 3));
    return (
      <div id="screen">
        <Header />
        <NavBar groups={this.props.location.state.groups} customizeResume={true}/>
        <Body {...this.state} synchChanges={this.synchChanges.bind(this)}/> 
        <Footer />
      </div>
    );
  }
}
export default ScreenCustomizeResume;
