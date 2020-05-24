import React from "react";

function Table(props) {
  return (
    <table className={props.className}>
      <thead>{props.component}</thead>
    </table>
  );
}
export default Table;