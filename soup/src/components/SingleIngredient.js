import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IngredientsCard from './IngredientsCard.js';

const SingleIngredient = (props) => {
  const [ingredient, setIngredient] = useState();

  useEffect(() => {
      const id = props.match.params.id;

      axios(`https://server-soup.herokuapp.com/api/inventory/${id}`)
        .get(res => {
          setIngredient(res)
        })
        .catch(err => console.log(err))
  }, [props.match.params.id])

return (
  <IngredientsCard card={ingredient} />
)

}

export default SingleIngredient;
