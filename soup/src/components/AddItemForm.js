import React, { useState } from 'react';

const AddItemForm = () => {
  const [newIngredient, setNewIngredient] = useState({name: "", quantity: "", unit: "", price: "",
category: "", kitchen: ""});
  const [ingredientArray, setIngredientArray] = useState([]);

function changeHandler(event){
  setNewIngredient({...newIngredient, [event.target.name]: event.target.value})
}

function submitHandler(event){
  event.preventDefault();
  setIngredientArray([...ingredientArray, newIngredient]);
}

  return (
    <form onSubmit={submitHandler}>
      <label>
        Name:
        <input
        type="text"
        name="name"
        value={newIngredient.name}
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
              <input
              type="text"
              name="unit"
              value={newIngredient.unit}
              onChange={changeHandler}
              />
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
                  <input
                  type="text"
                  name="category"
                  value={newIngredient.category}
                  onChange={changeHandler}
                  />
                </label>
                  <label>
                    Kitchen:
                    <input
                    type="text"
                    name="kitchen"
                    value={newIngredient.kitchen}
                    onChange={changeHandler}
                  </label>
    </form>
  )
}
