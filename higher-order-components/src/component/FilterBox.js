import React from "react";
import Form from "react-bootstrap/Form";
const FilterBox = ({ data, onFilter }) => {
  const handleSearch = (e) => {
    const filterText = e.target.value;
    const filteredNames = data.filter((item) => item.startsWith(filterText));
    debugger;
    onFilter(filteredNames);
  };

  return (
    <div className="p-3">
      <Form.Label>Search</Form.Label>
      <Form.Control type="text" name="filterText" onChange={handleSearch} />
    </div>
  );
};

export default FilterBox;
