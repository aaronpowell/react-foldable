import React from "react";
import "./App.css";
import { Foldable, FoldableScreen } from "react-foldable";
import { MainApp } from "./MainApp";
import { SecondScreen } from "./SecondScreen";

function App() {
  return (
    <Foldable>
      <FoldableScreen matchScreen={0} component={MainApp} />
      <FoldableScreen matchScreen={1} component={SecondScreen} />
    </Foldable>
  );
}

export default App;
