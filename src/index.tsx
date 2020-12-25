import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { MultiDirectionProvider, MuteProvider, KeysProvider } from "contexts";
import { App } from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MultiDirectionProvider>
        <MuteProvider>
          <KeysProvider>
            <App />
          </KeysProvider>
        </MuteProvider>
      </MultiDirectionProvider>
    </Router>
  </React.StrictMode>,
  rootElement
);
