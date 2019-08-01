import React, { useState, useEffect } from "react";
import { data } from "../dummyData.js";
import IngredientsCard from "./IngredientsCard.js";
import axios from "axios";
import axiosWithAuth from "../components-york/axiosWithAuth";

const IngredientsList = props => {
  const [ingredient, setIngredient] = useState([]);

  // {
  //   "item_name": "yellow popcorn",
  //   "quantity": 10,
  //   "unit_id": "1",
  //   "price": 1000,
  //   "alert_when": 0,
  //   "cat_id": 3,
  //   "kit_id": 1
  // // }

  // const [item, setInventory] = useState({});

  useEffect(() => {
    axiosWithAuth()
      .get("https://server-soup.herokuapp.com/api/inventory")
      .then(res => {
        setIngredient(res.data);
      })
      .catch(err => {
        console.log("Danger, Danger!", err);
      });
  }, []);

  // useEffect(() => {
  //   axios
  //     .get("https://server-soup.herokuapp.com/api/inventory")
  //     .then(res => {
  //       console.log(res.data);
  //       setIngredient(res.data);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  function minus() {
    const id = props.match.params.id;
    axios.put(`https://server-soup.herokuapp.com/api/inventory/${id}`);
  }

  function plus() {}
  return (
    <div>
      <IngredientsCard card={ingredient} plus={plus} minus={minus} />
    </div>
  );
};

export default IngredientsList;
