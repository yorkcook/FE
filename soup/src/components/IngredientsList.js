import React, { useState } from 'react';
import { data } from '../dummyData.js';
import IngredientsCard from './IngredientsCard.js';

const IngredientsList = (props) => {
  const [ingredient, setIngredient] = useState(data);

  return (
    <div>
      <IngredientsCard card={ingredient} />
    </div>
  )
}

export default IngredientsList;
