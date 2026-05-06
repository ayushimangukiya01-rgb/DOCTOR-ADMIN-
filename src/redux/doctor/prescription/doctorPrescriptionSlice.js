import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../../api/apiHandler";

export const fetchDoctorPrescription = createAsyncThunk(
  "doctorPrescription/fetchDoctorPrescription",
  async () => {
    return await getData("/doctor/prescription");
  }
);

const doctorPrescriptionSlice = createSlice({
  name: "doctorPrescription",
  initialState: {
    patientSummary: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctorPrescription.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchDoctorPrescription.fulfilled, (state, action) => {
        state.loading = false;
        Object.assign(state, action.payload);
      })
      .addCase(fetchDoctorPrescription.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default doctorPrescriptionSlice.reducer;