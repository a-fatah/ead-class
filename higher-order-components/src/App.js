import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterBox from "./component/FilterBox";
import NamesList from "./component/NamesList";
import Table from "react-bootstrap/Table";
import DataTable from "./component/DataTable";

function withFilter(Component) {
  return ({ data }) => {
    const [results, setResults] = useState([]);
    return (
      <div className="w-25">
        <FilterBox data={data} onFilter={(results) => setResults(results)} />
        <Component names={data} />
      </div>
    );
  };
}

const DataProvider = ({ render }) => {
  const [names, setNames] = useState([]);

  useEffect(async () => {
    const json = await fetch(
      "https://randomuser.me/api?results=10"
    ).then((res) => res.json());
    const names = json.results.map((result) => result.name.first);
    setNames(names);
  }, []);

  return render(names);
};

function App() {
  const ListWithFilter = withFilter(NamesList);

  return (
    <Container className="d-flex justify-content-center">
      <DataProvider
        render={(names) => {
          return <ListWithFilter data={names} />;
        }}
      />

      <DataProvider render={(data) => <DataTable data={data} />} />
    </Container>
  );
}

export default App;
