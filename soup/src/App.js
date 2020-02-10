import React from "react";

import IngredientsList from "./components/IngredientsList.js";
import { Route } from "react-router-dom";
import AddItemForm from "./components/AddItemForm.js";

import NavBar from "./components/NavBar";

import Registration from "./components/Registration";
import PrivateRoute from "./components/PrivateRoute";
import PutForm from "./components/PutForm";
import Home from "./components/Home";

import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import "./Registration.css";

import Login from "./components/Login";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/registration" component={Registration} />
        {/* <Route path="/inventory" component={IngredientsList} /> */}
        {/* <Route path="/add-item" component={AddItemForm} /> */}
        <PrivateRoute path="/add-item" component={AddItemForm} />
        <PrivateRoute path="/update-item" component={PutForm} />
        <PrivateRoute exact path="/inventory" component={IngredientsList} />
      </div>
    </Router>
  );
}

export default App;
