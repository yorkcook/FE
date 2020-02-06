import React, { useState, useEffect } from "react";

import axiosWithAuth from "../components-york/axiosWithAuth.js";

const AddItemForm = props => {
  const [newIngredient, setNewIngredient] = useState({
    item_name: "",
    quantity: "",
    price: "",
    alert_when: "",
    kit_id: 1,
    unit_id: "",
    cat_id: "",
    user_id: 1
  });
  function changeHandler(event) {
    setNewIngredient({
      ...newIngredient,
      [event.target.name]: event.target.value
    });
  }
  function submitHandler(e) {
    e.preventDefault();
    console.log(newIngredient);
    console.log("new ingredient", {
      ...newIngredient,
      quantity: Number(newIngredient.quantity),
      price: Number(newIngredient.price),
      alert_when: Number(newIngredient.alert_when),
      unit_id: Number(newIngredient.unit_id),
      cat_id: Number(newIngredient.cat_id),
      user_id: Number(newIngredient.user_id),
      kit_id: Number(newIngredient.kit_id)
    });
  }
  useEffect(() => {
    axiosWithAuth()
      .post("https://we-serve-soup.herokuapp.com/api/inventory", {
        ...newIngredient,
        quantity: Number(newIngredient.quantity),
        price: Number(newIngredient.price),
        alert_when: Number(newIngredient.alert_when),
        unit_id: Number(newIngredient.unit_id),
        cat_id: Number(newIngredient.cat_id),
        user_id: Number(newIngredient.user_id),
        kit_id: Number(newIngredient.kit_id)
      })
      // .post("https://05386425-fdd8-4080-a90a-ba001245303b.mock.pstmn.io/api/inventory", newIngredient)
      .then(res => {
        console.log("response", res.data);
        setNewIngredient(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  function routeChange() {
    let path = "/inventory";
    props.history.push(path);
  }

  return (
    <form className="box" onSubmit={submitHandler}>
      <div>
        <label>
          Name:
          <div>
            <input
              type="text"
              name="item_name"
              value={newIngredient.item_name}
              onChange={changeHandler}
            />
          </div>
        </label>
      </div>
      <div>
        <label>
          Quantity:
          <div>
            <input
              type="text"
              name="quantity"
              value={newIngredient.quantity}
              onChange={changeHandler}
            />
          </div>
        </label>
      </div>
      <div>
        <label>
          Unit:
          <div>
            <select name="unit_id" onChange={changeHandler}>
              <option>Select Option</option>
              <option value="1">Pounds</option>
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
          </div>
        </label>
      </div>
      <div>
        <label>
          Price:
          <div>
            <input
              type="text"
              name="price"
              value={newIngredient.price}
              onChange={changeHandler}
            />
          </div>
        </label>
      </div>
      {/* <label>
        Alert when:
        <div>
          <input
            type="text"
            name="alert_when"
            value={newIngredient.alert_when}
            onChange={changeHandler}
          />
        </div>
      </label> */}
      <label>
        Category:
        <div>
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
        </div>
      </label>
      <button type="submit">Submit</button>
      <button onClick={routeChange}>Back</button>
    </form>
  );
};
export default AddItemForm;
