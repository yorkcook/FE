import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import { reducer } from "./store/reducers/index";

// const store = createStore(reducer, applyMiddleware(thunk));

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);
