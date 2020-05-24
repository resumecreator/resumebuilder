import React from "react";

function RadioButton(props) {
  var name = props.radioButton.content + props.radioButton.group + props.radioButton.attribute;
  return (
    props.options.map((option, index) => (
      <div className="custom-control custom-radio">
        <input
          type="radio"
          className="custom-control-input"
          name={name}
          id={name + option.key}
          key={index}
          onChange={(ev) => {
            props.changeTheme(
              option.value,
              props.radioButton.content,
              props.radioButton.group,
              props.radioButton.attribute
            );
          }}
        />
        <label className="custom-control-label" htmlFor={name + option.key}>
          {option.key}
        </label>
      </div>    
    )));
}

export default RadioButton;