import React from 'react';
import './foodBox.css'

function FoodBox({ name, calories, image, todayFood }) {

  const handleCal = () => {
    todayFood(name, calories)
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
        <input className="quantity" type='number' placeholder='0' min={0} max={10000}/>
        <button onClick={handleCal}>+</button>
      </div>
    </div>
  );
}
export default FoodBox;