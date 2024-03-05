import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@store/store";

interface SampleState {
  value: number;
}

const initialState: SampleState = {
  value: 0,
};

export const sampleSlice = createSlice({
  name: "sample",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = sampleSlice.actions;

export const selectCount = (state: RootState) => state.sample.value;

export default sampleSlice.reducer;
