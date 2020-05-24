import React from "react";

function Title(props) {
  return (
    <tr>
      <th className={props.theme.sizeTitle + " resumeSectionTitle"}>
        {props.section.title}
      </th>
    </tr>
  );
}
export default Title;