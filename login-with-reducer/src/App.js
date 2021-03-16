import React, { useReducer } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./component/Login";
import NavBar from "./component/NavBar";
import AuthContext from "./Context";

function App() {
  function reducer(state, action) {
    switch (action.type) {
      case "login":
        const { username, password } = action.payload;
        return login(username, password);
      case "logout":
        return {
          loggedIn: false,
        };

      default:
        throw new Error("invalid action type");
    }
  }

  const [state, dispatch] = useReducer(reducer, { loggedIn: false });

  function login(username, password) {
    if (username == "admin" && password == "admin") {
      return {
        loggedIn: true,
      };
    }
    return {
      loggedIn: false,
      error: "Invalid Credentials",
    };
  }
  return (
    <div>
      <AuthContext.Provider value={{ state, dispatch }}>
        <NavBar />
        <div className="d-flex justify-content-center">
          <Login />
        </div>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
