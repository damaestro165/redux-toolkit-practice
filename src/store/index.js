import { configureStore } from '@reduxjs/toolkit';
import {
  carsReducer,
  addCar,
  removeCar,
  ChangeSearchTerm,
} from './slice/carsSlice';
import { formReducer, ChangeCost, ChangeName } from './slice/formSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    form: formReducer,
  },
});

export { store, removeCar, addCar, ChangeCost, ChangeName };
