import React from "react";
import logo from "./logo.svg";

const MainApp = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>React Foldable</h1>
      <p>
        This is a component that makes it easier to detect foldable UI's and
        have your React application adapt for them.
      </p>
      <p className="non-foldable">Looks like this isn't a foldable device.</p>
    </header>
  </div>
);

export { MainApp };
