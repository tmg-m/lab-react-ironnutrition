import React, { useState } from 'react';
function AddFoodForm({ onAdd }) {
  const [form, setForm] = useState({
    name: '',
    calories: 0,
    image: '',
  });

  const handleForm = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleClick = () => {
    onAdd(form);
  };

  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 'maxContent',
  };
  return (
    <>
      <div style={divStyle}>
        <label>Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleForm}
          placeholder="Food name"
          type="text"
        ></input>
        <label>calories</label>
        <input
          name="calories"
          value={form.calories}
          onChange={handleForm}
          type="number"
          min={0}
          max={10000}
        ></input>
        <label>Image</label>
        <input
          name="image"
          value={form.image}
          onChange={handleForm}
          type="file"
        ></input>
        <button onClick={handleClick}>Submit</button>
      </div>
    </>
  );
}

export default AddFoodForm;
