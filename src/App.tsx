import React, { useContext } from "react";
import logo from "./logo.svg";
import "./App.css";
import UseState from "./useState";
import UseEffect from "./useEffect";
import UserContextComp from "./useContext";
import UserReducerComp from "./useReducer";
import UserRefComp from "./useRefComp";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>UserRef</h1>
        <UserRefComp />
        <h1>UserReducer</h1>
        <UserReducerComp />
        <h1>UserContext</h1>
        <UserContextComp />
        <h1>useEffect</h1>
        <UseEffect />
        <h1>useState</h1>
        <UseState />
      </header>
    </div>
  );
}

export default App;
