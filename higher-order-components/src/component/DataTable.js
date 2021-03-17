import React from "react";
import Table from "react-bootstrap/Table";

const DataTable = ({ data }) => {
  return (
    <Table>
      <thead>
        <tr>
          <td>Name</td>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr>
            <td>{item}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
