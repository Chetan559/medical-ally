import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPatientId: null,
};

const patientSlice = createSlice({
  name: "patient",
  initialState,
  reducers: {
    setSelectedPatientId: (state, action) => {
      state.selectedPatientId = action.payload;
    },
  },
});

export const { setSelectedPatientId } = patientSlice.actions;
export default patientSlice.reducer;
