import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Foldable, FoldableScreen } from "react-foldable";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Foldable>
          <FoldableScreen
            matchScreen={0}
            component={() => <>I'm the first screen</>}
          ></FoldableScreen>
          <FoldableScreen
            matchScreen={1}
            component={() => <>I'm the second screen</>}
          ></FoldableScreen>
        </Foldable>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
