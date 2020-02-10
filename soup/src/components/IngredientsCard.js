import React, { useState, useEffect } from "react";

import axiosWithAuth from "../components/axiosWithAuth";
import { Link } from "react-router-dom";

// import { data } from "../dummyData.js";

const IngredientsCard = props => {
  const [ingredient, setIngredient] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("https://we-serve-soup.herokuapp.com/api/inventory")
      .then(res => {
        setIngredient(res.data);
      })
      .catch(err => {
        console.log("Danger, Danger!", err);
      });
  }, []);

  // console.log("data", data);

  return (
    <div>
      <Link to="/add-item" className="links">
        <button>Add Item</button>
      </Link>
      <Link to="/inventory" className="links">
        <button>Inventory</button>
      </Link>
      <div className="page">
        {props.card.map(item => {
          console.log("props", props);
          return (
            <div className="card" key={item.id}>
              <h3 className="headline">{item.item_name}</h3>
              <h4 className="quantity">
                <p className="Q-title">
                  <strong>Quantity: </strong>
                </p>{" "}
                {item.quantity}
              </h4>
              <h4 className="unit">
                <p className="U-title">
                  <strong>Unit: </strong>
                </p>
                {item.unit}
              </h4>
              <h4 className="price">
                <p className="P-title">
                  <strong>Price: </strong>
                </p>
                {item.price} cents
              </h4>
              <h4 className="category">
                <p className="C-title">
                  <strong>Category: </strong>
                </p>
                {item.cat_name}
              </h4>
              <h4 className="kitchen">
                <p className="K-title">
                  <strong>Kitchen: </strong>
                </p>
                {item.kit_name}
              </h4>
              <div>
                <Link
                  to={{ pathname: `/update-item/${item.id}`, state: { item } }}
                >
                  <button>Edit</button>
                </Link>
                <button>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default IngredientsCard;
