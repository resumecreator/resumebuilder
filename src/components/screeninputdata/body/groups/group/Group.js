import React, { Component } from "react";

import Sections from "./sections/Sections";

class Group extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: this.props.sections,
    };
  }

  addItem(id) {
    this.props.addItem(this.props.groupName, id);
  }

  synchChanges(section) {
    let group = this.state;
    let index = group.sections.findIndex((s) => s.id === section.id);
    if (index === -1) {
      group.sections.push(section);
    } else {
      group.sections[index] = section;
    }
    this.setState(group);
    this.props.synchChanges(this.state, this.props.groupName);
  }

  render() {
    return (
      <div className="row group">
        <Sections
          {...this.props}
          sections={this.props.sections}
          synchChanges={this.synchChanges.bind(this)}
          addItem={this.addItem.bind(this)}
        />
      </div>
    );
  }
}

export default Group;