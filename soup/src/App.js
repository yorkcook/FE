import React from "react";

import IngredientsList from "./components/IngredientsList.js";
import { Route } from "react-router-dom";
import AddItemForm from "./components/AddItemForm.js";

import NavBar from "./components/NavBar/NavBar";

import Registration from "./components-york/Registration";
import PrivateRoute from "./components-york/PrivateRoute";
import SingleIngredient from "./components/SingleIngredient.js";
import PutForm from "./components-york/PutForm";

import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import "./Registration.css";

import Login from "./components/Login/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/inventory" component={IngredientsList} />
        {/* <Route path="/add-item" component={AddItemForm} /> */}
        <PrivateRoute path="/add-item" component={AddItemForm} />
        <PrivateRoute path="/update-item" component={PutForm} />
        <PrivateRoute exact path="/inventory" component={IngredientsList} />
      </div>
    </Router>
  );
}

export default App;
