import React from "react";

import Section from "./section/Section";

function Sections(props) {
  let sections = props.sections.sort((sectionA, sectionB) => sectionA.id > sectionB.id ? 1 : -1);
  sections = sections.filter((section) => section.items.length !== 0);
  return sections.map((section, index) => (
    <Section section={section} theme={props.theme} key={index} template={props.template}/>
  ));
}
export default Sections;