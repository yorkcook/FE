import React, { useState, useEffect } from 'react';
import { data } from '../dummyData.js';
import IngredientsCard from './IngredientsCard.js';
import axios from 'axios';

const IngredientsList = (props) => {
const [ingredient, setIngredient] = useState([]);

useEffect(() => {
  axios
    .get("https://server-soup.herokuapp.com/api/inventory")
    .then(res => {console.log(res.data)
    setIngredient(res.data)})
    .catch(err => console.log(err))
}, [])

  return (
    <div>
      <IngredientsCard card={ingredient}/>
    </div>
  )
}

export default IngredientsList;
