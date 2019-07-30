import React from "react";
import IngredientsList from './components/IngredientsList.js';
import { Route } from 'react-router-dom';

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>I'll Serve Soup!</h1>
      <Route path="/" component={IngredientsList} />
    </div>
  );
}

export default App;
