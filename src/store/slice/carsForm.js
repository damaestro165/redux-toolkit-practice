import { createSlice, nanoid } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    cars: [],
  },
  reducers: {
    ChangeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.cars.payload({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
  },
  removeCar(state, action) {
    //Assumption
    //actio.payload== the id
    const updated = state.cars.filter((car) => car.id !== action.payload);
    state.cars = updated;
  },
});

export const { ChangeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carReducer = carsSlice.reducer;
