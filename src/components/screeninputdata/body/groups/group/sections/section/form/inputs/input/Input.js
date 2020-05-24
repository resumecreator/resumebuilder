import React, { Component } from "react";

import SingleInput from "./singleinput/SingleInput";
import { ButtonDeleteItem } from "./buttons/Buttons";
import { ButtonUpItem } from "./buttons/Buttons";
import { ButtonDownItem } from "./buttons/Buttons";
import { ButtonInfo } from "./buttons/Buttons";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.item.id,
      order: this.props.item.order,
      key: this.props.item.key,
      alternativeKey: this.props.item.alternativeKey,
      value: this.props.item.value,
      info: this.props.item.info,
      showDeleteButton: this.props.item.showDeleteButton,
      header: this.props.item.header,
      inputType: this.props.item.inputType,
      showMoveButtons: this.props.showMoveButtons,
      fullWidthItem: this.props.item.fullWidthItem
    };
  }

  synchChanges(value, property) {
    let item = this.state;
    item[property] = value;
    this.setState(item);
    this.props.synchChanges(this.state);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.order !== this.props.item.order) {
      this.setState({"order": this.props.item.order});
    }
  }
  
  render() {
    return (
      <div className="mui-panel">        
        <div className="d-flex justify-content-between">
          <ButtonDeleteItem {...this.props} />
          <ButtonInfo {...this.props} />
        </div>
        <SingleInput
          value={this.props.item.value}
          inputType={this.props.item.inputType}
          disabled={false}
          name="value"
          item={this.props.item}
          synchChanges={this.synchChanges.bind(this)}
        />
        <div className="d-flex justify-content-end">
            <ButtonDownItem {...this.props} />
            <ButtonUpItem {...this.props} />
        </div>
      </div>
    );
  }
}

export default Input;