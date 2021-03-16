import React, { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import AuthContext from "../Context";

export default () => {
  const { state, dispatch } = useContext(AuthContext);

  debugger;
  return (
    <Nav
      className="justify-content-end"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      {state.loggedIn ? (
        <Nav.Item>
          <Nav.Link lang={"en"} theme={"dark"} href="/home">
            Logout
          </Nav.Link>
        </Nav.Item>
      ) : (
        <Nav.Item>
          <Nav.Link lang={"en"} theme={"dark"} href="/home">
            Login
          </Nav.Link>
        </Nav.Item>
      )}
    </Nav>
  );
};
