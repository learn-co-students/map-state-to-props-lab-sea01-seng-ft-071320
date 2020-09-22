import React from "react";
import ReactDOM from "react-dom";
import manageUsers from "./reducers/manageUsers";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";

const store = createStore(manageUsers);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
