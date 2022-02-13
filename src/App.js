import React from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';

function App() {

  return (
    <div className="App">
      {foods.map((food, i) => {
        return <FoodBox key={i} name={food.name} calories={food.calories} image={food.image} quantity={food.quantity} />
      })}
    </div>
  );
}

export default App;
