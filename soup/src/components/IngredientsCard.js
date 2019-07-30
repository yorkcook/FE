import React from 'react';

const IngredientsCard = (props) => {
  return (
    <div>
    <div className="page">{props.card.map(item => {
      return (
      <div className="card" key={item.id}>
        <h3 className="name">{item.name}</h3>
        <h4 className="quantity"><p className="Q-title"><strong>Quantity: </strong></p> {item.quantity}</h4>
        <h4 className="unit"><p className="U-title"><strong>Unit: </strong></p>{item.unit}</h4>
        <h4 className="price"><p className="P-title"><strong>Price: </strong></p>{item.price} cents</h4>
        <h4 className="category"><p className="C-title"><strong>Category: </strong></p>{item.category}</h4>
        <h4 className="kitchen"><p className="K-title"><strong>Kitchen: </strong></p>{item.kitchen}</h4>
      </div>
      )
    })}
    </div>
    </div>
  );
}

export default IngredientsCard;
