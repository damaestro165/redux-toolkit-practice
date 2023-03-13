import { createSlice } from '@reduxjs/toolkit';
import { addCar } from './carsSlice';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    name: '',
    cost: 0,
  },
  reducers: {
    ChangeName(state, action) {
      state.name = action.payload;
    },
    ChangeCost(state, action) {
      state.cost = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(addCar, (state, action) => {
      state.name = '';
      state.cost = '';
    });
  },
});

export const { ChangeName, ChangeCost, ResetForm } = formSlice.actions;
export const formReducer = formSlice.reducer;
