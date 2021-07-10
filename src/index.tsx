import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { QuizProvider } from "./Context/QuizProvider";
import "./styles.css";
import "./tailwind.css";

import App from "./App";

const rootElement = document.getElementById("root");
render(
  <QuizProvider>
    <Router>
      <App />
    </Router>
  </QuizProvider>,
  rootElement
);
