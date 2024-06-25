import { configureStore } from "@reduxjs/toolkit";
import { currentIndexSlice } from "./slices/CurrentIndexSlice";
import { circuitGatesSlice } from "./slices/CircuitGatesSlice";

export default configureStore({
  reducer: {
    currentIndex: currentIndexSlice.reducer,
    circuitGates: circuitGatesSlice.reducer,
  },
});
