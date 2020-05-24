import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { MultiDirectionProvider } from "./contexts/MultiDirection";
import { App } from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MultiDirectionProvider>
        <App />
      </MultiDirectionProvider>
    </Router>
  </React.StrictMode>,
  rootElement
);
