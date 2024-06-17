import { createSlice } from '@reduxjs/toolkit';

export const circuitGatesSlice = createSlice({
  name: 'circuitGates',
  initialState: {
    value: [0,0,0],
  },
  reducers: {
    updateCircuitGatesSlice: (state, action) => {
      state.value = action.payload

    }
  },
})

export const {updateCircuitGatesSlice} = circuitGatesSlice.actions;

export default circuitGatesSlice.reducer;