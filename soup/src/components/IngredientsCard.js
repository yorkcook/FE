import React from 'react';

const IngredientsCard = (props) => {
  return (
    <div>
    <div className="page">{props.card.map(item => {
      return (
      <div className="card">
        <h3>{item.name}</h3>
        <h4>{item.quantity}</h4>
        <h4>{item.unit}</h4>
        <p>{item.price}</p>
        <h4>{item.category}</h4>
        <h4>{item.kitchen}</h4>
      </div>
      )
    })}
    </div>
    </div>
  );
}

export default IngredientsCard;
