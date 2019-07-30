import React, { useState } from 'react';

const IngredientsCard = (props) => {


  return (
    <div>
    <div className="page">{props.card.map(item => {
      return (
      <div className="card" key={item.id}>
        <h3 className="name">{item.item_name}</h3>
        <h4 className="quantity"><p className="Q-title"><strong>Quantity: </strong></p> {item.quantity}</h4>
        <h4 className="unit"><p className="U-title"><strong>Unit: </strong></p>{item.unit}</h4>
        <h4 className="price"><p className="P-title"><strong>Price: </strong></p>{item.price} cents</h4>
        <h4 className="category"><p className="C-title"><strong>Category: </strong></p>{item.cat_name}</h4>
        <h4 className="kitchen"><p className="K-title"><strong>Kitchen: </strong></p>{item.kit_name}</h4>
        <div onClick={props.plus} className="countButtons">+</div>
        <div onClick={props.minus} className="countButtons">-</div>
      </div>
      )
    })}

    </div>

    </div>
  );
}

export default IngredientsCard;
