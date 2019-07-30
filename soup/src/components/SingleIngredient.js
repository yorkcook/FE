import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IngredientsCard from './IngredientsCard.js';

const SingleIngredient = (props) => {
  const [ingredient, setIngredient] = useState();

  useEffect(() => {
      const id = props.match.params.id;

      axios("")
        .get(res => {
          setIngredient(res)
        })
        .catch(err => console.log(err))
  }, [props.match.params.id])

return (
  
)

}
