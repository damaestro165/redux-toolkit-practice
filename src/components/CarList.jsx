import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();

  const handleCarDelete = (id) => {
    dispatch(removeCar(id));
  };

  const cars = useSelector((state) => state.cars.cars);
  return (
    <div>
      {cars.map((car) => (
        <div key={car.id}>
          <p>
            {car.name} - ${car.cost}
          </p>
          <button
            className='button is-danger'
            onClick={() => handleCarDelete(car.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default CarList;
