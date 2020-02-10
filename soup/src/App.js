import React from "react";

import IngredientsList from "./components/IngredientsList.js";
import { Route } from "react-router-dom";
import AddItemForm from "./components/AddItemForm.js";

import NavBar from "./components/NavBar";

import Registration from "./components-york/Registration";
import PrivateRoute from "./components-york/PrivateRoute";
import PutForm from "./components-york/PutForm";

import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import "./Registration.css";

import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        {/* <Route path="/inventory" component={IngredientsList} /> */}
        {/* <Route path="/add-item" component={AddItemForm} /> */}
        <PrivateRoute path="/add-item" component={AddItemForm} />
        <PrivateRoute path="/update-item" component={PutForm} />
        <PrivateRoute exact path="/inventory" component={IngredientsList} />
        <h1>Welcome to We Serve Soup!</h1>
        <h2>Please Log in or Register to continue!</h2>
      </div>
    </Router>
  );
}

export default App;
