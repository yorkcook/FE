import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddItemForm = () => {
  const [newIngredient, setNewIngredient] = useState({name: "", quantity: "", unit: "", price: "",
category: "", kitchen: ""});


function changeHandler(event){
  setNewIngredient({...newIngredient, [event.target.name]: event.target.value})
}



function submitHandler(){

// useEffect(() => {
    axios
      .post("https://server-soup.herokuapp.com/api/inventory", newIngredient)
      // .post("https://05386425-fdd8-4080-a90a-ba001245303b.mock.pstmn.io/api/inventory", newIngredient)
      .then(res => setNewIngredient(res))
      .catch(err => console.log(err))
      // }, [])
}



  return (
    <form onSubmit={submitHandler}>
      <label>
        Name:
        <input
        type="text"
        name="name"
        value={newIngredient.item_name}
        onChange={changeHandler}
        />
      </label>
        <label>
          Quantity:
          <input
          type="text"
          name="quantity"
          value={newIngredient.quantity}
          onChange={changeHandler}
          />
          </label>
            <label>
              Unit:
          <select name="units">
              <option value="pounds">Pounds</option>
              <option value="ounces">Ounces</option>
              <option value="packages">Packages</option>
              <option value="cans">Cans</option>
              <option value="cups">Cups</option>
              <option value="pints">Pints</option>
              <option value="gallons">Gallons</option>
              <option value="quarts">Quarts</option>
              <option value="bags">Bags</option>
              <option value="jars">Jars</option>
              <option value="bunches">Bunches</option>
              <option value="grams">Grams</option>
              <option value="boxes">Boxes</option>
            </select>
            </label>
              <label>
                Price:
                <input
                type="text"
                name="price"
                value={newIngredient.price}
                onChange={changeHandler}
                />
              </label>
                <label>
                  Category:
                  <select name="categories">
                      <option value="produce">Produce</option>
                      <option value="dairy">Dairy</option>
                      <option value="meat&poultry">Meat & Poultry</option>
                      <option value="herbs&spices">Herbs & Spices</option>
                      <option value="frozen">Frozen</option>
                      <option value="beverage">Beverage</option>
                      <option value="dry">Dry</option>
                      <option value="canned&jarred">Canned & Jarred</option>
                      <option value="other">Other</option>
                    </select>
                </label>
                  <label>
                    Kitchen:
                    <input
                    type="text"
                    name="kitchen"
                    value={newIngredient.kit_name}
                    onChange={changeHandler}
                    />
                  </label>
                  <button type="submit">Submit</button>
    </form>
  )
}

export default AddItemForm;
