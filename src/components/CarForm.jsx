import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ChangeCost, ChangeName, addCar, } from '../store';

function CarForm() {
  const { name, cost } = useSelector((state) => {
    return { name: state.form.name, cost: state.form.cost };
  });

  const dispatch = useDispatch();

  const handleNameChange = (event) => {
    dispatch(ChangeName(event.target.value));
  };

  const handleCostChange = (event) => {
    const carCost = parseInt(event.target.value) || 0;
    dispatch(ChangeCost(carCost));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    dispatch(addCar({ name, cost }));
  };

  return (
    <div className='car-form panel'>
      <h4 className='subtitle is-3'>Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className='feild-group'>
          <div className='field'>
            <label className='label'>Name:</label>
            <input
              className='input is-expanded'
              value={name}
              onChange={handleNameChange}
            />
          </div>

          <div className='field'>
            <label className='label'>Cost:</label>
            <input
              className='input is-expanded'
              value={cost || ''}
              onChange={handleCostChange}
              type='number'
            />
          </div>
        </div>
        <div className='field'>
          <button className='butten is-link'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
