import React, { useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';

function App() {
  //all foods in db
  const [allFood, setAllFood] = useState(foods);

  // show Form
  const [formShow, setFormShow] = useState(false);
  const handleFormVisible = () => {
    setFormShow((formShow) => !formShow);
  };

  // form Input
  const handleAdd = (form) => {
    setAllFood((prev) => {
      return [
        ...prev,
        {
          name: form.name,
          calories: form.calories,
          image: form.image,
        },
      ];
    });
    setFormShow(false);
  };

  //Search
  const foodSearch = (input) => {
    if (input === '') {
      setAllFood(foods);
    } else {
      setAllFood(
        foods.filter((item) =>
          item.name.toLowerCase().includes(input.toLowerCase())
        )
      );
    }
  };

  // Today's food

/*   const [today, setToday] = useState({})
  const todayFood = () => {

  }; */

  return (
    <div className="App">
      <Search onSearch={foodSearch} />
      <button onClick={handleFormVisible}> Add Food</button>
      {formShow ? <AddFoodForm onAdd={handleAdd} /> : null}
      <div class="content">
        <div>
          {allFood.map((food, i) => {
            return (
              <FoodBox
                key={i}
                name={food.name}
                calories={food.calories}
                image={food.image}
                quantity={food.quantity}
              />
            );
          })}
        </div>
        <div>
          <h1>Today's foods</h1>

        </div>
      </div>
    </div>
  );
}

export default App;
