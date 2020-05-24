import React, { Component } from "react";

import Form from "./form/Form";
import Selects from "./items/Selects";
import RadioButtons from "./items/RadioButtons";
import { ButtonEdit, ButtonInfo, LinkDownloadPDF } from "./buttons/Buttons";
import Modal from "../../../util/modal/Modal";
import Title from "../../../util/title/Title";

import itemsBgColor from "../../../../json/editbar/editItems/bgColor.json";
import itemsTextColor from "../../../../json/editbar/editItems/textColor.json";
import itemsSize from "../../../../json/editbar/editItems/size.json";
import itemsFontSize from "../../../../json/editbar/editItems/fontSize.json";
import itemsPosition from "../../../../json/editbar/editItems/position.json";
import itemsTheme from "../../../../json/editbar/editItems/theme.json";

import colors from "../../../../json/editbar/options/colors.json";
import sizes from "../../../../json/editbar/options/sizes.json";
import fontSizes from "../../../../json/editbar/options/fontSizes.json";
import positions from "../../../../json/editbar/options/positions.json";
import themes from "../../../../json/editbar/options/themes.json";

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: this.props.theme,
    };
  }

  changeTheme(value, content, group, attribute) {
    if (!isNaN(parseInt(value))) value = parseInt(value);

    let state = this.state;
    state.theme[content][group][attribute] =
      this.props.themeTemplate[content][group][attribute] + value;

    this.setState(state);
    this.props.synchChanges(this.state);
  }

  render() {
    return (
      <div>
        <ul className="nav" id="sidebar">
          <ToggleButton />

          <div className="collapse navbar-collapse" id="collapsibleSidebar">
            <DownloaSection {...this.props} />
            <EditSection changeTheme={this.changeTheme.bind(this)} />
          </div>
        </ul>
      </div>
    );
  }
}
export default Sidebar;

function ToggleButton() {
  return (
    <li className="nav-item">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleSidebar"
      >
      <i class="fa fa-edit"></i>
      </button>
    </li>
  );
}

function DownloaSection(props) {
  return (
    <li className="nav-item">
      <LinkDownloadPDF {...props} />
      <Modal
        id="download"
        title="¡Gracias por usar resumebuilder.io!"
        body="Si te gustó, por favor compartilo. :)"
        buttonLabel="Aceptar"
      />
    </li>
  );
}

function EditSection(props) {
  return (
    <li className="nav-item">
      <Title title="Editar" button={<ButtonInfo />} />
      <Modal
          id="infoEdit"
          title="Referencias de la barra de edición"
          body=" Aquí podrás cambiar el color, tamaño y posicion de las secciones."
          buttonLabel="Entendido"
      />

      <ButtonEdit label="Temas" dataTarget="editModeTheme" />
      <FormSelects
        json={itemsTheme}
        options={themes}
        id="editModeTheme"
        changeTheme={props.changeTheme}
      />

      <ButtonEdit label="Tamaños" dataTarget="editModeSizes" />
      <FormSelects
        json={itemsSize}
        options={sizes}
        id="editModeSizes"
        changeTheme={props.changeTheme}
      />
      <FormSelects
        json={itemsFontSize}
        options={fontSizes}
        id="editModeSizes"
        changeTheme={props.changeTheme}
      />

      <ButtonEdit label="Ubicación" dataTarget="editModePositions" />
      <FormRadioButtons
        json={itemsPosition}
        options={positions}
        id="editModePositions"
        changeTheme={props.changeTheme}
      />

      <ButtonEdit label="Color de fondo" dataTarget="editModeBgColors" />
      <FormSelects
        json={itemsBgColor}
        options={colors}
        id="editModeBgColors"
        changeTheme={props.changeTheme}
      />

      <ButtonEdit label="Color del texto" dataTarget="editModeTextColors" />
      <FormSelects
        json={itemsTextColor}
        options={colors}
        id="editModeTextColors"
        changeTheme={props.changeTheme}
      />
    </li>
  );
}

function FormRadioButtons(props) {
  return (
    <Form
      id={props.id}
      component={
        <RadioButtons
          json={props.json}
          options={props.options}
          changeTheme={props.changeTheme}
        />
      }
    />
  );
}
function FormSelects(props) {
  return (
    <Form
      id={props.id}
      component={
        <Selects
          json={props.json}
          options={props.options}
          changeTheme={props.changeTheme}
        />
      }
    />
  );
}