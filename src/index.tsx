import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { MultiDirectionProvider } from "./contexts/MultiDirection";
import { MuteProvider } from "./contexts/Mute";
import { App } from "./components/App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MultiDirectionProvider>
        <MuteProvider>
          <App />
        </MuteProvider>
      </MultiDirectionProvider>
    </Router>
  </React.StrictMode>,
  rootElement
);
