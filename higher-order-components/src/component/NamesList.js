import React from "react";

const NamesList = ({ names }) => (
  <div>
    <ol>
      {names.map((name) => (
        <li>{name}</li>
      ))}
    </ol>
  </div>
);

export default NamesList;
