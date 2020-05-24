import React, { Component } from "react";

import Form from "./form/Form";
import Title from "../../../../../../util/title/Title";
import { ButtonInfo } from "./buttons/Buttons";
import Modal from "../../../../../../util/modal/Modal";

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.section.title,
      id: this.props.section.id,
      items: this.props.section.items,
      newItemType: this.props.section.newItemType,
      maxItems: this.props.section.maxItems,
      showAddButton: this.props.section.showAddButton,
      showMoveButtons: this.props.section.showMoveButtons,
      enableHeader: this.props.section.enableHeader,
      info: this.props.section.info
    };
  }

  deleteItem(item) {
    let section = this.state;
    let index = section.items.findIndex((i) => i.id === item.id);
    let cant = section.newItemType != 0 ? 4 : 1;
    section.items.splice(index, cant);
    this.setState(section);
    this.props.synchChanges(this.state);
  }

  upItem(item) {
    let indexItem = this.state.items.findIndex((i) => i.id === item.id);
    let itemDest = this.state.items[indexItem - 1];
    let order = item.order;
    item.order = itemDest.order;
    itemDest.order = order;    
    this.synchChanges(item);
    this.synchChanges(itemDest);
  }

  downItem(item) {
    let indexItem = this.state.items.findIndex((i) => i.id === item.id);
    let itemDest = this.state.items[indexItem + 1];
    let order = item.order;
    item.order = itemDest.order;
    itemDest.order = order;    
    this.synchChanges(item);
    this.synchChanges(itemDest);
  }

  synchChanges(item) {
    let section = this.state;
    let index = section.items.findIndex((i) => i.id === item.id);
    if (index === -1) {
      section.items.push(item);
    } else {
      section.items[index] = item;
    }
    this.setState(section);
    this.props.synchChanges(this.state);
  }

  render() {
    return (
      <div className="col-sm-12 section mui-panel">
        <div className="btn-group" role="group">
          <ButtonInfo {...this.props} />
          <Modal
            id={"info" + this.props.groupName + this.props.section.id}
            title={this.props.section.title}
            body={this.props.section.info}
            buttonLabel="Entendido"
          />
        </div>              
        <Title title={this.state.title} />
        <Form
          {...this.state}
          addItem={this.props.addItem}
          synchChanges={this.synchChanges.bind(this)}
          deleteItem={this.deleteItem.bind(this)}
          upItem={this.upItem.bind(this)}
          downItem={this.downItem.bind(this)}
        />
      </div>
    );
  }
}

export default Section;