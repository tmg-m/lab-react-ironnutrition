import React, { useEffect, useState } from 'react';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import TodayFood from './components/TodayFood';
 
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
        allFood.filter((item) =>
          item.name.toLowerCase().includes(input.toLowerCase())
        )
      );
    }
  };

  // Today's food
  const [foodToday, setFoodToday] = useState([])

  const todayFood = (handleCal) => {
    setFoodToday(prev => {
      return [
        ...prev,
        handleCal,
      ]
    })
  };

  const [totalCal, setTotal] = useState(0);
  const handleTotal = () => {
    let sum = 0;
    foodToday.forEach(food => sum = sum + (food.calories*food.quantity));
    setTotal(sum)
  }

  useEffect(() => {
    handleTotal()
  }, [foodToday])

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
                todayFood={todayFood}
              />
            );
          })}
        </div>
        <div>
          <h1>Today's foods</h1>
          {foodToday.map((plate, i)=> {
            return (
              <TodayFood
                key={i}
                name={plate.name}
                calories={plate.calories}
                quantity={plate.quantity}
              />
            );
          })}
          <h2>Total: {totalCal} cal</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
