import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

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

function App() {
  const [names, setNames] = useState([]);

  useEffect(async () => {
    const json = await fetch(
      "https://randomuser.me/api?results=10"
    ).then((res) => res.json());
    const names = json.results.map((result) => result.name.first);
    setNames(names);
  }, []);

  const ListWithFilter = withFilter(NamesList);
  return (
    <Container className="d-flex justify-content-center">
      <ListWithFilter data={names} />
    </Container>
  );
}

export default App;
