import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import history from "./history";

import store from "./store/store";

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
