import React, { useState } from 'react';
import axios from 'axios';

const PutForm = (props) => {
  console.log("props", props)
  const [ingredient, setIngredient] = useState({item_name: "",
    quantity: "",
    price: "",
    alert_when: "",
    kit_id: 1,
    unit_id: "",
    cat_id: "",
    user_id: 1 });


function changeHandler(event){
  setIngredient({...ingredient, [event.target.name]: event.target.value})
}



function submitHandler(e){
    e.preventDefault();
    console.log(ingredient)
  console.log("new ingredient", {...ingredient, quantity: Number(ingredient.quantity),
    price: Number(ingredient.price), alert_when: Number(ingredient.alert_when),
    unit_id: Number(ingredient.unit_id), cat_id: Number(ingredient.cat_id), user_id: Number(ingredient.user_id),
  kit_id: Number(ingredient.kit_id)})

// useEffect(() => {
    axios
      .put(`https://server-soup.herokuapp.com/api/inventory/1`, {...ingredient, quantity: Number(ingredient.quantity),
        price: Number(ingredient.price), alert_when: Number(ingredient.alert_when),
        unit_id: Number(ingredient.unit_id), cat_id: Number(ingredient.cat_id), user_id: Number(ingredient.user_id),
      kit_id: Number(ingredient.kit_id)})
      // .post("https://05386425-fdd8-4080-a90a-ba001245303b.mock.pstmn.io/api/inventory", ingredient)
      .then(res => {console.log("response", res.data); setIngredient(res.data)})
      .catch(err => console.log(err))
      // }, [])
}



  return (
    <form onSubmit={submitHandler}>
      <label>
        Name:
        <input
        type="text"
        name="item_name"
        value={ingredient.item_name}
        onChange={changeHandler}
        />
      </label>
        <label>
          Quantity:
          <input
          type="text"
          name="quantity"
          value={ingredient.quantity}
          onChange={changeHandler}
          />
          </label>
            <label>
              Unit:
          <select name="unit_id" onChange={changeHandler}>
              <option >Select Option</option>
              <option value="1" >Pounds</option>
              <option value="2">Ounces</option>
              <option value="3">Packages</option>
              <option value="4">Cans</option>
              <option value="5">Cups</option>
              <option value="6">Pints</option>
              <option value="7">Gallons</option>
              <option value="8">Quarts</option>
              <option value="9">Bags</option>
              <option value="10">Jars</option>
              <option value="11">Bunches</option>
              <option value="12">Grams</option>
              <option value="13">Boxes</option>
            </select>
            </label>
              <label>
                Price:
                <input
                type="text"
                name="price"
                value={ingredient.price}
                onChange={changeHandler}
                />
              </label>
              <label>
                Alert when:
                <input
                type="text"
                name="alert_when"
                value={ingredient.alert_when}
                onChange={changeHandler}
                />
              </label>
                <label>
                  Category:
                  <select name="cat_id" onChange={changeHandler}>
                      <option>Select Option</option>
                      <option value="1">Produce</option>
                      <option value="2">Dairy</option>
                      <option value="3">Meat & Poultry</option>
                      <option value="4">Herbs & Spices</option>
                      <option value="5">Frozen</option>
                      <option value="6">Beverage</option>
                      <option value="7">Dry</option>
                      <option value="8">Canned & Jarred</option>
                      <option value="9">Other</option>
                    </select>
                </label>
                  <button type="submit">Submit</button>
    </form>
  )
}

export default PutForm;
