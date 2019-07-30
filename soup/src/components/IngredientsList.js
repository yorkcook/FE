import React, { useState, useEffect } from 'react';
import { data } from '../dummyData.js';
import IngredientsCard from './IngredientsCard.js';
import axios from 'axios';

const IngredientsList = (props) => {
const [ingredient, setIngredient] = useState([]);

useEffect(() => {
  axios
    .get("https://05386425-fdd8-4080-a90a-ba001245303b.mock.pstmn.io/api/inventory")
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
