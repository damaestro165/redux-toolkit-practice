import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeCar } from '../store';

function CarList() {
  const dispatch = useDispatch();

  const handleCarDelete = (id) => {
    dispatch(removeCar(id));
  };

  //for partial match
  const { cars, name } = useSelector(({ form, cars: { cars, searchTerm } }) => {
    const filteredCars = cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return {
      cars: filteredCars,
      name: form.name,
    };
  });

  return (
    <div className='car-list note '>
      {cars.map((car) => (
        <div key={car.id} className='panel'>
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
