import { createSlice } from '@reduxjs/toolkit';

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
});

export const { ChangeName, ChangeCost } = formSlice.actions;
export const formReducer = formSlice.reducer;
