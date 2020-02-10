import React, { useState, useEffect } from "react";
import { data } from "../dummyData.js";
import IngredientsCard from "./IngredientsCard.js";

import axiosWithAuth from "../components/axiosWithAuth";

const IngredientsList = props => {
  const [ingredient, setIngredient] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://we-serve-soup.herokuapp.com/api/inventory")
      .then(res => {
        setIngredient(res.data);
      })
      .catch(err => {
        console.log("Danger, Danger!", err);
      });
  }, []);

  return (
    <div>
      <IngredientsCard card={ingredient} />
    </div>
  );
};

export default IngredientsList;
