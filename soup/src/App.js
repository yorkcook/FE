import React from "react";
import IngredientsList from "./components/IngredientsList.js";

import { Route } from "react-router-dom";

import Registration from "./components-york/Registration";
import PrivateRoute from "./components-york/PrivateRoute";

import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import "./Registration.css";

import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <h1>I'll Serve Soup!</h1>
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/ingredients" component={IngredientsList} />
        {/* <PrivateRoute exact path="/inventory" component={Inventory} /> */}
      </div>
    </Router>
  );
}

export default App;
