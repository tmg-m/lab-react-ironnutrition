import React, { useState } from 'react';
import './foodBox.css'

function FoodBox({ name, calories, image, todayFood }) {

  const [quantity, setQty] = useState(0);


  const handleCal = () => {
    todayFood({name, calories, quantity})
    setQty(0)
  };

  const handleQuantity = (e)=> {
    const value = e.target.value;
    setQty(Number(value))
  };

  return (
    <div className="foodBox">
      <div>
        <img width={'120px'} height={'100px'} src={image} alt="pic"></img>
        <div>
          <h2>{name}</h2>
          <p>{calories} cal</p>
        </div>
      </div>

      <div className="btnXqnty">
        <input className="quantity" type='number' placeholder='0' value={quantity} onChange={handleQuantity} min={0} max={10000}/>
        <button onClick={handleCal}>+</button>
      </div>
    </div>
  );
}
export default FoodBox;