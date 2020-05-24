import React from "react";
import Tabs from "muicss/lib/react/tabs";
import Tab from "muicss/lib/react/tab";

import Section from "./section/Section";

function Sections(props) {
  let tabs = props.sections.map((section, index) => (
    <Tab value={section.title} label={section.title} key={index}>
      <Section
        section={section}
        size={props.size}
        groupName={props.groupName}
        key={index}
        synchChanges={props.synchChanges}
        addItem={props.addItem}
      />
    </Tab>
  ));
  return (
    <Tabs justified={true} id="tabsSelections">{tabs}</Tabs>
  );
}
export default Sections;