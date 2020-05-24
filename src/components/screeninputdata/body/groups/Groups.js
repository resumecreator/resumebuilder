import React from "react";
import Tabs from "muicss/lib/react/tabs";
import Tab from "muicss/lib/react/tab";

import Group from "./group/Group";

function Groups(props) {
  let tabs = props.groups.map((group, index) => (
    <Tab value={props.groupNames[index]} label={props.tabLabels[index]} key={index}>
      <Group
        sections={group}
        groupName={props.groupNames[index]}
        key={index}
        synchChanges={props.synchChanges}
        addItem={props.addItem}
        deleteSection={props.deleteSection}
      />
    </Tab>
  ));
  return <Tabs justified={true}>{tabs}</Tabs>;
}
export default Groups;