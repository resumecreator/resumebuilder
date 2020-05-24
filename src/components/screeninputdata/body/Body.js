import React, { Component } from "react";

import Groups from "./groups/Groups";
import Title from "../../util/title/Title";

import itemTemplate from "../../../json/itemTemplate";

class Body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      header: this.props.groups[0],
      sidebar: this.props.groups[1],
      mainContent: this.props.groups[2],
    };
  }

  modifyItem(groupState, indexSection){
    let indexItem = groupState[indexSection].newItemType;
    let items = JSON.parse(JSON.stringify(itemTemplate[indexItem]));
    items.forEach(item => {      
      let indexNewItem = groupState[indexSection].items.push(JSON.parse(JSON.stringify(item))) - 1;
      let prevItem = groupState[indexSection].items[indexNewItem-1];
      let idNewItem = prevItem ? prevItem.id + 1 : 0;
      let orderNewItem = prevItem ? prevItem.order + 1 : 0;
      groupState[indexSection].items[indexNewItem].order = orderNewItem;
      groupState[indexSection].items[indexNewItem].id = idNewItem;
    });
  }

  addItem(group, id) {
    let groupState = this.state[group];
    let indexSection = groupState.findIndex((section) => section.id === id);
    this.modifyItem(groupState, indexSection);
    this.setState(groupState);
    this.props.synchChanges(this.state);
  }

  synchChanges(group, groupName) {
    let state = this.state;
    state[groupName] = group.sections;
    this.setState(state);
    this.props.synchChanges(this.state);
  }

  render() {
    let groupNames = ["header", "sidebar", "mainContent"];
    let tabLabels = ["Encabezado", "barra lateral", "cuerpo"]
    return (
      <div className="container-fluid">
        <Title title="Ingresa tus datos." />
        <Groups
          groups={this.props.groups}
          groupNames={groupNames}
          tabLabels={tabLabels}
          synchChanges={this.synchChanges.bind(this)}
          addItem={this.addItem.bind(this)}
        />
      </div>
    );
  }
}

export default Body;