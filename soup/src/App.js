import React from "react";
import IngredientsList from './components/IngredientsList.js';
import { Route } from 'react-router-dom';


import Registration from "./components-york/Registration";
import PrivateRoute from "./components-york/PrivateRoute";

import { BrowserRouter as Router } from "react-router-dom";

import Login from './components/Login/Login'
import NavBar from './components/NavBar/NavBar'

import "./App.css";

function App() {
  return (


    <Router>
      <div className="App">
        <NavBar />
        <Route exact path="/login" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/" component={IngredientsList} />
        {/* <PrivateRoute exact path="/inventory" component={Inventory} /> */}
      </div>
    </Router>

  );
}

export default App;
