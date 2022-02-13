import React from 'react';
import './foodBox.css'

function FoodBox({ name, calories, image, quantity }) {
  return (
    <div className="foodBox">
      <div>
        <img width={"120px"} height={"100px"} src={image}></img>
        <div>
          <h2>{name}</h2>
          <p>{calories} cal</p>
        </div>
      </div>

      <div className='btnXqnty'>
        <p>{quantity}</p>
        <button>+</button>
      </div>

    </div>
  )
}
export default FoodBox;