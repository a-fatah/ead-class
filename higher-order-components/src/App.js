import React, { useState, useEffect } from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import FilterBox from "./component/FilterBox";
import NamesList from "./component/NamesList";
import DataTable from "./component/DataTable";
import { BeatLoader } from "react-spinners";

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

function withSpinner(Component) {
  return ({ loading, ...props }) => {
    if (loading) {
      return (
        <div style={{ width: "200px", height: "200px" }}>
          <BeatLoader />
        </div>
      );
    }
    return <Component {...props} />;
  };
}

function withData(url, mapFn, Component) {
  return (props) => (
    <DataProvider
      url={url}
      mapFn={mapFn}
      render={(loading, names) => {
        return <Component data={names} loading={loading} {...props} />;
      }}
    />
  );
}

const DataProvider = ({ url, mapFn, render }) => {
  const [names, setNames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);
    const json = await fetch(url).then((res) => res.json());
    const names = mapFn(json);
    setLoading(false);
    setNames(names);
  }, []);

  return render(loading, names);
};

function App() {
  const url = "https://randomuser.me/api?results=10";
  const ListWithFilter = withFilter(NamesList);
  const ListWithSpinner = withSpinner(ListWithFilter);
  const TableWithSpinner = withSpinner(DataTable);

  const mapFn = (json) => json.results.map((result) => result.name.first);

  const ListWithSpinnerAndDataProvider = withData(
    url,
    mapFn,
    withSpinner(withFilter(NamesList))
  );

  const TableWithSpinnerAndData = withData(
    url,
    mapFn,
    withSpinner(withFilter(DataTable))
  );

  return (
    <Container className="d-flex justify-content-center">
      <ListWithSpinnerAndDataProvider />
    </Container>
  );
}

export default App;
