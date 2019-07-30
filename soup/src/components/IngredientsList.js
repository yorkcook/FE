import React, { useState, useEffect } from 'react';
import { data } from '../dummyData.js';
import IngredientsCard from './IngredientsCard.js';
import axios from 'axios';

const IngredientsList = (props) => {
  const [ingredient, setIngredient] = useState(data);

  // useEffect(() => {
  //   axios
  //     .get("")
  //     .then(res => {
  //       setIngredient(res);
  //     })
  //     .catch(err => console.log(err))
  // })

  return (
    <div>
      <IngredientsCard card={ingredient} />
    </div>
  )
}

export default IngredientsList;
