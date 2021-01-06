import React from "react";
import logo from "./logo.svg";
import {
  Foldable,
  FoldableScreen,
  useIsPotentiallyDualScreenDevice,
} from "@aaronpowell/react-foldable";

const MainApp = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>React Foldable</h1>
      <p>
        This is a component that makes it easier to detect foldable UI's and
        have your React application adapt for them.
      </p>
      <div className="non-foldable">
        <p>Looks like this isn't a spanned foldable device.</p>
        {useIsPotentiallyDualScreenDevice() && (
          <p>
            User Agent sniffing says you might be on a foldable, try spanning
            multiple screens.
          </p>
        )}
      </div>

      <Foldable>
        <FoldableScreen
          match={({ isDualScreen }) => isDualScreen}
          component={() => <p>I'm only appearing when we can dual-screen</p>}
        />
      </Foldable>
    </header>
  </div>
);

export { MainApp };
