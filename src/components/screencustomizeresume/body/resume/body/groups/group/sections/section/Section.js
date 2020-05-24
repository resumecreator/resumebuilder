import React from "react";

import Table from "./table/Table";
import Grid from "./grid/Grid";

import Title from "./title/Title";
import Items from "./items/Items";

function Section(props) {
  if (props.section.items.length < props.section.maxItems) {
      return <SectionTable {...props} />;
  }
  else{
      return <SectionGrid {...props} />;
  }
}
export default Section;

function SectionTable(props) {
  let headerClassName =
    props.theme.bgColorTitle +
    props.theme.textColorTitle +
    " resumeSectionTable";
  let bodyClassName =
    props.theme.bgColorTable +
    props.theme.textColorTable +
    " resumeSectionTable ";
  bodyClassName += props.theme.borderlessTable ? "table-borderless" : "";
  return (
    <div className="col-sm-12">
      <Table className={headerClassName} component={<Title {...props} />} />
      <br />
      <Table className={bodyClassName} component={<Items {...props} table={true}/>} />
    </div>
  );
}

function SectionGrid(props) {
  let headerClassName =
    props.theme.bgColorTitle +
    props.theme.textColorTitle +
    " resumeSectionTable";
  let bodyClassName =
    props.theme.bgColorTable +
    props.theme.textColorTable +
    " resumeSectionGrid ";
  return (
    <div className="col-sm-12">
      <Table className={headerClassName} component={<Title {...props} />} />
      <br />
      <Grid className={bodyClassName} component={<Items {...props} table={false}/>} />
    </div>
  );
}