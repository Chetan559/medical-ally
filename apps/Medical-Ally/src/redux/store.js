import { configureStore } from "@reduxjs/toolkit";
import patientReducer from "./patientSlice";

const store = configureStore({
  reducer: {
    patient: patientReducer,
  },
});

export default store;
