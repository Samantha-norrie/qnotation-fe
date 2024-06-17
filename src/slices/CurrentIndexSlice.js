import { createSlice } from '@reduxjs/toolkit';

export const currentIndexSlice = createSlice({
  name: 'currentIndex',
  initialState: {
    value: 0,
  },
  reducers: {
    updateCurrentIndex: (state, action) => {
      state.value = action.payload

    }
  },
})

export const {updateCurrentIndex} = currentIndexSlice.actions;

export default currentIndexSlice.reducer;