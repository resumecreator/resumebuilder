import React from "react";

function SingleInput(props) {
  switch (props.inputType) {
    case 0:
      return <InputFile {...props} />;
    case 1:
      return <InputTextArea {...props} />;
    case 2:
      return <InputTextKeyValue {...props} />;
      

    default:
      return <InputText {...props} />;
  }
}
export default SingleInput;

function InputText(props) {
  return (
    <div className="mui-textfield mui-textfield--float-label">
      <input
        className="mdl-textfield__input"
        type="text"
        id={props.item.key}
        value={props.item.value}
        onChange={(ev) => {
          props.synchChanges(ev.target.value, "value");
        }}
      />
      <label className="mdl-textfield__label" htmlFor={props.item.key}>
        {props.item.key}
      </label>
    </div>
  );
}

function InputTextKeyValue(props) {
  return (
    <div className="mui-textfield">
      <input
        className="mdl-textfield__input"
        type="text"
        id={props.item.key}
        value={props.item.key}
        onChange={(ev) => {
          props.synchChanges(ev.target.value, "key");
        }}
      />
      <br/>
      <input
        className="mdl-textfield__input"
        type="text"
        id={props.item.value}
        value={props.item.value}
        onChange={(ev) => {
          props.synchChanges(ev.target.value, "value");
        }}
      />
    </div>
  );
}

function InputTextArea(props) {
  return (
    <div className="mui-textfield">
      <textarea
        id={props.item.key}
        value={props.item.value}
        placeholder= {props.item.key}
        onChange={(ev) => {
          props.synchChanges(ev.target.value, "value");
        }}>
          
        </textarea>
    </div>
  );
}

function InputFile(props) {
  return (
    <div className="custom-file">
      <input
        type="file"
        id="customFile"
        accept=".jpg, .jpeg, .png"
        onChange={(ev) => {
          props.synchChanges(URL.createObjectURL(ev.target.files[0]), "value");
        }}
      />
      <label className="custom-file-label" htmlFor="customFile">
        Elegí una foto
      </label>
    </div>
  );
}