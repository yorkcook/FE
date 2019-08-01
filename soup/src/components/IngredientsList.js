import React, { useState, useEffect } from 'react';
import { data } from '../dummyData.js';
import IngredientsCard from './IngredientsCard.js';
import axios from 'axios';

const IngredientsList = (props) => {
const [ingredient, setIngredient] = useState([]);
// {
//   "item_name": "yellow popcorn",
//   "quantity": 10,
//   "unit_id": "1",
//   "price": 1000,
//   "alert_when": 0,
//   "cat_id": 3,
//   "kit_id": 1
// }

useEffect(() => {
  axios
    .get("https://server-soup.herokuapp.com/api/inventory")
    .then(res => {
    setIngredient(res.data)})
    .catch(err => console.log(err))
}, [])

function minus(id, event){
  event.preventDefault()
  const object = ingredient.filter(item => item.id === id  )
  const newQuantity = object[0].quantity - 1
  console.log("new quantity", newQuantity)
  console.log("id", id)
  console.log("object", object)
  axios
    .put(`https://server-soup.herokuapp.com/api/inventory/${id}`, {
      quantity: newQuantity
    })
    .then(res => setIngredient(res))
    .catch(err => console.log(err))
}

function plus(id, event){
  event.preventDefault()
  const object = ingredient.filter(item => item.id === id  )
  const newQuantity = object[0].quantity + 1
  axios
    .put(`https://server-soup.herokuapp.com/api/inventory/${id}`, {
      quantity: newQuantity
    })
    .then(res => {
      console.log("response", res)
      setIngredient(res.data)
      window.location.reload(false);})
    .catch(err => console.log(err))
}

if (!ingredient){
  return <h1>LOADING</h1>
} else {
  return (
    <div>

      <IngredientsCard card={ingredient} plus={plus} minus={minus}/>
    </div>
  )
}
}

export default IngredientsList;
