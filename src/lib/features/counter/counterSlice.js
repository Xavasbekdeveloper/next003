import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      localStorage.setItem("counter", String(state.value));
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    defaultCounter: (state, { payload }) => {
      state.value = payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, defaultCounter } =
  counterSlice.actions;

export default counterSlice.reducer;
